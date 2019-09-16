var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var p2DebugDraw = (function () {
    function p2DebugDraw(world) {
        this.COLOR_D_SLEEP = 0x999999;
        this.COLOR_D_WAKE = 0xe5b2b2;
        this.COLOR_K = 0x7f7fe5;
        this.COLOR_S = 0x7fe57f;
        this.lineWidth = 1;
        this.world = world;
    }
    p2DebugDraw.prototype.setSprite = function (sprite) {
        this.sprite = sprite;
    };
    p2DebugDraw.prototype.setLineWidth = function (value) {
        this.lineWidth = value;
    };
    p2DebugDraw.prototype.drawDebug = function () {
        this.sprite.graphics.clear();
        var l = this.world.bodies.length;
        for (var i = 0; i < l; i++) {
            var body = this.world.bodies[i];
            for (var j = 0; j < body.shapes.length; j++) {
                var shape = body.shapes[j];
                if (shape instanceof p2.Box) {
                    this.drawBox(shape, body);
                }
                else if (shape instanceof p2.Convex) {
                    this.drawConvex(shape, body);
                }
                else if (shape instanceof p2.Circle) {
                    this.drawCircle(shape, body);
                }
                else if (shape instanceof p2.Line) {
                    this.drawLine(shape, body);
                }
                else if (shape instanceof p2.Particle) {
                    this.drawParticle(shape, body);
                }
                else if (shape instanceof p2.Plane) {
                    this.drawPlane(shape, body);
                }
                else if (shape instanceof p2.Capsule) {
                    this.drawCapsule(shape, body);
                }
            }
        }
    };
    p2DebugDraw.prototype.drawRay = function (start, end, color) {
        // Draw line
        var g = this.sprite.graphics;
        g.lineStyle(this.lineWidth, color);
        g.moveTo(start[0], start[1]);
        g.lineTo(end[0], end[1]);
        g.endFill();
    };
    p2DebugDraw.prototype.drawBox = function (shape, b) {
        this.drawConvex(shape, b);
    };
    p2DebugDraw.prototype.drawCircle = function (shape, b) {
        var color = this.getColor(b);
        var g = this.sprite.graphics;
        g.lineStyle(this.lineWidth, color);
        g.beginFill(color, 0.5);
        g.drawCircle(b.position[0], b.position[1], shape.radius);
        var edge = new Array();
        b.toWorldFrame(edge, [shape.radius, 0]);
        g.moveTo(b.position[0], b.position[1]);
        g.lineTo(edge[0], edge[1]);
        g.endFill();
    };
    p2DebugDraw.prototype.drawCapsule = function (shape, b) {
        var color = this.getColor(b);
        var len = shape.length;
        var radius = shape.radius;
        var p1 = new Array(), p2 = new Array(), p3 = new Array(), p4 = new Array();
        var a1 = new Array(), a2 = new Array();
        b.toWorldFrame(p1, [-len / 2, -radius]);
        b.toWorldFrame(p2, [len / 2, -radius]);
        b.toWorldFrame(p3, [len / 2, radius]);
        b.toWorldFrame(p4, [-len / 2, radius]);
        b.toWorldFrame(a1, [len / 2, 0]);
        b.toWorldFrame(a2, [-len / 2, 0]);
        var g = this.sprite.graphics;
        g.lineStyle(this.lineWidth, color);
        g.beginFill(color, 0.5);
        g.drawCircle(a1[0], a1[1], radius);
        g.endFill();
        g.lineStyle(this.lineWidth, color);
        g.beginFill(color, 0.5);
        g.drawCircle(a2[0], a2[1], radius);
        g.endFill();
        g.lineStyle(this.lineWidth, color);
        g.beginFill(color, 0.5);
        g.moveTo(p1[0], p1[1]);
        g.lineTo(p2[0], p2[1]);
        g.lineTo(p3[0], p3[1]);
        g.lineTo(p4[0], p4[1]);
        g.endFill();
    };
    p2DebugDraw.prototype.drawLine = function (shape, b) {
        var color = this.getColor(b);
        var len = shape.length;
        var p1 = new Array(), p2 = new Array();
        b.toWorldFrame(p1, [-len / 2, 0]);
        b.toWorldFrame(p2, [len / 2, 0]);
        var g = this.sprite.graphics;
        g.lineStyle(this.lineWidth, color);
        g.moveTo(p1[0], p1[1]);
        g.lineTo(p2[0], p2[1]);
        g.endFill();
    };
    p2DebugDraw.prototype.drawParticle = function (shape, b) {
        var color = this.getColor(b);
        var g = this.sprite.graphics;
        g.lineStyle(this.lineWidth, color);
        g.beginFill(color, 0.5);
        g.drawCircle(b.position[0], b.position[1], 1);
        g.endFill();
        g.lineStyle(this.lineWidth, color);
        g.drawCircle(b.position[0], b.position[1], 5);
        g.endFill();
    };
    p2DebugDraw.prototype.drawConvex = function (shape, b) {
        var color = this.getColor(b);
        var l = shape.vertices.length;
        var g = this.sprite.graphics;
        g.lineStyle(this.lineWidth, color);
        g.beginFill(color, 0.5);
        var worldPoint = new Array();
        b.toWorldFrame(worldPoint, shape.vertices[0]);
        //g.moveTo(worldPoint[0], worldPoint[1]);
        g.moveTo(b.position[0], b.position[1]);
        g.lineTo(worldPoint[0], worldPoint[1]);
        for (var i = 1; i <= l; i++) {
            b.toWorldFrame(worldPoint, shape.vertices[i % l]);
            g.lineTo(worldPoint[0], worldPoint[1]);
        }
        g.endFill();
    };
    p2DebugDraw.prototype.drawPlane = function (shape, b) {
        var color = this.COLOR_D_SLEEP;
        var g = this.sprite.graphics;
        g.lineStyle(this.lineWidth, color);
        g.beginFill(color, 1);
        var start = new Array();
        var end = new Array();
        b.toWorldFrame(start, [-1000, 0]);
        g.moveTo(start[0], start[1]);
        b.toWorldFrame(end, [1000, 0]);
        g.lineTo(end[0], end[1]);
        b.toWorldFrame(end, [1000, -1000]);
        g.lineTo(end[0], end[1]);
        b.toWorldFrame(end, [-1000, -1000]);
        g.lineTo(end[0], end[1]);
        b.toWorldFrame(end, [-1000, -0]);
        g.lineTo(end[0], end[1]);
        g.endFill();
    };
    p2DebugDraw.prototype.getColor = function (b) {
        var color = this.COLOR_D_SLEEP;
        if (b.type == p2.Body.KINEMATIC) {
            color = this.COLOR_K;
        }
        else if (b.type == p2.Body.STATIC) {
            color = this.COLOR_S;
        }
        else if (b.sleepState == p2.Body.AWAKE) {
            color = this.COLOR_D_WAKE;
        }
        return color;
    };
    return p2DebugDraw;
}());
__reflect(p2DebugDraw.prototype, "p2DebugDraw");
// TypeScript file 
var JuiData = (function () {
    function JuiData() {
    }
    JuiData.getzi = function (ajArr, count, not) {
        if (ajArr === void 0) { ajArr = []; }
        if (count === void 0) { count = 1; }
        if (not === void 0) { not = true; }
        var objArr = [];
        ajArr.length > count ? count = ajArr.length : count = count;
        for (var i = 0; i < count; i++) {
            if (i == ajArr.length) {
                i = ajArr.length - 1;
                count--;
            }
            var aj = ajArr[i];
            if (!aj.pobj)
                continue;
            var obj;
            if (!aj.pobj.getChildByName(aj.obj.name + (aj._id || "") + i)) {
                if (aj.typ == 1) {
                    obj = new egret.Bitmap();
                }
                else if (aj.typ == 3) {
                    obj = new egret.DisplayObjectContainer();
                }
                else if (aj.typ == 4) {
                    obj = new egret.TextField();
                    for (var i_1 in aj["Textfield"]) {
                        obj[i_1] = aj["Textfield"][i_1];
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
                }
                else if (aj.typ == "血条") {
                    obj = new egret.DisplayObjectContainer();
                    var hpbg = new egret.Bitmap();
                    hpbg.name = "hpbg";
                    Jui.getSingle().setImg(hpbg, (aj.hpbg || "http://image.kxtui.com/pg/fi/15102/1510210325215.png"));
                    hpbg.width = Jui.getSingle().deval("w", aj.pobj, aj);
                    hpbg.height = Jui.getSingle().deval("h", aj.pobj, aj);
                    // hpbg.graphics.beginFill(0x808080, 1);
                    // hpbg.graphics.drawRect(0, 0, Jui.getSingle().deval("w", aj.pobj, aj), Jui.getSingle().deval("h", aj.pobj, aj));
                    // hpbg.graphics.endFill();
                    var hpbar = new egret.Bitmap();
                    hpbar.name = "hpbar";
                    Jui.getSingle().setImg(hpbar, (aj.hpbar || "http://image.kxtui.com/pg/fi/15101/1510140721127.png"));
                    hpbar.width = 0;
                    hpbar.height = Jui.getSingle().deval("h", aj.pobj, aj);
                    obj.mxhp = aj.pobj.mxhp || aj.pobj["英雄血气"] || aj.pobj.hp;
                    if (aj.hptype == 1) {
                        obj.addChild(hpbar);
                        obj.addChild(hpbg);
                    }
                    else {
                        obj.addChild(hpbg);
                        obj.addChild(hpbar);
                    }
                    // obj = new HP(hpbar,aj.hp,aj.mqhp);
                    //Jui.getSingle().actt({obj:obj,pobj:aj.pobj,data:{"actt":{"跟随":{"gs":aj.obj.name}}}})
                }
                else if (aj.typ == 10) {
                    obj = new egret.BitmapText();
                    obj.font = RES.getRes(aj.font || "rankfont1_fnt");
                    obj.text = aj.ca;
                }
                else if (aj.typ == "虚线") {
                    obj = new DottedLine(aj.bgcolor || 0x000000, aj.tk || 2, aj.alpha || 1);
                }
                obj.name = aj.obj.name + (aj._id || "") + i;
            }
            else {
                obj = aj.pobj.getChildByName(aj.obj.name + (aj._id || "") + i);
            }
            if (aj.x != undefined)
                obj.x = Jui.getSingle().deval("x", aj.pobj, aj); //aj.x;
            if (aj.y != undefined)
                obj.y = Jui.getSingle().deval("y", aj.pobj, aj); //aj.y;
            if (aj.w != undefined)
                obj.width = Jui.getSingle().deval("w", aj.pobj, aj); //aj.w;
            if (aj.h != undefined)
                obj.height = Jui.getSingle().deval("h", aj.pobj, aj); //aj.h;
            if (aj["anchorOffsetX"] != undefined) {
                obj.anchorOffsetX = obj.width * aj["anchorOffsetX"];
            }
            else {
                obj.anchorOffsetX = obj.width * 0.5;
            }
            if (aj["anchorOffsetY"] != undefined) {
                obj.anchorOffsetY = obj.height * aj["anchorOffsetY"];
            }
            else {
                obj.anchorOffsetY = obj.height * 0.5;
            }
            if (aj["rotation"] != undefined)
                obj.rotation = aj["rotation"]; //旋转角度
            if (aj["scaleX"] != undefined)
                obj.scaleX = aj["scaleX"];
            if (aj["scaleY"] != undefined)
                obj.scaleY = aj["scaleY"];
            if (aj["visible"] != undefined)
                obj.visible = aj["visible"];
            if (aj["alpha"] != undefined)
                obj.alpha = aj["alpha"];
            if (aj.typ == 1) {
                Jui.getSingle().setImg(obj, aj["png"], aj["anchor"] || -1);
            }
            else if (aj.typ == 3) {
                if (aj.bgcolor) {
                    var zicolor = obj.getChildByName("zibgcolor");
                    if (!zicolor) {
                        zicolor = new egret.Shape();
                        obj.addChild(zicolor);
                    }
                    zicolor.name = "zibgcolor";
                    if (aj.shapeType == 1) {
                        Jui.getSingle().setShape(zicolor, 1, { color: window["T"].color(aj["bgcolor"], "0x"), x: 0, y: 0, w: obj.width, h: obj.height, yuanjiao: aj.yuanjiao, alpha: (aj.bgalpha || 1), line: aj.line, lineColor: aj.lineColor });
                    }
                    else if (aj.shapeType == 3) {
                        Jui.getSingle().setShape(zicolor, 3, { color: window["T"].color(aj["bgcolor"], "0x"), x: 0, y: 0, r: obj.width / 2, line: aj.line, lineColor: aj.lineColor });
                    }
                    else {
                        Jui.getSingle().setShape(zicolor, 2, { color: window["T"].color(aj["bgcolor"], "0x"), x: 0, y: 0, w: obj.width, h: obj.height, alpha: (aj.bgalpha || 1), line: aj.line, lineColor: aj.lineColor });
                    }
                    // zicolor.graphics.clear();
                    // zicolor.graphics.beginFill(window["T"].color(aj.bgcolor,"0x"));
                    // zicolor.graphics.drawRect(0, 0, obj.width, obj.height);
                    // zicolor.graphics.endFill();
                }
                if (aj.bgimg) {
                    var zibg = obj.getChildByName("zibgimg");
                    if (!zibg) {
                        zibg = new egret.Bitmap();
                        obj.addChild(zibg);
                    }
                    if (aj.w != undefined)
                        zibg.width = obj.width;
                    if (aj.w != undefined)
                        zibg.height = obj.height;
                    zibg.name = "zibgimg";
                    Jui.getSingle().setImg(zibg, aj.bgimg);
                }
                if (aj.ca != undefined && aj.ca != "") {
                    var ziText = obj.getChildByName("zitext");
                    if (!ziText) {
                        ziText = new egret.TextField();
                        obj.addChild(ziText);
                    }
                    // ziText.x = obj.width/2-ziText.width/2;
                    // ziText.y = obj.height/2-ziText.height/2;
                    ziText.name = "zitext";
                    ziText.width = obj.width;
                    ziText.height = obj.height;
                    ziText.text = aj.ca;
                    ziText.verticalAlign = egret.VerticalAlign.MIDDLE;
                    for (var s in aj["Textfield"]) {
                        ziText[s] = aj["Textfield"][s];
                    }
                }
                if (aj.yingzi) {
                    var yingzi = obj.getChildByName("yingzi"); //获取该该对象已存在的蒙层
                    if (!yingzi) {
                        yingzi = new egret.Bitmap();
                        yingzi.name = "yingzi";
                        Jui.getSingle().setImg(yingzi, aj.yingzi.png, 0.5);
                        yingzi.x = Jui.getSingle().deval('x', obj, aj.yingzi);
                        yingzi.y = Jui.getSingle().deval('y', obj, aj.yingzi);
                        yingzi.w = Jui.getSingle().deval('w', obj, aj.yingzi);
                        yingzi.h = Jui.getSingle().deval('h', obj, aj.yingzi);
                        if (aj.yingzi.scaleX)
                            yingzi.scaleX = aj.yingzi.scaleX;
                        if (aj.yingzi.scaleY)
                            yingzi.scaleY = aj.yingzi.scaleY;
                        obj.addChildAt(yingzi, 0);
                    }
                }
            }
            else if (aj.typ == "血条") {
                // obj.setHp = (aj.mqhp||aj.hp);
                var hp = obj.getChildByName("hpbar");
                //egret.Tween.get(hp).to({width:Jui.getSingle().deval("w", aj.pobj, aj)*aj.hp/100},200)
                // hp.graphics.clear();
                var dqhp = aj.pobj.hp;
                if (dqhp > obj.mxhp)
                    dqhp = obj.mxhp;
                egret.Tween.get(hp).to({ width: Jui.getSingle().deval("w", aj.pobj, aj) * dqhp / obj.mxhp }, 200);
            }
            else if (aj.typ == 7) {
                obj.graphics.clear();
                if (aj["shapeType"] == 1) {
                    obj.graphics.lineStyle(aj.chu || 3, window["T"].color(aj.bgcolor || 0, "0x"));
                    obj.graphics.moveTo(Jui.getSingle().deval("x0", aj.pobj, aj), Jui.getSingle().deval("y0", aj.pobj, aj));
                    obj.graphics.lineTo(Jui.getSingle().deval("x1", aj.pobj, aj), Jui.getSingle().deval("y1", aj.pobj, aj));
                    obj.graphics.endFill();
                }
                else if (aj["shapeType"] == 2) {
                    obj.graphics.beginFill(window["T"].color(aj.bgcolor || 0, "0x"), aj.alpha || 1);
                    obj.graphics.drawCircle(Jui.getSingle().deval("x", aj.pobj, aj), Jui.getSingle().deval("y", aj.pobj, aj), Jui.getSingle().deval("r", aj.pobj, aj));
                    obj.graphics.endFill();
                }
                else if (aj["shapeType"] == 3) {
                    Jui.getSingle().setShape(obj, 1, { color: 0x00ff00, x: Jui.getSingle().deval("x", aj.pobj, aj), y: Jui.getSingle().deval("y", aj.pobj, aj), w: Jui.getSingle().deval("w", aj.pobj, aj), h: Jui.getSingle().deval("h", aj.pobj, aj), yuanjiao: aj.yuanjiao });
                }
                else {
                    // obj.graphics.beginFill(0xff0000, 0.5);
                    // obj.graphics.drawRect(0, 0, 500, 500);
                    // obj.graphics.endFill();
                    obj.graphics.beginFill(window["T"].color((aj.bgcolor || 0), "0x"), (aj.alpha || 1));
                    obj.graphics.drawRect(Jui.getSingle().deval("x", aj.pobj, aj), Jui.getSingle().deval("y", aj.pobj, aj), Jui.getSingle().deval("w", aj.pobj, aj), Jui.getSingle().deval("h", aj.pobj, aj));
                    obj.graphics.endFill();
                }
            }
            else if (aj.typ == "虚线") {
                obj.setline({ x: Jui.getSingle().deval("x0", aj.pobj, aj), y: Jui.getSingle().deval("y0", aj.pobj, aj) }, { x: Jui.getSingle().deval("x1", aj.pobj, aj), y: Jui.getSingle().deval("y1", aj.pobj, aj) }, aj.dx || 20, aj.jiange || 3);
            }
            if (aj.listener) {
                var listener = aj.listener;
                window["T"].listener(listener.fun, listener.obj, listener.event, listener.funcName, listener.thisObj, listener.mp || false);
            }
            objArr.push(obj);
        }
        return objArr;
    };
    JuiData.prototype.getBp = function (p0, p1, p2, p3, t) {
        var point = { x: 0, y: 0 };
        // point.x = (1 - t) * (1 - t) * p0.x + 2 * t * (1 - t) * p1.x + t * t * p3.x;
        // point.y = (1 - t) * (1 - t) * p0.y + 2 * t * (1 - t) * p1.y + t * t * p3.y;
        point.x = (1 - t) * (1 - t) * (1 - t) * p0.x + 3 * t * (1 - t) * (1 - t) * p1.x + 3 * p2.x * t * t * (1 - t) + t * t * t * p3.x;
        point.y = (1 - t) * (1 - t) * (1 - t) * p0.y + 3 * t * (1 - t) * (1 - t) * p1.y + 3 * p2.y * t * t * (1 - t) + t * t * t * p3.y;
        return point;
    };
    return JuiData;
}());
__reflect(JuiData.prototype, "JuiData");
// var jnfsfun = function (obj) {
//     let gongji = obj[2],obj1 = obj[0],obj2 = obj[1],target=obj[4];
//     var pzt;       //技能碰撞体  暂时没有效果
//     var loop = -1;
//     2 == gongji["jntyp"]&&(loop=1)
//     if (gongji["jnpng"]) {
//         if (gongji["jnjson"]) {
//             pzt = new egret.MovieClip();
//             Jui.getSingle().setMove(pzt, gongji["jnjson"], gongji["jnpng"], loop, gongji["jnw"], gongji["jnh"], "", gongji["jnscx"], gongji["jnscy"],gongji["jnscax"], gongji["jnscay"]);
//         } else {
//             pzt = new egret.Bitmap();
//             Jui.getSingle().setImg(pzt, gongji["jnpng"]);
//         }
//         if(gongji["endimg"])pzt["endimg"] = gongji["endimg"];
//         if(gongji["endjson"])pzt["endjson"] = gongji["endjson"];
//         if(gongji["endrt"])pzt["endrt"] = gongji["endrt"];
//     } else {
//         pzt = JuiData.getzi([{ typ: 7, bgcolor: 0x000000,alpha:0, x: 0, y: 0, w: 50, h: 50, obj: obj[5], pobj: obj[3] }])[0];
//     }
//     pzt["jnsh"] = gongji["jnsh"]||0;
//     pzt.name = obj1.name + obj1["zdwuti"];
//     if (pzt&&obj[0].parent&&obj2.parent&&obj2.name.indexOf("removed")==-1) {
//         if(gongji["jnsound"])window["播放音效"]({obj:pzt,url:gongji["jnsound"]});
//         //var index = obj[3].$children.indexOf(obj2);
//         //obj[3].addChildAt(pzt, index);
//         obj[0].parent.addChild(pzt);
//         pzt.anchorOffsetX = 0;
//         if(gongji["jnscax"]!=undefined)pzt.anchorOffsetX = gongji["jnscax"]*pzt.width;
//         pzt.anchorOffsetY = 0;
//         if(gongji["jnscay"]!=undefined)pzt.anchorOffsetY = gongji["jnscay"]*pzt.height;
//         pzt.x = obj1.x + (obj1.sldx || 0);
//         pzt.y = obj1.y + (obj1.sldy || 0);
//         if (2 == gongji["jntyp"]) {
//             pzt.x = obj2.x + (obj2.sldx || 0);
//             pzt.y = obj2.y + (obj2.sldy || 0);
//             pzt.addEventListener(egret.Event.COMPLETE, zdgjfun, [pzt, obj1, obj2, target, gongji]);
//         } else if (3 == gongji["jntyp"]) {
//             let dianx1 = pzt.x + (obj2.x + (obj2.sldx || 0) - pzt.x) / 2;
//             let diany1 = pzt.y - 250;
//             let time1 = Jui.getSingle().getTime(pzt.x, pzt.y, dianx1, diany1, obj1.jnsp);
//             let time2 = Jui.getSingle().getTime(dianx1, diany1, obj2.x + (obj2.sldx || 0), obj2.y + (obj2.sldy || 0), obj1.jnsp);
//             let tween = egret.Tween.get(pzt).to({ x: dianx1, y: diany1 }, time1).to({ x: obj2.x + (obj2.sldx || 0), y: obj2.y + (obj2.sldy || 0) }, time2).call(zdgjfun, [pzt, obj1, obj2, target, gongji], [[pzt, obj1, obj2, target]])
//         } else if(4 == gongji["jntyp"]){
//             let time_1 = Jui.getSingle().getTime(pzt.x, pzt.y, obj2.x + (obj2.sldx || 0), obj2.y + (obj2.sldy || 0), obj1.jnsp);
//             if(!gongji["ontxz"])pzt.rotation = Jui.getSingle().fire(pzt.x, pzt.y, obj2.x + (obj2.sldx || 0), obj2.y + (obj2.sldy || 0));
//             var tween_1 = egret.Tween.get(pzt).to({ x: obj2.x + (obj2.sldx || 0) }, time_1);
//             let ease = egret.Ease.backOut;
//             if(obj2.y-obj1.y>0)ease =egret.Ease.backIn;
//             egret.Tween.get(pzt).to({y:obj2.y + (obj2.sldy || 0)},time_1,ease);
//             tween_1.call(zdgjfun, [pzt, obj1, obj2, target, gongji], [[pzt, obj1, obj2, target]])
//         }else {
//             let time_1 = Jui.getSingle().getTime(pzt.x, pzt.y, obj2.x + (obj2.sldx || 0), obj2.y + (obj2.sldy || 0), obj1.jnsp);
//             if(!gongji["ontxz"])pzt.rotation = Jui.getSingle().fire(pzt.x, pzt.y, obj2.x + (obj2.sldx || 0), obj2.y + (obj2.sldy || 0));
//             var tween_1 = egret.Tween.get(pzt).to({ x: obj2.x + (obj2.sldx || 0), y: obj2.y + (obj2.sldy || 0) }, time_1,egret.Ease.sineOut);
//             tween_1.call(zdgjfun, [pzt, obj1, obj2, target, gongji], [[pzt, obj1, obj2, target]])
//         }
//     }
// }
// var zdgjfun = function (obj) {          //自动攻击技能后续函数
//     this[0]["user"] = this[1];
//     window["碰撞后事件3"]({obj:this[2],wuti1:this[0],wuti2:this[2],url:this[2]["murl"]})
//     // Jui.getSingle().removeObj(this[0])
//     // if (this[2].parent && this[2].hp > 0) {
//     //     if (this[2].hp != undefined) {
//     //         if(this[2].name.indexOf("敌人")!=-1)window["击退"]({obj:this[2]})
//     //         let jhp = parseInt((this[1]["gj"] || 1) + this[4]["jnsh"]);
//     //         if (jhp) {
//     //             //飘血效果
//     //             let hpText = { typ: 10, font: "jhp_fnt", x: this[2].x, scaleX: 0.8, scaleY: 0.8, y: this[2].y - this[2].height / 2, Textfield: { textColor: 0xff0000, size: 30 }, ca: "" + jhp, obj: this[2], pobj: this[2].parent }
//     //             if (this[1].bj && Math.random() <= this[1].bj) {    //暴击双倍伤害
//     //                 jhp = jhp * 2;
//     //                 hpText.ca = "" + jhp;
//     //             }
//     //             var hpobj = JuiData.getzi([hpText], 1, true)[0];
//     //             this[2].parent.addChild(hpobj);
//     //             hpobj.name = "_hp"
//     //             // hpobj.x = this[2].x-this[2].width/2;
//     //             // hpobj.y = this[2].y - this[2].height;
//     //             egret.Tween.get(hpobj).to({ x: hpobj.x + 100, y: hpobj.y + (Math.floor(Math.random() * 100 - 50)), alpha: 0 }, 700).call(function (obj) { Jui.getSingle().removeObj(obj) }, this[2], [hpobj]);
//     //             this[2].hp = this[2].hp - jhp;
//     //             //if(this[2].hpBar&&this[2].hpBar.jhp)this[2].hpBar.jhp(jhp || 5);    //血条血量修改
//     //             if(this[2].hpBar)Jui.getSingle().setHp(this[2],this[2].hp);
//     //             if (this[2].hp <= 0) {
//     //                 // window["T"].mndj(this[2]);
//     //                 if (this[2].money) {         //怪物有金币掉落
//     //                     let my = { typ: 3, x: this[1].x, y: this[1].y - this[1].height, w: 80, h: 26, alpha: 0, Textfield: { textColor: 0xd9b611, size: 20 }, bgimg: "20_mainui_png", ca: "+" + this[2].money, obj: this[2], pobj: this[2].parent }
//     //                     var money = JuiData.getzi([my], 1, true)[0];
//     //                     this[2].parent.addChild(money);
//     //                     money.name = "+jb"
//     //                     egret.Tween.get(money).wait(1800).to({ alpha: 1 }).to({ y: money.y - 70 }, 500).to({ scaleX: 0.7, scaleY: 0.7, y: money.y - 100 }, 300).call(function (obj) { Jui.getSingle().removeObj(obj) }, this[2], [money]);
//     //                     Jui.getSingle().sqwp({ obj: this[2], pobj: this[2].parent, tobj: this[1], png: "texturebxb_png" });
//     //                 }
//     //                 egret.Tween.removeTweens(this[2]);
//     //                 if(this[2].swdz){
//     //                     let mobj = this[2].getChildByName(this[2].name+"zimc");
//     //                     Jui.getSingle().setMove(mobj, mobj.zjson, mobj.zpng, 1, mobj.width, mobj.height, this[2].swdz, mobj.scaleX, mobj.scaleY);
//     //                 }
//     //                 egret.Tween.get(this[2]).to({ alpha: 0.5 }, 1000).call(function (obj) {
//     //                     // window["T"].mndj(obj);
//     //                     Jui.getSingle().removeObj(obj);
//     //                     if (obj["swfun"]) eval(obj["swfun"]);
//     //                 }, this, [this[2]])
//     //                 // Jui.getSingle().removeObj(this[2]);
//     //                 this[3].splice(this[3].indexOf(this[2]), 1);        //在被攻击对象组删除已经不存在的对象
//     //                 delete hc["自动攻击元件组"][this[2].name]      //在自动攻击组删除已经不存在的对象
//     //             }
//     //         }
//     //     } else {        //对象没有血量直接删除
//     //         //window["T"].mndj(this[2]);
//     //         Jui.getSingle().removeObj(this[2]);
//     //         this[3].splice(this[3].indexOf(this[2]), 1);
//     //         delete hc["自动攻击元件组"][this[2].name]
//     //     }
//     // }else{
//     //     Jui.getSingle().removeObj(this[2]);
//     //     this[3].splice(this[3].indexOf(this[2]), 1);
//     //     delete hc["自动攻击元件组"][this[2].name]
//     // }
// }
window['JuiData'] = JuiData;
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.width = Config.getSingle().STAGE_WIDTH;
        _this.height = Config.getSingle().STAGE_HEIGHT;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("jd_bg_jpg");
        bg.width = this.width;
        bg.height = this.height;
        this.addChild(bg);
        this.barBg = new egret.Bitmap();
        Jui.getSingle().setImg(this.barBg, "jtt_png");
        this.addChild(this.barBg);
        this.barBg.width = 613;
        this.barBg.height = 91;
        this.barBg.anchorOffsetX = this.barBg.width / 2;
        this.barBg.anchorOffsetY = this.barBg.height / 2;
        this.barBg.x = this.width / 2;
        ;
        this.barBg.y = this.height * 0.7;
        var logobg = new egret.Bitmap();
        logobg.texture = RES.getRes("logok_png");
        logobg.width = logobg.height = 161;
        logobg.anchorOffsetX = logobg.width / 2;
        logobg.anchorOffsetY = logobg.height / 2;
        this.addChild(logobg);
        logobg.x = 0.55 * this.width;
        logobg.y = 0.13 * this.height;
        egret.Tween.get(logobg, { loop: true }).to({ rotation: 360 }, 3000);
        logobg.cacheAsBitmap = true;
        var logo = new egret.Bitmap();
        logo.texture = RES.getRes("jd_logo_png");
        logo.width = logo.height = 161;
        logo.anchorOffsetX = logo.width / 2;
        logo.anchorOffsetY = logo.height / 2;
        this.addChild(logo);
        logo.x = logobg.x;
        logo.y = logobg.y;
        var sm = new egret.Bitmap();
        sm.texture = RES.getRes("yxzx_png");
        sm.width = 208;
        sm.height = 68;
        sm.anchorOffsetY = sm.height / 2;
        this.addChild(sm);
        sm.x = logobg.x + logobg.width / 2 + 5;
        sm.y = logobg.y + 30;
        var barbg2 = new egret.Bitmap();
        Jui.getSingle().setImg(barbg2, "jdttt_png");
        this.addChild(barbg2);
        barbg2.width = 488;
        barbg2.height = 91;
        barbg2.x = this.width / 2 - 55;
        barbg2.y = this.height * 0.7;
        barbg2.anchorOffsetX = barbg2.width / 2;
        barbg2.anchorOffsetY = barbg2.height / 2;
        this.jl = barbg2.width / 100;
        this.bar = new egret.Bitmap();
        Jui.getSingle().setImg(this.bar, "jdtt_png");
        this.addChild(this.bar);
        this.bar.width = 488;
        this.bar.height = 91;
        this.bar.x = this.width / 2 - 55;
        this.bar.y = this.height * 0.7;
        this.bar.anchorOffsetX = this.bar.width / 2;
        this.bar.anchorOffsetY = this.bar.height / 2;
        this.jl = this.bar.width / 100;
        var mask = new egret.Bitmap();
        Jui.getSingle().setImg(mask, "jdtdt_png");
        this.addChild(mask);
        mask.x = this.bar.x;
        mask.y = this.bar.y;
        mask.width = this.bar.width;
        mask.height = this.bar.height;
        mask.anchorOffsetX = mask.width / 2;
        mask.anchorOffsetY = mask.height / 2;
        this.barx = mask.x;
        this.bar.mask = mask;
        this._mask = mask;
        this.xie = new egret.MovieClip();
        var movie = new egret.MovieClipDataFactory(RES.getRes("jdkg_json"), RES.getRes("jdkg_png"));
        this.xie.movieClipData = movie.generateMovieClipData();
        this.xie.play(-1);
        this.addChild(this.xie);
        this.xie.scaleX = 0.7;
        this.xie.scaleY = 0.7;
        this.xie.anchorOffsetY = this.xie.height / 2;
        this.xie.y = this.bar.y;
        this.xie.x = this._mask.x - this._mask.anchorOffsetX - (this.xie.width * 0.7);
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        var num = Math.floor(current / total * 100);
        if (this._mask) {
            this._mask.x = this.barx + num * this.jl;
            if (this.xie) {
                this.xie.x = this._mask.x - this._mask.anchorOffsetX - (this.xie.width * 0.7);
            }
        }
        if (this.textField) {
            this.textField.text = num + "%";
        }
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI2 = (function (_super) {
    __extends(LoadingUI2, _super);
    function LoadingUI2() {
        var _this = _super.call(this) || this;
        _this.width = Config.getSingle().STAGE_WIDTH;
        _this.height = Config.getSingle().STAGE_HEIGHT;
        _this.createView();
        return _this;
    }
    LoadingUI2.prototype.createView = function () {
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("jd_bg_jpg");
        bg.width = this.width;
        bg.height = this.height;
        this.addChild(bg);
        var logobg = new egret.Bitmap();
        logobg.texture = RES.getRes("logok_png");
        logobg.width = logobg.height = 161;
        logobg.anchorOffsetX = logobg.width / 2;
        logobg.anchorOffsetY = logobg.height / 2;
        this.addChild(logobg);
        logobg.x = 0.55 * this.width;
        logobg.y = 0.13 * this.height;
        egret.Tween.get(logobg, { loop: true }).to({ rotation: 360 }, 3000);
        logobg.cacheAsBitmap = true;
        var logo = new egret.Bitmap();
        logo.texture = RES.getRes("jd_logo_png");
        logo.width = logo.height = 161;
        logo.anchorOffsetX = logo.width / 2;
        logo.anchorOffsetY = logo.height / 2;
        this.addChild(logo);
        logo.x = logobg.x;
        logo.y = logobg.y;
        var sm = new egret.Bitmap();
        sm.texture = RES.getRes("yxzx_png");
        sm.width = 208;
        sm.height = 68;
        sm.anchorOffsetY = sm.height / 2;
        this.addChild(sm);
        sm.x = logobg.x + logobg.width / 2 + 5;
        sm.y = logobg.y + 30;
        this.xie = new egret.MovieClip();
        var movie = new egret.MovieClipDataFactory(RES.getRes("loadingskg_json"), RES.getRes("loadingskg_png"));
        this.xie.movieClipData = movie.generateMovieClipData();
        this.xie.play(-1);
        this.addChild(this.xie);
        this.xie.scaleX = 0.7;
        this.xie.scaleY = 0.7;
        this.xie.anchorOffsetY = this.xie.height / 2;
        this.xie.y = this.height * 0.7;
        this.xie.x = this.width * 0.8;
        this.barx = this.xie.x;
        this.jl = (this.width * 0.8 - this.width * 0.1) / 100;
    };
    LoadingUI2.prototype.onProgress = function (current, total) {
        var num = Math.floor(current / total * 100);
        var n = this.barx - num * this.jl;
        if (this.xie) {
            this.xie.x = n;
        }
    };
    return LoadingUI2;
}(egret.Sprite));
__reflect(LoadingUI2.prototype, "LoadingUI2", ["RES.PromiseTaskReporter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.loadingstr = "";
        Main.i = _this;
        window["windowjs"] = (egret.Capabilities.runtimeType == "web") ? 0 : 1;
        egret.Capabilities.runtimeType == "wxgame" && (window["windowjs"] = 2);
        _this.width = Config.getSingle().STAGE_WIDTH;
        _this.height = Config.getSingle().STAGE_HEIGHT;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        //this.resJson = Jui.getSingle().getv("resJson",window["T"].word2pinyin(curidc.split("_")[0]));
      _this.ziyuan = window['jg_aj'].sj.idc;//"绘图高手_游戏";
        _this.resJson = window["T"].word2pinyin(_this.ziyuan.split("_")[0]);
        console.log(_this.resJson + "-----------------------------------");
        console.log(_this.ziyuan);
        _this.ziyuan = _this.ziyuan.replace(/\d+/g, '');
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        // egret.lifecycle.addLifecycleListener((context) => {
        //     // custom lifecycle plugin
        //     context.onUpdate = () => {
        //     }
        // })
        // egret.lifecycle.onPause = () => {
        //     egret.ticker.pause();
        // }
        // egret.lifecycle.onResume = () => {
        //     egret.ticker.resume();
        // }
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.loadjson();
                        //const result = await RES.getResAsync("description_json")
                        //this.startAnimation(result);
                        return [4 /*yield*/, platform.login()];
                    case 2:
                        //const result = await RES.getResAsync("description_json")
                        //this.startAnimation(result);
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 3:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ziyz, lo, tianji, loadingView, e_1, ziyz, lo, tianji, loadingView;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 10]);
                        return [4 /*yield*/, RES.loadConfig("resource/default_" + this.resJson + ".res.json", "resource/")];
                    case 1:
                        _a.sent();
                        ziyz = RES.getGroupByName(this.ziyuan + "loading");
                        if (!(ziyz.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, RES.loadGroup(this.ziyuan + "loading")];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        lo = void 0;
                        tianji = window["jg_aj"]["tianji"];
                        // if (tianji[curidc] && tianji[curidc].dzloading) {
                        //     lo = new window[tianji[curidc].dzloading]();
                        // } else {
                        lo = new LoadingUI();
                        loadingView = lo;
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadGroup(this.ziyuan, 0, loadingView)];
                    case 4:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 10];
                    case 5:
                        e_1 = _a.sent();
                        console.error(e_1);
                        console.log("尝试加载默认资源");
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 6:
                        _a.sent();
                        ziyz = RES.getGroupByName("loading");
                        if (!(ziyz.length > 0)) return [3 /*break*/, 8];
                        return [4 /*yield*/, RES.loadGroup("loading")];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        lo = void 0;
                        tianji = window["jg_aj"]["tianji"];
                        // if (tianji[curidc] && tianji[curidc].dzloading) {
                        //     lo = new window[tianji[curidc].dzloading]();
                        // } else {
                        lo = new LoadingUI();
                        loadingView = lo;
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 9:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadjson = function () {
        try {
            RES.getResByUrl("https://n.gac.kim/libs/" + this.resJson + "/os.json", function (aji, url) {
                window["jg_aj"] = window['T'].merge(window["jg_aj"], aji);
                this.createGameScene();
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        catch (error) {
            this.createGameScene();
        }
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        var bg = new egret.Shape();
        bg.graphics.beginFill(0xffffff);
        bg.graphics.drawRect(0, 0, this.width, this.height);
        bg.graphics.endFill();
        this.addChild(bg);
        var self = this;
        this.yingyong_body = new egret.DisplayObjectContainer();
        this.yingyong_body.name = "应用市场_body";
        this.yingyong_body.width = this.width;
        this.yingyong_body.height = this.height;
        this.yingyong_body.anchorOffsetX = this.yingyong_body.width / 2;
        this.yingyong_body.anchorOffsetY = this.yingyong_body.height / 2;
        this.yingyong_body.x = this.width / 2;
        this.yingyong_body.y = this.height / 2;
        this.addChild(this.yingyong_body);
        this.jai_body = new egret.DisplayObjectContainer();
        this.jai_body.name = "jai_body";
        this.jai_body.width = this.width;
        this.jai_body.height = this.height;
        //this.addChild(this.jai_body);
        this.jai_body.y = 400;
        if (Jui.getSingle().getv("eg", 0) == 1) {
            // sj.obj["jai_body"] = this.jai_body;
            // sj.clas["jai_body"] = {};
            sj.obj[this.yingyong_body.name] = this.yingyong_body;
            sj.clas[this.yingyong_body.name] = {};
        }
        window["jg_aj"].uibuild = 1;
        window["onFinishLoading"]();
        console.log("-----------------------sok=" + window['sok']);
        if (window["windowjs"] == 2) {
            var launchOptions = window['wx'].getLaunchOptionsSync();
            window['jg_aj'].sj.query = launchOptions.query;
            window['jg_aj'].sj.shareTicket = launchOptions.shareTicket;
            window['wx'].onShow(function (res) {
                if (window["jg_aj"]["分享t"] && (window["db"].gett() - window["jg_aj"]["分享t"] > 3000)) {
                    var btn = window["T"].findObj("增加按钮2");
                    if (btn) {
                        window["T"].func(btn.name);
                        window["jg_aj"]["分享t"] = 0;
                    }
                }
            });
            if (window["jg_aj"].wxauth) {
                window['wx'].login({
                    success: function (res) {
                        if (res.code) {
                            //发起网络请求
                            window['wx'].request({
                                url: 'https://n.gac.kim/wx/xyx/onlogin',
                                data: {
                                    code: res.code,
                                    projName: 'zhaobutong',
                                },
                                success: function (req) {
                                    var button = window['wx'].createUserInfoButton({
                                        type: 'text',
                                        text: '登录',
                                        style: {
                                            left: (self.width - 200) * 0.5,
                                            top: (self.height * 0.5 + 100),
                                            width: 200,
                                            height: 78.29,
                                            type: "image",
                                            image: "/resource/assets/zhaobutong/dl.png"
                                        }
                                    });
                                    button.onTap(function (res) {
                                        window['wx'].getUserInfo({
                                            success: function (res1) {
                                                // 此处可以获取到用户信息
                                                console.log("微信小游戏获取用户信息", res1);
                                                window["jg_wx"] = { idfl: 1 };
                                                window["db"].sj.fl = { all: { 1: { cwxn: res1.userInfo.nickName, chedimg: res1.userInfo.avatarUrl } } };
                                                if (!window['sok'])
                                                    window['jg_main']();
                                            }
                                        });
                                        button.hide();
                                    });
                                    console.log("微信小游戏获取openid", req);
                                    //jg_aj.sj.openid = req.data.openid;
                                    window['jg_aj'].sj.openid = req.data.openid;
                                }
                            });
                            // jg_aj.sj.openid = 
                        }
                        else {
                            console.log('登录失败！' + res.errMsg);
                        }
                    }
                });
            }
            else {
                if (!window['sok'])
                    window['jg_main']();
            }
        }
        else {
            if (!window['sok'])
                window['jg_main']();
        }
        if (window["jex"]().isMobile() && window["jex"]().isIOS()) {
            var iosfun_1 = function () {
                Main.i.vsound();
                Main.i.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, iosfun_1, Main.i, true);
                console.log("触发ios音效");
                //Jui.getSingle().removeObjEvent(this,egret.TouchEvent.TOUCH_BEGIN,iosfun["name"],this)
            };
            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, iosfun_1, this, true);
            this.vsound();
        }
        if (window["windowjs"] == 1) {
            egret.ExternalInterface.addCallback("sendToJS", function (msg) {
                eval(msg);
            });
            //this.listenFromApp();
        }
    };
    Main.prototype.vsound = function () {
        Jui.getSingle().LoadMusic("resource/assets/jai-volemp.mp3", Main.i);
    };
    Main.prototype.loading = function (dqcj) {
        if (dqcj === void 0) { dqcj = window["T"].dqcj(); }
        return __awaiter(this, void 0, void 0, function () {
            var lo, tianji, loadingView;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //await RES.loadConfig("resource/default_" + this.resJson + ".res.json", "resource/");
                        // var ziyz = RES.getGroupByName(this.ziyuan + dqcj)
                        // if (ziyz.length > 0) {
                        //     await RES.loadGroup(this.ziyuan + dqcj);
                        // }
                        if (this.loadingstr.indexOf(dqcj) != -1) {
                            window["jg_aj"].uibuild = 3;
                            return [2 /*return*/];
                        }
                        this.loadingstr = this.loadingstr + dqcj;
                        tianji = window["jg_aj"]["tianji"];
                        // if (tianji[curidc] && tianji[curidc].dzloading) {
                        //     lo = new window[tianji[curidc].dzloading]();
                        // } else {
                        lo = new LoadingUI2();
                        loadingView = lo;
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadGroup(this.ziyuan + dqcj, 0, loadingView)];
                    case 1:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        window["jg_aj"].uibuild = 3;
                        return [2 /*return*/];
                }
            });
        });
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
var Network = (function () {
    function Network(url, data) {
        var request = this.request = new egret.HttpRequest;
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(url, data ? egret.HttpMethod.POST : egret.HttpMethod.GET);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onIOError, this);
        this.data = data;
    }
    // 静态全局方法
    Network.httpget = function (url) {
        var http = new Network(url, undefined);
        return http.send();
    };
    Network.httppost = function (url, data) {
        var http = new Network(url, data);
        return http.send();
    };
    Network.prototype.send = function () {
        var self = this;
        this.request.send(this.data);
        return new Promise(function (resolve, reject) {
            self.resolve = resolve;
            self.reject = reject;
        });
    };
    Network.prototype.release = function () {
        this.request.removeEventListener(egret.Event.COMPLETE, this.onComplete, this);
        this.request.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onIOError, this);
        this.request = null;
    };
    Network.prototype.onComplete = function (event) {
        var request = event.currentTarget;
        try {
            var json = JSON.parse(request.response);
            this.resolve(json);
        }
        catch (error) {
            this.reject({ xhr: event.target._xhr, msg: "请求成功，但解析为json失败，返回值为" + request.response });
        }
        this.release();
    };
    Network.prototype.onIOError = function (event) {
        var xhr = event.target._xhr;
        this.reject({ xhr: xhr, msg: xhr.statusText });
        this.release();
    };
    return Network;
}());
__reflect(Network.prototype, "Network");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
/**
 *
 * @author
 *
 */
var nomalEvent = new egret.EventDispatcher();
var WebSocketool = (function () {
    function WebSocketool() {
        this.socketoff = true;
        this._connect = false;
        this.TIME = 2; //心跳延时
        this.ip = 'n.kxtui.com'; //Jui.getSingle().getv('wsip','192.168.3.13');
        this.num = 0;
        this._count = 0;
        this.init();
    }
    WebSocketool.i = function () {
        if (!this._single)
            this._single = new WebSocketool();
        return this._single;
    };
    WebSocketool.prototype.init = function () {
        this.socket = new egret.WebSocket();
        window["socket"] = this;
    };
    WebSocketool.prototype.addEvent = function (SOCKETDATA, CONNECT, CLOSE, IO_ERROR) {
        if (SOCKETDATA === void 0) { SOCKETDATA = this.onReceiveMessage; }
        if (CONNECT === void 0) { CONNECT = this.onSocketOpen; }
        if (CLOSE === void 0) { CLOSE = this.ondisconnect; }
        if (IO_ERROR === void 0) { IO_ERROR = this.onSocketError; }
        //添加收到数据侦听，收到数据会调用此方法
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, SOCKETDATA, this);
        //添加链接打开侦听，连接成功会调用此方法
        this.socket.addEventListener(egret.Event.CONNECT, CONNECT, this);
        //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
        this.socket.addEventListener(egret.Event.CLOSE, CLOSE, this);
        //添加异常侦听，出现异常会调用此方法
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, IO_ERROR, this);
        //        this.socket.connect( this._url, this._port );
    };
    WebSocketool.prototype.SocketRest = function () {
        this.socket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.socket.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.socket.removeEventListener(egret.Event.CLOSE, this.ondisconnect, this);
        this.socket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
    };
    /**链接到服务器*/
    WebSocketool.prototype.connect = function (url) {
        if (url === void 0) { url = "ws://192.168.3.120:8017"; }
        console.log(this.ip);
        //url="wss://n.gac.kim:8010"
        this.socket.connectByUrl(url);
    };
    /**关闭服务器连接*/
    WebSocketool.prototype.close = function () {
        //this.Leave();
        if (this.socket.connected) {
            //            Config.getSingle().errorModule.show("您的账号在其他客户端登录！");
            this.socket.close();
        }
    };
    /**接收参数*/
    WebSocketool.prototype.onReceiveMessage = function (event) {
        var data = this.socket.readUTF();
        console.log('收到:' + data.replace(/\},\{/g, '},\n{'));
        console.log('======================onmessage 分割线=======================');
        Main.i.icon.y = 600;
    };
    /**接口连接成功调用*/
    WebSocketool.prototype.onSocketOpen = function (evt) {
        this.onPushMsg(["", { "aid": "f7lgDR1528894721931_@_g8qURcRAIg9", "dba": ["用户", { "房间": "1000", "logs": 1 }, "{idus:I}", { "upsert": 1 }] }, "GAC_区块链", 1, 2]);
        console.warn("\n连接成功");
        Main.i.icon.y = 300;
        this._connect = true;
        this._count = 0;
    };
    /***/
    WebSocketool.prototype.ondisconnect = function () {
        console.warn("你已经断开连接");
        this._connect = false;
        if (this.socketoff) {
            //            this._count++;
            //            Config.getSingle().errorModule.show("服务器断开，正在尝试第"+this._count+"次连接");
            this.connect();
        }
    };
    /**向服务器传输数据*/
    WebSocketool.prototype.onPushMsg = function (aj) {
        if (aj === void 0) { aj = null; }
        var str = JSON.stringify(aj);
        console.log('csend(' + str + ')');
        this.socket.writeUTF(str);
        this.socket.flush();
    };
    WebSocketool.prototype.onSocketError = function () {
        console.warn("socket error");
    };
    /**socket失效*/
    WebSocketool.prototype.Leave = function () {
        this.socketoff = false;
    };
    /**允许socket*/
    WebSocketool.prototype.allow = function () {
        this.socketoff = true;
    };
    /**网络*/
    /**定时向服务器发送心跳包*/
    WebSocketool.prototype.InfoHeart = function () {
        //  egret.setInterval(function(){
        //      WebSocketool.i().onPushMsg(ResponseData[CLIENT_MSG_TYPE.CLIENT_HEART_MSG](GameData.getSingle().USER_ID));
        //      },this,this.TIME*1000);
    };
    /**服务器连接心跳*/
    WebSocketool.prototype.Heart = function () {
        if (!this._heartTimer) {
            this._heartTimer = new egret.Timer(5000);
            this._heartTimer.addEventListener(egret.TimerEvent.TIMER, this.Heart_abnormal, this);
        }
        this._heartTimer.reset();
        this._heartTimer.start();
    };
    /**心跳异常*/
    WebSocketool.prototype.Heart_abnormal = function () {
        console.warn("心跳异常 执行重连");
        //        if(!this.socket.connected){
        //            Config.getSingle().errorModule.show("服务器断开，正在尝试重连");
        this.connect();
        //        }
    };
    return WebSocketool;
}());
__reflect(WebSocketool.prototype, "WebSocketool");
window['WebSocketool'] = WebSocketool;
/**
 * A星寻路
 */
var astar;
(function (astar) {
    var AStar = (function () {
        function AStar() {
            this._straightCost = 1.0; //上下左右走的代价
            this._diagCost = Math.SQRT2; //斜着走的代价 
            //this._heuristic = this.manhattan;  
            //this._heuristic = this.euclidian;
            this._heuristic = this.diagonal;
        }
        //寻路
        AStar.prototype.findPath = function (grid) {
            this._grid = grid;
            this._open = [];
            this._closed = [];
            this._startNode = this._grid.startNode;
            this._endNode = this._grid.endNode;
            this._startNode.g = 0;
            this._startNode.h = this._heuristic(this._startNode);
            this._startNode.f = this._startNode.g + this._startNode.h;
            return this.search();
        };
        //查找路径
        AStar.prototype.search = function () {
            var node = this._startNode;
            while (node != this._endNode) {
                var startX = Math.max(0, node.x - 1);
                var endX = Math.min(this._grid.numCols - 1, node.x + 1);
                var startY = Math.max(0, node.y - 1);
                var endY = Math.min(this._grid.numRows - 1, node.y + 1);
                for (var i = startX; i <= endX; i++) {
                    for (var j = startY; j <= endY; j++) {
                        //不让斜着走
                        if (i != node.x && j != node.y) {
                            continue;
                        }
                        var test = this._grid.getNode(i, j);
                        if (test == node ||
                            !test.walkable ||
                            !this._grid.getNode(node.x, test.y).walkable ||
                            !this._grid.getNode(test.x, node.y).walkable) {
                            continue;
                        }
                        var cost = this._straightCost;
                        if (!((node.x == test.x) || (node.y == test.y))) {
                            cost = this._diagCost;
                        }
                        var g = node.g + cost * test.costMultiplier;
                        var h = this._heuristic(test);
                        var f = g + h;
                        if (this.isOpen(test) || this.isClosed(test)) {
                            if (test.f > f) {
                                test.f = f;
                                test.g = g;
                                test.h = h;
                                test.parent = node;
                            }
                        }
                        else {
                            test.f = f;
                            test.g = g;
                            test.h = h;
                            test.parent = node;
                            this._open.push(test);
                        }
                    }
                }
                for (var o = 0; o < this._open.length; o++) {
                }
                this._closed.push(node);
                if (this._open.length == 0) {
                    console.log("AStar >> no path found");
                    return false;
                }
                var openLen = this._open.length;
                for (var m = 0; m < openLen; m++) {
                    for (var n = m + 1; n < openLen; n++) {
                        if (this._open[m].f > this._open[n].f) {
                            var temp = this._open[m];
                            this._open[m] = this._open[n];
                            this._open[n] = temp;
                        }
                    }
                }
                node = this._open.shift();
            }
            this.buildPath();
            return true;
        };
        //获取路径
        AStar.prototype.buildPath = function () {
            this._path = new Array();
            var node = this._endNode;
            this._path.push(node);
            while (node != this._startNode) {
                node = node.parent;
                this._path.unshift(node);
            }
        };
        Object.defineProperty(AStar.prototype, "path", {
            get: function () {
                return this._path;
            },
            enumerable: true,
            configurable: true
        });
        //是否待检查
        AStar.prototype.isOpen = function (node) {
            for (var i = 0; i < this._open.length; i++) {
                if (this._open[i] == node) {
                    return true;
                }
            }
            return false;
        };
        //是否已检查
        AStar.prototype.isClosed = function (node) {
            for (var i = 0; i < this._closed.length; i++) {
                if (this._closed[i] == node) {
                    return true;
                }
            }
            return false;
        };
        //曼哈顿算法
        AStar.prototype.manhattan = function (node) {
            return Math.abs(node.x - this._endNode.x) * this._straightCost + Math.abs(node.y + this._endNode.y) * this._straightCost;
        };
        AStar.prototype.euclidian = function (node) {
            var dx = node.x - this._endNode.x;
            var dy = node.y - this._endNode.y;
            return Math.sqrt(dx * dx + dy * dy) * this._straightCost;
        };
        AStar.prototype.diagonal = function (node) {
            var dx = Math.abs(node.x - this._endNode.x);
            var dy = Math.abs(node.y - this._endNode.y);
            var diag = Math.min(dx, dy);
            var straight = dx + dy;
            return this._diagCost * diag + this._straightCost * (straight - 2 * diag);
        };
        Object.defineProperty(AStar.prototype, "visited", {
            get: function () {
                return this._closed.concat(this._open);
            },
            enumerable: true,
            configurable: true
        });
        return AStar;
    }());
    astar.AStar = AStar;
    __reflect(AStar.prototype, "astar.AStar");
})(astar || (astar = {}));
/**
 * 网格类
 */
var astar;
(function (astar) {
    var Grid = (function () {
        function Grid(numCols, numRows, walkable) {
            if (walkable === void 0) { walkable = true; }
            this._numCols = numCols;
            this._numRows = numRows;
            this._nodes = [];
            for (var i = 0; i < numCols; i++) {
                this._nodes[i] = [];
                for (var j = 0; j < numRows; j++) {
                    this._nodes[i][j] = new astar.Node(i, j);
                    if (!walkable)
                        this._nodes[i][j].walkable = walkable;
                }
            }
        }
        Grid.prototype.getNode = function (x, y) {
            return this._nodes[x][y];
        };
        Grid.prototype.setEndNode = function (x, y) {
            this._endNode = this._nodes[x][y];
        };
        Grid.prototype.setStartNode = function (x, y) {
            this._startNode = this._nodes[x][y];
        };
        Grid.prototype.setWalkable = function (x, y, value) {
            this._nodes[x][y].walkable = value;
        };
        Object.defineProperty(Grid.prototype, "endNode", {
            get: function () {
                return this._endNode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Grid.prototype, "numCols", {
            get: function () {
                return this._numCols;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Grid.prototype, "numRows", {
            get: function () {
                return this._numRows;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Grid.prototype, "startNode", {
            get: function () {
                return this._startNode;
            },
            enumerable: true,
            configurable: true
        });
        return Grid;
    }());
    astar.Grid = Grid;
    __reflect(Grid.prototype, "astar.Grid");
})(astar || (astar = {}));
/**
 * Node 节点
 */
var astar;
(function (astar) {
    var Node = (function () {
        function Node(x, y) {
            this.walkable = true;
            this.costMultiplier = 1.0;
            this.x = x;
            this.y = y;
        }
        return Node;
    }());
    astar.Node = Node;
    __reflect(Node.prototype, "astar.Node");
})(astar || (astar = {}));
var jbP2;
(function (jbP2) {
    var DispUtil = (function () {
        function DispUtil() {
        }
        /**
         * 创建一个位图
         * 返回的图形锚点位于图形中心
         */
        DispUtil.createBitmapByName = function (name) {
            var result = new egret.Bitmap();
            var texture = RES.getRes(name);
            result.texture = texture;
            result.anchorOffsetX = result.width * 0.5;
            result.anchorOffsetY = result.height * 0.5;
            return result;
        };
        /**
        * 创建一个圆形
        * 返回的图形锚点位于图形中心
        */
        DispUtil.createBall = function (r, color) {
            if (color === void 0) { color = 0xfff000; }
            var shape = new egret.Shape();
            shape.graphics.lineStyle(1, 0);
            shape.graphics.beginFill(color);
            shape.graphics.drawCircle(r, r, r);
            shape.graphics.moveTo(r, r);
            shape.graphics.lineTo(2 * r, r);
            shape.graphics.endFill();
            //将显示对象的锚点移到中心位置
            shape.anchorOffsetX = shape.width / 2;
            shape.anchorOffsetY = shape.height / 2;
            return shape;
        };
        /**
        * 创建一个方形
        * 返回的图形锚点位于图形中心
        */
        DispUtil.createBox = function (width, height, color) {
            if (color === void 0) { color = 0xfff000; }
            console.log("createBox " + width + "," + height);
            var shape = new egret.Shape();
            shape.graphics.lineStyle(1, 0);
            shape.graphics.beginFill(color);
            shape.graphics.drawRect(0, 0, width, height);
            shape.graphics.endFill();
            //将显示对象的锚点移到中心位置
            shape.anchorOffsetX = shape.width / 2;
            shape.anchorOffsetY = shape.height / 2;
            return shape;
        };
        /**
         * 创建一个胶囊形
         * @param length
         * @param radius
         */
        DispUtil.createCapsule = function (length, radius, color) {
            if (color === void 0) { color = 0xfff000; }
            console.log("createCapsule len:" + length + ",radius:" + radius);
            var shape = new egret.Shape();
            shape.graphics.lineStyle(1, 0);
            shape.graphics.beginFill(color);
            shape.graphics.drawRect(0, 0, length, radius * 2);
            shape.graphics.endFill();
            shape.graphics.beginFill(color);
            shape.graphics.drawCircle(0, radius, radius);
            shape.graphics.endFill();
            shape.graphics.beginFill(color);
            shape.graphics.drawCircle(length, radius, radius);
            shape.graphics.endFill();
            //将显示对象的锚点移到中心位置
            shape.anchorOffsetX = (length) / 2;
            shape.anchorOffsetY = shape.height / 2;
            return shape;
        };
        /**创建一个多边形
         * @param vertices
         */
        DispUtil.createDbx = function (vertices) {
            var lx = vertices[0][0];
            var ly = vertices[0][1];
            for (var i = 1; i < vertices.length; i++) {
                if (vertices[i][0] < lx)
                    lx = vertices[i][0];
                if (vertices[i][1] < ly)
                    ly = vertices[i][1];
            }
            lx = 0 - lx;
            ly = 0 - ly;
            var shape = new egret.Sprite();
            shape.graphics.lineStyle(2, 0xff0000);
            shape.graphics.moveTo(vertices[0][0] + lx, vertices[0][1] + ly);
            for (var i = 1; i < vertices.length; i++) {
                shape.graphics.lineTo(vertices[i][0] + lx, vertices[i][1] + ly);
            }
            shape.graphics.lineTo(vertices[0][0] + lx, vertices[0][1] + ly);
            //将显示对象的锚点移到中心位置
            shape.anchorOffsetX = shape.width / 2;
            shape.anchorOffsetY = shape.height / 2;
            return shape;
        };
        /**
         * 创建一个可以点击的文本，当作按钮用
         */
        DispUtil.createTouchTf = function (px, py, pwid, phei, text) {
            var tf = new egret.TextField();
            tf.width = pwid;
            tf.height = phei;
            tf.x = px;
            tf.y = py;
            tf.size = 16;
            tf.text = text;
            tf.touchEnabled = true;
            return tf;
        };
        return DispUtil;
    }());
    jbP2.DispUtil = DispUtil;
    __reflect(DispUtil.prototype, "jbP2.DispUtil");
})(jbP2 || (jbP2 = {}));
var jbP2;
(function (jbP2) {
    var KeyManager = (function () {
        function KeyManager() {
        }
        KeyManager.init = function () {
            var rfThis = this;
            document.onkeydown = function (evt) {
                rfThis.onkeydown(evt);
            };
            document.onkeyup = function (evt) {
                rfThis.onkeyup(evt);
            };
            this.dictKeyDn = {};
        };
        KeyManager.isDown = function (keycode) {
            return this.dictKeyDn[keycode] && this.dictKeyDn[keycode] == true;
        };
        KeyManager.onkeydown = function (evt) {
            var keycode = window.event ? evt.keyCode : evt.which;
            this.dictKeyDn[keycode] = true;
            //console.log("onkeydown code:"+keycode);
        };
        KeyManager.onkeyup = function (evt) {
            var keycode = window.event ? evt.keyCode : evt.which;
            this.dictKeyDn[keycode] = false;
        };
        KeyManager.Shift_L = 16;
        KeyManager.Ctrl_L = 17;
        KeyManager.Alt_L = 18;
        KeyManager.UP = 38;
        KeyManager.DOWN = 40;
        KeyManager.LEFT = 37;
        KeyManager.RIGHT = 39;
        KeyManager.W = 87;
        KeyManager.S = 83;
        KeyManager.A = 65;
        KeyManager.D = 68;
        KeyManager.SPACE = 32;
        return KeyManager;
    }());
    jbP2.KeyManager = KeyManager;
    __reflect(KeyManager.prototype, "jbP2.KeyManager");
})(jbP2 || (jbP2 = {}));
/**
 *
 * @author zwj
 *
 */
window['sj'] = { jui: {}, obj: {}, data: {}, clas: {}, stopp: new Date().getTime() };
var sj = window['sj'];
window['hc'] = { zjtfun: {} };
var hc = window['hc'];
if (!window['idcm']) {
    var idcm = 1367145;
}
window['tpjui'] = [];
window['loadingState'] = false;
if (!idus) {
    var idus = "c10007";
}
if (!curidc) {
    var curidc = "GAC";
}
var Jui = (function () {
    function Jui() {
        this.hc = {};
        this.pact = [];
        this.Music = true; //所有的声音控制
        /*RGB颜色转换为16进制*/
        this.colorHex = function (rgb) {
            if (rgb.charAt(0) == '#')
                return rgb;
            var ds = rgb.split(/\D+/);
            var decimal = Number(ds[0]) * 65536 + Number(ds[1]) * 256 + Number(ds[2]);
            return zero_fill_hex(decimal, 6);
            function zero_fill_hex(num, digits) {
                var s = num.toString(16);
                while (s.length < digits)
                    s = "0" + s;
                return s;
            }
        };
    }
    Jui.getSingle = function () {
        if (!this._single) {
            this._single = new Jui();
        }
        return this._single;
    };
    Jui.prototype.BuildUi = function (aji, iii) {
        var _this = this;
        //if(!Main.i.sok)Main.i.sok = 1;
        // this.sj[i] = aji[i];
        var typ = aji["typ"]; //对象类型
        var pid = aji["pid"]; //对象父类pid
        var cid = aji["_id"] || aji.idclas;
        var opt = aji["opt"];
        var reta = { childIndex: [], funa: [], act: [], actt: [], tx: [], iii: 1 };
        if (aji.style && aji.style.bgimg && aji.style.bgimg == -1)
            return;
        // try {
        if (typ) {
            if (typ >= 20 && typ < 30) {
                // try {
                if (window["tjp2"])
                    window["tjp2"].setBody(aji);
                // } catch (error) {
                //     console.warn("p2物理引擎库没有加载，不能使用物理对象");
                // }
                return;
            }
            var pobj = null;
            var obj = null;
            var ca = aji["ca"] + '';
            if (pid) {
                pobj = window["T"].findObj(pid); //sj.obj[pid];
                var hcc = aji["style"].hcc;
                if (hcc) {
                    if (['游戏容器', '游戏窗'].indexOf(hcc) > -1)
                        hcc = hcc + window["T"].dqcj(); //查找当前场景的游戏容器或者游戏窗
                    if (hcc.indexOf('_') == -1)
                        hcc = window["jg_aj"].topproj + '_' + hcc; //补全id
                    pobj = window["T"].findObj(hcc);
                }
            }
            else {
                pobj = Main.i;
            }
            if (pobj && typ < 53) {
                if (!pobj || !pobj.getChildByName) {
                    console.log("obj:" + obj + "\u627E\u4E0D\u5230\u7236\u4EB2\u5BF9\u8C61pobj:" + pobj);
                }
                else {
                    if (aji.style.keep) {
                        for (var k = 0; k < pobj.$children.length; k++) {
                            if (window["T"].hqyjm(pobj.$children[k].name) == window["T"].hqyjm(cid)) {
                                obj = pobj.$children[k];
                                if (obj.$children) {
                                    for (var t = 0; t < obj.$children.length; t++) {
                                        var zobj = obj.$children[t];
                                        if (zobj.name.indexOf("zi") != -1 && zobj.name.indexOf("-") > -1) {
                                            zobj.name = cid.split("-")[0] + "-" + zobj.name.split("-")[1];
                                        }
                                    }
                                }
                                delete sj.obj[obj.name]; //清除旧的数据
                                delete sj.clas[obj.name];
                                obj.name = cid;
                                break;
                            }
                        }
                        if (obj == null)
                            obj = pobj.getChildByName(cid); //没有存在相同cid的对象
                    }
                    else {
                        obj = pobj.getChildByName(cid);
                        var lobj = void 0;
                        if (!obj)
                            lobj = window["T"].findObj(cid);
                        if (lobj && lobj.parent && lobj.parent.name != pid && lobj.parent.name.indexOf("fuSv") == -1) {
                            obj = lobj;
                            obj.parent.removeChild(obj);
                            pobj.addChild(obj);
                        }
                    }
                }
            }
            else if (typ == 53 || typ == 51) {
                //pobj = Main.i['yingyong_body'];
                pobj = hc["dqcc"];
                obj = pobj.getChildByName(cid);
            }
            // if(obj==null&&aji.actt["滑动"]){
            //     obj = window['T'].findObj(cid);
            // }
            //切换已有对象类型处理        注意：obj里还有子对象的尽量不要使用更换对象类型
            if (obj && obj.typ != typ && obj.typ < 50) {
                if (obj.parent)
                    this.removeObj(obj);
                obj = null;
            }
            //已有对象不存在当前cid的obj
            if (obj == null) {
                if (typ == 3 || typ > 50) {
                    obj = new egret.DisplayObjectContainer();
                }
                else if (typ == 1) {
                    obj = new egret.Bitmap();
                }
                else if (typ == 4) {
                    obj = new egret.TextField();
                }
                else if (typ == 5) {
                    obj = new egret.ScrollView();
                }
                else if (typ == 7) {
                    obj = new egret.Shape();
                }
                else if (typ == 6) {
                    obj = new egret.MovieClip();
                }
                else if (typ == 9) {
                    obj = new Scratch();
                }
                else if (typ == 10) {
                    obj = new egret.BitmapText();
                }
                else if (typ == 8) {
                    obj = new egret.Video();
                }
                else if (typ == 11) {
                    obj = new FrameAnimation();
                }
                else if (typ == 12) {
                    obj = null;
                }
                if (typ > 53) {
                    pobj = Main.i['yingyong_body'];
                    if (!window['T'].isEgret(pobj))
                        return;
                    window["jg_aj"].opid = cid;
                    var cc = ["下方出场1", "下方出场2", "左方出场1", "左方出场2", "中间出场1", "中间出场2", "旋转出场1", "从大到小", "从小到大", "显隐切换", "翻转切换"];
                    if (!aji.style.cc)
                        aji.style.cc = cc[Math.floor(Math.random() * cc.length)];
                    hc["robj"] = hc["dqcc"];
                    if (hc["robj"] && cid != hc["robj"].name) {
                        //this.removesjobj(hc["dqcc"]);
                        //this.SceneSwitching(obj, pobj, aji, hc["robj"]);
                        Jui.getSingle().removeObj(hc["dqcc"]);
                        pobj.addChild(obj);
                    }
                    else {
                        //this.removeChildren(pobj, []);          //删除应用市场所有子对象
                        if (hc["dqcc"])
                            Jui.getSingle().removeObj(hc["dqcc"]);
                        pobj.addChild(obj);
                    }
                    hc["dqcc"] = obj; //记录起当前场景
                }
                else {
                    if (typ == 53 || typ == 51) {
                        typ = 53;
                        // pobj = Main.i['yingyong_body'];
                        if (cid.indexOf("jai") == 0)
                            pobj = sj.obj["jai_body"]; //如果cid有jai的时候pobj为jai_body
                    }
                }
                obj.name = cid;
                obj.typ = typ;
                if (pobj)
                    pobj.addChild(obj);
            }
            //obj属性设置
            var style = aji["style"] || {};
            if (typ >= 50 && style.target) {
                //window["jex"](`#${cid}`).length > 0 && style.target != jg_aj.curbox && window["T"].removeObj(sj.obj[cid]);
                //pid = aji.pid = jg_aj.curbox = style.target;
                //window["jex"](`#${pid}`).html('');
                pid = window["T"].findid(aji["pid"]);
                window["jex"]('#tji-m-box1').addClass('layleft');
                window["jex"]("#" + pid).show();
                window["jex"]("#" + pid).css('visibility', 'visible');
                ['tji-m-box6'].forEach(function (i) { return i != style.target ? window["jex"]("#" + i).addClass('layright') : window["jex"]("#" + i).removeClass('layright'); });
            }
            //设置属性
            if (typ == 1) {
                this.setTD1(obj, aji);
            }
            else if (typ == 4) {
                this.setTD4(obj, aji);
            }
            else if (typ == 5) {
                this.setTD5(obj, aji);
            }
            else if (typ == 6) {
                var w_1 = this.deval("w", pobj, aji.style, { obj: obj });
                var h_1 = this.deval("h", pobj, aji.style, { obj: obj });
                Jui.getSingle().setMove(obj, style["json"] || style["zjson"], style["png"] || style["zpng"], style["count"], w_1, h_1, style["dz"], style.mcscx || null, style.mcscy || null, style.mcax || null, style.mcay || null); //设置动画资源
            }
            else if (typ == 7) {
                this.setTD7(obj, aji);
            }
            else if (typ == 9) {
                if (style["biw"])
                    obj.biw = style["biw"]; //画笔大小
                if (style["color"])
                    obj.color = window["T"].color(style["color"], "0x"); //画笔颜色
                obj.setbgwh(this.deval("w", pobj, aji.style, { ii: iii, iii: iii }), this.deval("h", pobj, aji.style, { ii: iii, iii: iii }));
                if (style["mpp"])
                    obj.setmpp();
            }
            else if (typ == 10) {
                this.setTD10(obj, aji);
            }
            else if (typ == 8) {
                if (style.poster)
                    obj.poster = style.poster;
                if (!window["jex"]().isMobile()) {
                    obj.fullscreen = false;
                    if (style.fullscreen)
                        obj.fullscreen = style.fullscreen;
                }
                if (style.url) {
                    obj.load(style.url);
                    if (style.play == 1) {
                        obj.once(egret.Event.COMPLETE, function () { console.log("开始播放"); ; this.play(0, false); }, obj);
                    }
                }
            }
            else if (typ == 12) {
                // var dbdata = RES.getRes(style.dbjson);
                // var texturedata = RES.getRes(style.json);
                // var texture = RES.getRes(style.png);
                // var dbf: dragonBones.EgretFactory = new dragonBones.EgretFactory();
                // dbf.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dbdata));
                // dbf.addTextureAtlasData(dbf.parseTextureAtlasData(texturedata, texture));
                // var arm: dragonBones.Armature = dbf.buildArmature("man");
                // arm.animation.gotoAndPlay("runFront", 0, -1, 0);
                // dragonBones.WorldClock.clock.add(arm);
                // obj = arm;
                // let dbrun = function(timeStamp:number){
                //     dragonBones.WorldClock.clock.advanceTime( 0.01 );
                //     return true;
                // }
                // if(!hc["dqcc"]["ggTick"])hc["dqcc"]["ggTick"] = egret.startTick(dbrun, this);
            }
            // if (tyn == 55) pobj =  Main.i['yingyong_body'];     //游戏场景pobj为应用市场body
            var props = ['x', 'y', 'w', 'h'];
            var _a = props.map((function (p) { return _this.deval(p, pobj, aji.style, { ii: iii, iii: iii, obj: obj }); }).bind(this)), x = _a[0], y = _a[1], w = _a[2], h = _a[3];
            if (w != undefined) {
                obj.width = w;
                if (aji._id.indexOf('游戏层') != -1 && window["jex"]().isMobile())
                    obj.width = window['egret'].MainContext.instance.stage.stageWidth;
            }
            if (h != undefined) {
                obj.height = h;
                if (aji._id.indexOf('游戏层') != -1 && window["jex"]().isMobile())
                    obj.height = window['egret'].MainContext.instance.stage.stageHeight;
            }
            if (style.scaleX != undefined)
                obj.scaleX = style.scaleX; //x轴缩放比例
            if (style.scaleY != undefined)
                obj.scaleY = style.scaleY; //y轴缩放比例
            if (style["rotation"] != undefined)
                obj.rotation = style["rotation"]; //旋转角度
            if (style["anchorOffsetX"] != undefined) {
                obj.anchorOffsetX = obj.width * style["anchorOffsetX"];
            }
            else if (!hc["robj"] || typ != 54 && typ != 55) {
                obj.anchorOffsetX = obj.width * 0.5; //默认锚点在元件的中心点
            }
            if (style["anchorOffsetY"] != undefined) {
                obj.anchorOffsetY = obj.height * style["anchorOffsetY"];
            }
            else if (!hc["robj"] || typ != 54 && typ != 55) {
                obj.anchorOffsetY = obj.height * 0.5;
            }
            if (!hc["robj"] || typ != 54 && typ != 55) {
                if ((obj.x != x || obj.y != y) && style.time) {
                    egret.Tween.removeTweens(obj);
                    egret.Tween.get(obj).to({ x: x, y: y }, style.time); //style.time);
                }
                else {
                    obj.x = x;
                    obj.y = y;
                }
            }
            if (style["visible"] != undefined || style["vi"] != undefined) {
                if (style["visible"] == "0")
                    style["visible"] = 0;
                if (style["vi"] == "false")
                    style["vi"] = false;
                if (style["vi"] == "true")
                    style["vi"] = true;
                if (style["vi"] == "0")
                    style["vi"] = 0;
                obj.visible = style["visible"] || style["vi"];
            }
            if (style["alpha"] != undefined) {
                obj.alpha = style["alpha"];
            }
            if (typ == 3 || typ == 54 || typ == 55 || typ == 53 || typ == 52) {
                this.setTDdis(obj, aji);
            }
            else if (typ == 11) {
                if (style.list) {
                    obj.setList(style.list.begin, style.list.end, style.list.str, (style.list.type || "png"), (style.list.t || 0));
                }
            }
            //idus
            if (aji["idus"])
                obj["idus"] = aji["idus"];
            //ridus
            if (aji["ridus"])
                obj["ridus"] = aji["ridus"];
            //ridclas
            if (aji.ridclas)
                obj["ridclas"] = aji.ridclas;
            //遮罩
            var maskdata = style["mask"];
            if (maskdata) {
                this.setMask(obj, maskdata);
            }
            //本元件有加载资源组事件
            if (style["loading"])
                obj["loading"] = style["loading"];
            //脚标
            var foot = style["foot"];
            if (foot) {
                this.setFoot(obj, foot);
            }
            //信息脚标
            var footText = style["footText"];
            if (footText) {
                this.footText(obj, footText, "zixx");
            }
            //人数脚标
            var footNum = style["footNum"];
            if (footNum) {
                this.footText(obj, footNum, "zinum");
            }
            //血条
            if (style.hp) {
                var hp = JuiData.getzi([{ typ: "血条", _id: "hp", hp: style.hp, hpbg: (style.hpbg || 0), hpbar: style.hpbar, mqhp: (style["mqhp"] || style.hp), x: 0 + obj.width / 2, y: style.hpy || -10, w: style.hpw || (style.hpw || obj.width - obj.width / 5), h: (style.hph || 3), obj: obj, pobj: obj }])[0];
                obj["hpBar"] = hp;
                obj.hp = style.hp;
                obj.addChild(hp);
            }
            //存放到obj的数据
            if (aji.attr) {
                for (var sj_1 in aji.attr) {
                    obj[sj_1] = aji.attr[sj_1];
                }
            }
            //蒙层
            var menb = style["menb"];
            if (menb) {
                this.setMenb(obj, menb);
            }
            //滤镜
            var filters = style["filters"];
            if (filters != undefined) {
                this.setFilters(obj, filters);
            }
            //title
            if (style.title) {
                this.setTitle(obj, style.title);
            }
            //遮盖
            if (style.zg) {
                var zg = obj.getChildByName(obj.name + "zizg"); //获取该该对象已存在的蒙层
                if (!zg) {
                    zg = new egret.Bitmap();
                    zg.name = obj.name + "zizg";
                    this.setImg(zg, style.zg.png);
                    zg.width = style.zg.w ? this.deval("w", obj, style.zg) : obj.width;
                    zg.height = style.zg.h ? this.deval("h", obj, style.zg) : obj.height;
                    obj.addChild(zg);
                }
            }
            //边框
            if (style.border) {
            }
            //影子
            if (style.yingzi) {
                var yingzi = obj.getChildByName(obj.name + "yingzi"); //获取该该对象已存在的蒙层
                if (!yingzi) {
                    yingzi = new egret.Bitmap();
                    yingzi.name = obj.name + "yingzi";
                    yingzi.width = Jui.getSingle().deval('w', obj, style.yingzi);
                    yingzi.height = Jui.getSingle().deval('h', obj, style.yingzi);
                    this.setImg(yingzi, style.yingzi.png, 0.5);
                    yingzi.x = Jui.getSingle().deval('x', obj, style.yingzi);
                    yingzi.y = Jui.getSingle().deval('y', obj, style.yingzi);
                    obj.addChildAt(yingzi, 0);
                }
            }
            sj.obj[obj.name] = obj;
            sj.clas[obj.name] = aji;
            var fun = aji["fun"];
            if (fun) {
                window["actt"](obj, { "执行代码": { "ssfun": fun } });
                //window['执行代码']({obj,"ssfun":fun})
            }
            var funa = typeof (aji["funa"]) == 'string' ? { '0': aji["funa"] } : typeof (aji["funa"]) == 'undefined' ? {} : aji["funa"];
            for (var f in funa) {
                if (funa[f].indexOf('T.tzwz') != -1) {
                    this.removeChildren(obj); //检测到有tzwz直接清空容器
                    this.removeObjEventren(obj); //并且清除容器的监听事件
                    break;
                }
            }
            if (opt) {
                if (opt.sl) {
                    obj.speed = { x: 0, y: 0 };
                    obj.__defineGetter__('bottom', function () { return this.y + this.height - this.anchorOffsetY; });
                }
                if (opt.dm) {
                    obj.__defineGetter__('top', function () { return this.y - this.anchorOffsetY; });
                    obj.__defineGetter__('left', function () { return this.x - this.anchorOffsetX; });
                    obj.__defineGetter__('right', function () { return this.x + this.width - this.anchorOffsetX; });
                }
            }
            if ((!aji["func"] || !aji["func"].my || this.ifmy(aji["func"].my, obj)) && aji.func != "no") {
                //给元件添加点击事件
                obj.touchEnabled = true;
                var jt = egret.TouchEvent.TOUCH_TAP;
                var morenfun = function (e) {
                    e.stopPropagation();
                    var djfunc = function (e) {
                        if (e.target["nofunc"])
                            return;
                        if (window['jg_aj'].drag)
                            return window['jg_aj'].drag = 0; //正在拖动阻止点击并且释放拖动状态
                        var self = this;
                        if (typeof (this[2]) == 'object') {
                            if (!Jui.getSingle().ifmy(this[2].my, obj))
                                return;
                            for (var i in this[2]) {
                                if (typeof (this[2][i]) == "object")
                                    this[2][i].event = e;
                            }
                            Jui.getSingle().actt(obj, obj.parent, this[2]);
                            if (this[2].jpn) {
                            }
                            else {
                                window['T'].func(self[0], { stopp: 50 });
                            }
                            return;
                        }
                        // let func = typeof (this[2]) == 'string' ? { 'anonymous': this[2] } : this[2];
                        // for (let key in func) {
                        var str = this[2].replace(/this/gi, "self[0]");
                        if (e.target["loading"] && window["jg_aj"].editm == 0) {
                            var loading = e.target["loading"];
                            //Jui.getSingle().loading(loading["group"], function () { eval(str) }.bind(self), loading["resJson"] || "resource/default_jai.res.json")
                        }
                        else {
                            if (str == ('')) {
                                window['T'].func(self[0], { stopp: 50 });
                            }
                            else if (str == "jpn()") {
                                //window["jpn"](self)
                            }
                            else if (str.indexOf("(") == -1) {
                                if (str.indexOf("_") == -1)
                                    str = window['jg_aj'].curproj + "_" + str;
                                window['T'].func(str);
                            }
                            else {
                                window['T'].dofunc(str);
                            }
                            //  }
                        }
                    };
                    if (e.target["nofunc"]) {
                        egret.setTimeout(djfunc, this, 10, { target: e.target, stageX: e.stageX, stageY: e.stageY, localX: e.localX, localY: e.localY, currentTarget: e.currentTarget });
                    }
                    else {
                        djfunc.bind(this)(e);
                    }
                };
                var thisobj = [obj.name, pobj, aji["func"] || ""];
                this.removeObjEvent(obj, jt, morenfun["name"], thisobj);
                if (!style.te && aji.func != "jpn()") {
                    var jobj = obj;
                    if (aji["func"] && aji["func"].jobj) {
                        if (aji["func"].jobj == 1) {
                            jobj = pobj;
                        }
                        else {
                            jobj = window["T"].findObj(aji["func"].jobj);
                        }
                    }
                    jobj.addEventListener(jt, morenfun, thisobj);
                }
                if (aji["act"]) {
                    var jobj = obj;
                    if (aji["act"]._jobj) {
                        if (aji["act"]._jobj == 1) {
                            jobj = pobj;
                        }
                        else {
                            jobj = window["T"].findObj(aji["act"]._jobj);
                        }
                    }
                    var timer = obj["mrtimer"];
                    if (aji["act"]._timer) {
                        var a_1 = aji["act"]._timer || {};
                        var timerfun = function () {
                            Jui.getSingle().actt(obj, obj.parent, a_1);
                        };
                        if (!timer) {
                            timer = new DateTimer(a_1.time || 20);
                            obj["mrtimer"] = timer;
                            timer.addEventListener(egret.TimerEvent.TIMER, timerfun, obj);
                            timer.start();
                        }
                    }
                    var time_1;
                    if (aji["act"]._end || aji["act"]._begin) {
                        var a_2 = aji["act"]._begin || {};
                        var timerfun_1;
                        if (a_2.lp) {
                            timerfun_1 = function () {
                                var a = aji["act"]._time || {};
                                hc[this.name + "tf"] = true;
                                //pobj.parent.verticalScrollPolicy = pobj.parent.horizontalScrollPolicy = 'off';
                                timer.reset();
                                //if (a.scale) this.scaleY = this.scaleX = a.scale;
                                if (Math.abs(this.x - this["x0"]) < 5 && Math.abs(this.y - this["y0"]) < 5) {
                                    pobj.parent.verticalScrollPolicy = pobj.parent.horizontalScrollPolicy = 'off';
                                    this["nofunc"] = true; //当作是长按
                                    window["T"].cellid = this.name;
                                    Jui.getSingle().actt(obj, obj.parent, a);
                                    return;
                                }
                            };
                        }
                        if (this.ifmy(a_2.my, obj)) {
                            var tftbfun = function (event) {
                                if (!a_2.nsp)
                                    event.stopPropagation();
                                hc[obj.name + "tf"] = false;
                                this["nofunc"] = true; //禁止func
                                this["oldz"] = pobj.$children.indexOf(this);
                                if (!a_2.nz)
                                    pobj.setChildIndex(this, a_2.z != undefined ? a_2.z : -1); //被点击对象默认设成最顶层
                                time_1 = egret.getTimer();
                                if (a_2.lp) {
                                    event.stopImmediatePropagation(); //拖放的时候，阻止后层的滑动
                                    if (!timer)
                                        timer = new DateTimer(500, 1);
                                    obj["mrtimer"] = timer;
                                    timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, timerfun_1, obj);
                                    timer.start();
                                }
                                else {
                                    hc[obj.name + "tf"] = true;
                                }
                                this['x0'] = this.x;
                                this['y0'] = this.y;
                                this.parent["stageX"] = event.stageX;
                                this.parent["stageY"] = event.stageY;
                                this['stageX'] = event.stageX;
                                this['stageY'] = event.stageY;
                                //if (a.bssfun) eval(a.bssfun);
                                //if (a.scale && !a.lp) this.scaleY = this.scaleX = a.scale;
                                for (var i in a_2) {
                                    if (typeof (a_2[i]) == "object")
                                        a_2[i].event = event;
                                }
                                Jui.getSingle().actt(this, this.parent, a_2);
                            };
                            if (!a_2.nre)
                                this.removeObjEvent(jobj, egret.TouchEvent.TOUCH_BEGIN, tftbfun["name"], obj);
                            jobj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, tftbfun, obj);
                        }
                    }
                    if (aji["act"]._move) {
                        var a_3 = aji["act"]._move;
                        if (this.ifmy(a_3.my, obj)) {
                            var tftmfun = function (event) {
                                if (!a_3.nsp)
                                    event.stopPropagation();
                                if (hc[obj.name + "tf"]) {
                                    if (aji["act"]._begin && aji["act"]._begin.lp)
                                        event.stopImmediatePropagation();
                                    if (a_3.yd) {
                                        //console.log("name:"+this.name+"x0:"+this['x0']+"y0:"+this['y0']+"stageX:"+(event.stageX - this['stageX'])+"stageY:"+(event.stageY - this['stageY']));
                                        var addx = (event.stageX - this['stageX']) / this.parent.scaleX;
                                        var addy = (event.stageY - this['stageY']) / this.parent.scaleY;
                                        if (a_3.contrary) {
                                            addx = -addx;
                                            addy = -addy;
                                        }
                                        var lx = this['x0'] + addx;
                                        var ly = this['y0'] + addy;
                                        if (a_3["外框"]) {
                                            //console.log(lx+"--"+ly)
                                            if (lx - this.anchorOffsetX > 0) {
                                                lx = 0 + this.anchorOffsetX;
                                            }
                                            else if (lx - this.anchorOffsetX + this.width < this.parent.width) {
                                                lx = -this.width + this.anchorOffsetX + this.parent.width;
                                            }
                                            if (ly - this.anchorOffsetY > 0) {
                                                ly = 0 + this.anchorOffsetY;
                                            }
                                            else if (ly - this.anchorOffsetY + this.height < this.parent.height) {
                                                ly = -this.height + this.anchorOffsetY + this.parent.height;
                                            }
                                            //console.log(lx+"--"+ly)
                                        }
                                        if (a_3.x != undefined && a_3.w != undefined) {
                                            if (typeof a_3.x == "string")
                                                a_3.x = window["T"].deval("x", this.parent, a_3);
                                            if (typeof a_3.w == "string")
                                                a_3.w = window["T"].deval("w", this.parent, a_3);
                                            if (lx < a_3.x) {
                                                lx = a_3.x;
                                            }
                                            else if (lx > a_3.w) {
                                                lx = a_3.w;
                                            }
                                        }
                                        if (a_3.y != undefined && a_3.h != undefined) {
                                            if (typeof a_3.y == "string")
                                                a_3.y = window["T"].deval("y", this.parent, a_3);
                                            if (typeof a_3.h == "string")
                                                a_3.h = window["T"].deval("h", this.parent, a_3);
                                            if (lx < a_3.y) {
                                                lx = a_3.y;
                                            }
                                            else if (lx > a_3.h) {
                                                lx = a_3.h;
                                            }
                                        }
                                        if (!a_3.nlx) {
                                            this.x = lx; //* a.bili / this.parent.scaleX;
                                        }
                                        if (!a_3.nly) {
                                            this.y = ly; //* a.bili / this.parent.scaleY;
                                        }
                                        if (a_3.send == 1 && window["T"].ctrl()['准备数'] > 1)
                                            window["T"].func(this.name, { x1: this.x, y1: this.y, stopp: 50 });
                                    }
                                    //if (a.k) this.x = 480 - a.k * this.y;
                                    //if (a.send == 1 && window["T"].ctrl('a')['准备数'] > 1) window["T"].func(this.name, { x1: this.x, y1: this.y, stopp: 200 })
                                    //a.mssfun && eval(a.mssfun);
                                    for (var i in a_3) {
                                        if (typeof (a_3[i]) == "object")
                                            a_3[i].event = event;
                                    }
                                    Jui.getSingle().actt(this, this.parent, a_3);
                                    this["lx"] = this.x;
                                    this["ly"] = this.y;
                                }
                            };
                            if (!a_3.nre)
                                this.removeObjEvent(jobj, egret.TouchEvent.TOUCH_MOVE, tftmfun["name"], obj);
                            jobj.addEventListener(egret.TouchEvent.TOUCH_MOVE, tftmfun, obj);
                        }
                    }
                    if (aji["act"]._end) {
                        var a = aji["act"]._end;
                        if (this.ifmy(a.my, obj)) {
                            var tftefun = function (event) {
                                var a = aji["act"]._end;
                                if (a.inbegin && !hc[obj.name + "tf"])
                                    return;
                                if (this["oldz"] != undefined)
                                    pobj.setChildIndex(this, this["oldz"]); //恢复原来层级
                                if (aji["act"]._begin && aji["act"]._begin.lp && timer) {
                                    pobj.parent.horizontalScrollPolicy = pobj.parent.oldHSP;
                                    pobj.parent.verticalScrollPolicy = pobj.parent.oldVSP;
                                    timer.stop();
                                    timer.reset();
                                }
                                if (!a.nsp)
                                    event.stopPropagation();
                                hc[obj.name + "tf"] = false;
                                if ((Math.abs(event.stageX - (this['stageX'] || this.parent["stageX"])) < 5 && Math.abs(event.stageY - (this['stageY'] || this.parent["stageY"])) < 5) && (egret.getTimer() - time_1 < 500) && !a.nofunc) {
                                    console.log(this.name + "-点击");
                                    this["nofunc"] = false; //当作是点击
                                    var wd = aji["act"]._wd;
                                    if (wd)
                                        Jui.getSingle().actt(this, this.parent, wd);
                                    if (!a.dz)
                                        return;
                                    //delete a.dz;
                                }
                                for (var i in a) {
                                    if (typeof (a[i]) == "object")
                                        a[i].event = event;
                                }
                                Jui.getSingle().actt(this, this.parent, a);
                            };
                            if (!a.nre)
                                this.removeObjEvent(jobj, egret.TouchEvent.TOUCH_END, tftefun["name"], obj);
                            jobj.addEventListener(egret.TouchEvent.TOUCH_END, tftefun, obj);
                        }
                    }
                    if (aji["act"]._ro) {
                        var a_4 = aji["act"]._ro;
                        if (this.ifmy(a_4.my, obj)) {
                            var tfrofun = function (event) {
                                event.stopPropagation();
                                //hc[obj.name + "tf"] = false;
                                if (this["oldz"])
                                    pobj.setChildIndex(this, this["oldz"]); //恢复原来层级
                                if (aji["act"]._begin && aji["act"]._begin.lp && timer) {
                                    pobj.parent.horizontalScrollPolicy = pobj.parent.oldHSP;
                                    pobj.parent.verticalScrollPolicy = pobj.parent.oldVSP;
                                    timer.reset();
                                }
                                hc[obj.name + "tf"] = false;
                                for (var i in a_4) {
                                    if (typeof (a_4[i]) == "object")
                                        a_4[i].event = event;
                                }
                                Jui.getSingle().actt(this, this.parent, a_4);
                            };
                            if (!a_4.nre)
                                this.removeObjEvent(jobj, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, tfrofun["name"], obj);
                            jobj.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, tfrofun, obj);
                        }
                    }
                }
            }
            else {
                obj.touchEnabled = false;
            }
            if (aji.style) {
                if (aji.style.ChildIndex || aji.style.ChildIndex == 0 || aji.style.childIndex || aji.style.childIndex == 0) {
                    reta.childIndex.push({ obj: aji["_id"], pobj: sj.obj[aji["_id"]].parent, childIndex: aji.style.ChildIndex || aji.style.childIndex });
                }
            }
            // //funa
            // aji.funa && reta.funa.push({ obj: sj.obj[aji["_id"]], funa: aji.funa });
            // //act
            // aji.act && reta.act.push({ obj: sj.obj[aji["_id"]], act: aji.act });
            // //actt
            // aji.actt && Object.keys(aji.actt).length != 0 && reta.actt.push({ obj: sj.obj[aji["_id"]], pobj: sj.obj[aji["pid"]] || sj.obj[aji["_id"]].parent, data: aji })
            // //tx
            // aji.tx && Object.keys(aji.tx).length != 0 && reta.tx.push({ obj: sj.obj[aji["_id"]], tx: aji.tx })
            if (!pobj)
                reta.iii = 1;
            if (pobj) {
                if (pobj.$children)
                    reta.iii = pobj.numChildren - 1;
            }
            else {
                console.warn('pid' + JSON.stringify(aji));
            }
            //元件有cc动画  小于54才会在这里执行
            if (aji.style.cc && typ < 54) {
                this.chuchang(obj, pobj, aji);
            }
        }
        return reta;
        // } catch (ex) {
        //     console.log(" jui " + ex)
        // }
    };
    Jui.prototype.ifmy = function (my, obj) {
        if (!my)
            return true;
        if (my == 1)
            return sj.clas[obj.name].idus == window["jg_aj"].idus;
        if (my.length > 2)
            return window["ifeval"] ? eval(my) : window["T"].doeval(my);
    };
    /**监听act */
    Jui.prototype.act = function (act) {
        var obj = act.obj;
        if (!obj) {
            console.log("obj$1\u4E0D\u5B58\u5728", obj);
            return false;
        }
        var c = '_end_begin_move_time_jobj_ro_timer_wd'; //执行act将要忽视的对象名
        var e = act["actf"];
        if (obj["aclas"] && Object.keys(obj["aclas"]).length > 0) {
            for (var i in obj["aclas"]) {
                if (i == '_acts' || i == '_a' || c.indexOf(i) != -1)
                    continue;
                // if (i == "{父元件}") {
                //     i = obj.parent.name;
                //     // if (i.indexOf("-") > 0) i = i.split("-")[1];
                // }else if(i.indexOf("_")==0&&i!="_acts"){
                //     i = jg_aj.idc.split('_')[0]+i;
                // }else if(i == "{本元件}"){
                //     i = obj.name;
                // }
                var pobj = sj.obj[i];
                pobj["clas"] || (pobj["clas"] = []);
                var index = pobj["clas"].indexOf(obj.name);
                if (index > -1) {
                    pobj["clas"].splice(index, 1);
                }
            }
        }
        var e2 = {};
        for (var i in e) {
            var newi = i;
            if (i == "{父元件}" || i == "{本元件}" || i.indexOf("_") == 0 && i != "_acts" && i != '_a' && c.indexOf(i) == -1) {
                newi = obj.name;
                if (i == "{父元件}")
                    newi = obj.parent.name;
                if (i.indexOf("_") == 0 && i != "_acts" && i != '_a' && c.indexOf(i) == -1) {
                    newi = obj.name.split('_')[0] + i;
                    if (newi.indexOf("-") > 0) {
                        var o = e[i]["_id"];
                        if (e[i] instanceof Array)
                            o = e[i][0]["_id"];
                        if (!o)
                            newi = newi.split("-")[1]; //修改于2018/8/1
                    }
                }
            }
            if (sj.clas[newi]) {
            }
            else {
                if (newi != "_acts" && newi != '_a' && c.indexOf(newi) == -1) {
                    newi = window['T'].findid(newi, { json: sj.clas }); //查找sj.clas里面相关于newi的_id
                }
            }
            e2[newi] = e[i];
        }
        e = e2;
        for (var i in e) {
            if (i == '_a') {
                window["T"].dodz(obj, window["T"].route2act(e[i]));
                continue;
            }
            if (i == "_acts") {
                window["T"].dodz(obj, e[i]);
                continue;
            }
            if (c.indexOf(i) != -1)
                continue;
            var __acts = [].concat(e[i]);
            var _p = __acts[__acts.length - 1] || {};
            if (_p instanceof Array || _p['动作']) {
                _p = {};
            }
            if (_p.remove && obj["aclas"] && obj["aclas"][i]) {
                delete obj["aclas"][i];
                sj.obj[i].clas && sj.obj[i].clas.indexOf(i) >= 0 && sj.obj[i].clas.splice(sj.obj[i].clas.indexOf(i), 1);
                Jui.getSingle().removeObjEvent(sj.obj[i], egret.TouchEvent.TOUCH_TAP, "actfun", [this, sj.obj[i]]);
                continue;
            }
            var pobj = window["T"].findObj(i);
            if (!pobj['clas'])
                pobj['clas'] = [];
            pobj['clas'].push(obj.name);
            var useCapture = false;
            // if(e[i]["useCapture"])useCapture=true;
            if (pobj["clas"].length == 1) {
                var actfun = function (e) {
                    for (var _i = 0, _a = this[1]['clas']; _i < _a.length; _i++) {
                        var id = _a[_i];
                        var clas = sj.obj[id];
                        if (clas["nofunc"])
                            return;
                        if (clas)
                            window["T"].dodz(clas, clas["aclas"][this[1].name]);
                    }
                };
                pobj['actfun' + i + obj.name] = actfun;
                var jt = egret.TouchEvent.TOUCH_TAP;
                var thisobj = [this, pobj];
                pobj.touchEnabled = true;
                // this.removeObjEvent(pobj,jt,"actfun",thisobj);
                Jui.getSingle().removeObjEvent(pobj, jt, actfun["name"], thisobj);
                pobj.addEventListener(jt, actfun, thisobj, useCapture, 2);
            }
        }
        obj["aclas"] = e;
    };
    /**执行act动作 */
    Jui.prototype.acts = function (e) {
        var action = e;
        var i = action['动作'];
        if (i.indexOf("@") > -1)
            i = i.split("@")[0];
        //let delay = e.delay || 0;
        //if(typeof(delay)=="string")delay = window['T'].deval(delay);
        e["actname"] = i;
        // if (delay) {
        //     egret.setTimeout(function (data) {
        //         try {
        //             window[data[0]](data[1]);
        //         } catch (err) {
        //             if (err.type != "delay" && data[1].cb) data[1].cb();
        //             console.log(err);
        //         }
        //     }, this, delay, [i, e])
        // } else {
        if (!window[i]) {
            if (this.pact.indexOf(i) == -1) {
                this.pact.push(i);
                window["csend"](['', { dba: ['_proj', { 'act[]': i }, { "cti": window["jg_aj"].sj.cti }] }, 'jai_数据']);
            }
            return console.log(i + "没有加入p表");
        }
        try {
            window[i](e);
        }
        catch (error) {
            if (error.type != "delay" && e.cb)
                e.cb();
            console.error(error);
            //console.log(i+"报错了")
        }
        // }
    };
    Jui.prototype.actt = function (obj, pobj, e, sxn) {
        if (sxn === void 0) { sxn = -1; }
        if (e.sx) {
            var acts = [];
            for (var _i = 0, _a = e.sx; _i < _a.length; _i++) {
                var item = _a[_i];
                acts.push(window["T"].merge({ "动作": item }, e[item]));
                delete e[item];
            }
            window["T"].dodz(obj, acts);
            delete e.sx;
        }
        var ret;
        for (var i in e) {
            var t = e[i];
            if (i.indexOf("@") > -1)
                i = i.split("@")[0]; //同名actt用@号区分
            if (!this.ifmy(t.my, obj))
                continue;
            if (typeof (t) != "object")
                continue; //参数字段不执行
            if (t["_id0"] && sxn != 0)
                continue;
            if (typeof t.obj == "string")
                t.obj = window["T"].findObj(t.obj);
            t.obj = (t.obj && t.obj.parent) ? t.obj : obj; //用户额外指定了obj，则不能用默认的 
            // t.pobj = pobj;
            // e.obj = obj;
            // e.pobj = pobj;
            if (!window[i]) {
                if (this.pact.indexOf(i) == -1) {
                    this.pact.push(i);
                    window["csend"](['', { dba: ['_proj', { 'act[]': i }, { "cti": window["jg_aj"].sj.cti }] }, 'jai_数据']);
                }
                console.log(i + "没有加入p表");
                continue;
            }
            t["actname"] = i;
            try {
                if (!ret) {
                    ret = window[i](t);
                }
                else {
                    window[i](t);
                }
            }
            catch (error) {
                if (error.type != "delay" && t.cb)
                    t.cb();
                console.error(error);
                //console.log(i+"报错了")
            }
        }
        return ret;
    };
    Jui.prototype.tx = function (e) {
        for (var i in e.tx) {
            if (!window[i]) {
                if (this.pact.indexOf(i) == -1) {
                    this.pact.push(i);
                    window["csend"](['', { dba: ['_proj', { 'act[]': i }, { "cti": window["jg_aj"].sj.cti }] }, 'jai_数据']);
                }
                console.log(i + "没有加入p表");
                continue;
            }
            try {
                window[i](e.tx[i]);
            }
            catch (error) {
                console.error(error);
                console.log(i + "报错了");
            }
            // case "飘落特效":
            //     var shootdata = e.tx[i];
            //     for (var ii = 0; ii < 50; ii++) {
            //         var shuye: egret.Bitmap = new egret.Bitmap();
            //         // shuye.texture = RES.getRes(shootdata["ziimg"]);
            //         this.setImg(shuye, shootdata["ziimg"])
            //         shuye.x = (Math.random()) * e.obj.width;
            //         shuye.y = -(Math.random() * 2) * e.obj.height;
            //         shuye.anchorOffsetX = shuye.width / 2;
            //         shuye.anchorOffsetY = shuye.height / 2;
            //         shuye.rotation = Math.random() * 360
            //         // shuye["speedx"] = Math.random() / 30 + 0.2;
            //         shuye["speedy"] = Math.random() + 3;
            //         e.obj.addChild(shuye);
            //         egret.setTimeout(function (shuye) {
            //             egret.Tween.get(shuye, { loop: true }).to({ scaleX: -1 }, 500).to({ scaleX: 1 }, 500)
            //         }, this, Math.random() * 1000 + 500, shuye)
            //     }
            //     sj.clas[e.obj.name]["mousex"] = 0;
            //     sj.clas[e.obj.name]["mousey"] = 0;
            //     Main.i.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (evevt: egret.TouchEvent) {
            //         sj.clas[e.obj.name]["mousex"] = (evevt.stageX - egret.MainContext.instance.stage.stageWidth / 2) / (egret.MainContext.instance.stage.stageWidth / 30);
            //         sj.clas[e.obj.name]["mousey"] = (evevt.stageY / egret.MainContext.instance.stage.stageHeight) * 8;
            //     }, this);
            //     egret.Tween.get(e.obj, { loop: true }).wait(5).call(function (obj) {
            //         for (var i = 0; i < obj.$children.length; i++) {
            //             obj.$children[i].x += sj.clas[obj.name]["mousex"];
            //             obj.$children[i].y += obj.$children[i]["speedy"] + sj.clas[obj.name]["mousey"];
            //             if (obj.$children[i].y > e.obj.height) {
            //                 obj.$children[i].y = -(Math.random()) * e.obj.height;
            //                 obj.$children[i].x = (Math.random() - 0.5) * e.obj.width;
            //             }
            //         }
            //     }, this, [e.obj]);
            //     break;
            // case "烟花特效":
            //     var shootdata = e.tx[i];
            //     if (shootdata["remove"] == 1) {
            //         window["closeEffFw"]();
            //     } else {
            //         egret.setTimeout(function (data) {
            //             var point = Jui.getSingle().getstagePoint(0, 0, data)
            //             window["showEffFw"](point.x, point.y, data.width, data.height);
            //         }, this, 200, e.obj)
            //     }
            //     break;
            // case "神经元":
            //     var shootdata = e.tx[i];
            //     if (shootdata["remove"] == 1) {
            //         window["closeEffSjy"]();
            //     } else {
            //         egret.setTimeout(function (data) {
            //             var point = Jui.getSingle().getstagePoint(0, 0, data)
            //             window["showEffSjy"](point.x, point.y, data.width, data.height);
            //         }, this, 200, e.obj)
            //     }
            //     break;
        }
    };
    //旧天姬主页动作
    // /**生成*/
    // public dz(x, y, dz, obj, cb): void {
    //     if (window["jg_aj"].editm >= 1) {
    //         let pobj = sj.obj["jai_body"]
    //         this.TjDz(dz);
    //         egret.setTimeout(function () {
    //             Jui.getSingle().jiguang(x, y, obj);
    //             cb && cb();
    //             Jui.getSingle().lizi(x, y);
    //         }, this, 900);
    //         var guangjian: egret.Bitmap = pobj.getChildByName("guangjian");
    //         if (!guangjian) {
    //             guangjian = new egret.Bitmap();
    //             // guangjian.texture = RES.getRes("guangjian_png");
    //             this.setImg(guangjian, "guangjian_png");
    //             guangjian.anchorOffsetX = 20;
    //             guangjian.anchorOffsetY = guangjian.height / 2;
    //             guangjian.x = 880;
    //             guangjian.y = 318;
    //             guangjian.name = "guangjian";
    //         }
    //         guangjian.scaleX = 0;
    //         guangjian.alpha = 0;
    //         pobj.addChildAt(guangjian, 6);
    //         var d = this.fire(guangjian.x, guangjian.y, x, y);
    //         guangjian.rotation = d;
    //         egret.Tween.removeTweens(guangjian);
    //         egret.Tween.get(guangjian).wait(800).to({ scaleX: 1, alpha: 1 }, 100).wait(500).call(function (guangjian) { guangjian.parent.removeChild(guangjian) }, this, [guangjian]);
    //     }
    // }
    // /**粒子 */
    // public lizi(x, y, time = 1000, pngstr = "huiju_png", jsonstr = "huiju_json"): void {
    //     let pobj = sj.obj["jai_body"]
    //     var system = pobj.getChildByName("guangjianzilizi");
    //     if (system) {
    //         system.stop();
    //         pobj.removeChild(system);
    //     }
    //     var png;
    //     var json;
    //     var data = { png: png, json: json };
    //     data.png = RES.getRes(pngstr);
    //     data.json = RES.getRes(jsonstr);
    //     system = new particle.GravityParticleSystem(data.png, data.json)
    //     system.name = "guangjianzilizi";
    //     system.x = x;
    //     system.y = y;
    //     // if (e["emitterX"]) system.emitterX = e["emitterX"];
    //     // if (e["emitterY"]) system.emitterY = e["emitterY"];
    //     system.anchorOffsetX = system.width / 2;
    //     system.anchorOffsetY = system.height / 2;
    //     pobj.addChild(system)
    //     system.start();
    //     if (time != -1) {
    //         egret.setTimeout(function (system) {
    //             system.stop();
    //             if (system.parent) system.parent.removeChild(system);
    //         }, this, time, system)
    //     }
    // }
    // /**激光 */
    // public jiguang(x, y, obj): void {
    //     var point2 = Jui.getSingle().getstagePoint(obj.width / 2, obj.height / 2, obj);
    //     var xian = new egret.Shape();
    //     xian.graphics.lineStyle(4, 0xff00ff);
    //     xian.graphics.moveTo(880, 318);
    //     xian.graphics.lineTo(point2.x, point2.y);
    //     var color = 0x33CCFF;        /// 光晕的颜色，十六进制，不包含透明度
    //     var alpha = 0.2;             /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
    //     var blurX = 18;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
    //     var blurY = 18;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
    //     var strength = 2;            /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
    //     var quality = egret.BitmapFilterQuality.HIGH;        /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
    //     var inner = false;            /// 指定发光是否为内侧发光，暂未实现
    //     var knockout = false;            /// 指定对象是否具有挖空效果，暂未实现
    //     var glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY,
    //         strength, quality, inner, knockout);
    //     xian.filters = [glowFilter];
    //     sj.obj["jai_body"].addChildAt(xian, 3);
    //     egret.setTimeout(function (xian) {
    //         sj.obj["jai_body"].removeChild(xian);
    //     }, this, 500, xian)
    //     this.addqd(obj);
    // }
    // public addqd(obj): void {
    //     var point = Jui.getSingle().getstagePoint(0, 0, obj);
    //     var kuang = new egret.Bitmap();
    //     Jui.getSingle().setImg(kuang, "kuangkaung_png")
    //     kuang.scale9Grid = new egret.Rectangle(20, 20, 50, 50);
    //     kuang.width = obj.width + 10;
    //     kuang.height = obj.height + 10;
    //     kuang.anchorOffsetX = kuang.width / 2;
    //     kuang.anchorOffsetY = kuang.height / 2;
    //     kuang.x = point.x - 5 + kuang.width / 2;
    //     kuang.y = point.y - 5 + kuang.height / 2;
    //     kuang.scaleX = 1.5;
    //     kuang.scaleY = 1.5;
    //     egret.Tween.get(kuang).to({ scaleX: 1, scaleY: 1 }, 400);
    //     sj.obj["jai_body"].addChild(kuang);
    //     egret.setTimeout(function (kuang) {
    //         sj.obj["jai_body"].removeChild(kuang);
    //     }, this, 1500, kuang)
    // }
    // /**天姬移动到obj位置 
    //  * dz:移动后执行的动作
    // */
    // public tjyd(obj, dz: string): void {
    //     var fangzhuang = 0;
    //     var point;
    //     if (window["T"].isEgret(obj)) {
    //         point = this.getstagePoint(obj.width / 2, obj.height / 2, obj);
    //     } else {
    //         point = { x: obj.x, y: obj.y };
    //     }
    //     var tianji = sj.obj["jai_天姬"]
    //     if (tianji) {
    //         document.getElementById('jai_body').style.zIndex = "9";
    //         var x0 = this.deval("x", tianji.parent, { "x": "90%" });
    //         var y0 = this.deval("y", tianji.parent, { "y": "57%" });;
    //         if (point.x < tianji.x) fangzhuang = 1;
    //         this.TjDz("侧面跑", 0, 0, fangzhuang);
    //         var time = this.getTime(tianji.x, tianji.y, point.x, point.y, 1000)
    //         var dztime;
    //         egret.Tween.get(tianji).to({ x: point.x, y: point.y, scaleX: fangzhuang > 0 ? -0.4 : 0.4, scaleY: 0.4 }, time);
    //         egret.setTimeout(function () {
    //             dztime = Jui.getSingle().TjDz(dz);
    //             egret.setTimeout(function () {
    //                 if (point.x < tianji.x) fangzhuang = 1
    //                 else fangzhuang = 0;
    //                 let x = 0, y = 0;
    //                 if (dz == "侧空翻连踢侧" || dz == "侧空翻连踢正") x = point.x + 500;
    //                 if (dz == "二阶跳侧面") { x = point.x + 100; y = point.y + 100; }
    //                 Jui.getSingle().TjDz("侧面跑", x, y, fangzhuang);
    //                 time = this.getTime(tianji.x, tianji.y, x0, y0, 1000)
    //                 egret.Tween.get(tianji).to({ x: x0, y: y0, scaleX: fangzhuang > 0 ? -0.7 : 0.7, scaleY: 0.7 }, time).call(function () {
    //                     Jui.getSingle().TjDz("正常状态");
    //                     document.getElementById('jai_body').style.zIndex = "-1";
    //                 });
    //             }, this, dztime + 100)
    //         }, this, time)
    //     }
    // }
    // /**执行天姬动作 
    //  * dz:天姬执行动作名
    //  * x:天姬x坐标 0为不改变
    //  * y:天姬y坐标 0为不改变
    //  * fanzhuang:天姬是否翻转 0为不翻转
    //  * scaleX:天姬x轴缩放
    //  * scaleY:天姬y轴缩放    scaleX和scaleY有一个不为0就会执行缩放
    //  * time缩放用时  默认500毫秒
    // */
    // public TjDz(dz: string, x = 0, y = 0, fanzhuang = 0, scaleX = 0, scaleY = 0, time = 500): number {
    //     let dzs = [];
    //     let obj = sj.obj["jai_天姬"];
    //     if (!obj) return 1;
    //     var dztime = 1000;
    //     if (x) obj.x = x;
    //     if (y) obj.y = y;
    //     if (fanzhuang) {
    //         obj.scaleX = -Math.abs(obj.scaleX);
    //     } else {
    //         obj.scaleX = Math.abs(obj.scaleX);
    //     }
    //     if (scaleX || scaleY) {
    //         egret.Tween.get(obj).to({ scaleX: scaleX || 1, scaleY: scaleY || 1 }, time);
    //     }
    //     let o = JuiData.getTjDz(dz);
    //     dzs = o[0];
    //     dztime = o[1];
    //     if (dzs.length > 0) window["T"].dodz(sj.obj["jai_天姬本体"], dzs);
    //     return dztime;
    // }
    /**场景切换效果
     * obj
    */
    Jui.prototype.SceneSwitching = function (obj, mobj, aji, robj) {
        var you = false;
        if (aji.style.cc == "下方出场1") {
            if (robj && mobj.$children.length > 0) {
                you = true;
                egret.Tween.get(robj).to({ y: -robj.height }, 500, egret.Ease.circOut).call(function (data) {
                    Jui.getSingle().removeObj(data);
                }, this, [robj]);
            }
            mobj.addChild(obj);
        }
        else if (aji.style.cc == "下方出场2") {
            if (robj && mobj.$children.length > 0) {
                you = true;
                egret.Tween.get(robj).wait(500).call(function (data) {
                    Jui.getSingle().removeObj(data);
                }, this, [robj]);
            }
            mobj.addChild(obj);
        }
        else if (aji.style.cc == "左方出场1") {
            if (robj && mobj.$children.length > 0) {
                you = true;
                egret.Tween.get(robj).to({ x: -robj.width }, 500, egret.Ease.circOut).call(function (data) {
                    Jui.getSingle().removeObj(data);
                }, this, [robj]);
            }
            mobj.addChild(obj);
        }
        else if (aji.style.cc == "左方出场2") {
            if (robj && mobj.$children.length > 0) {
                you = true;
                egret.Tween.get(robj).wait(500).call(function (data) {
                    Jui.getSingle().removeObj(data);
                }, this, [robj]);
            }
            mobj.addChild(obj);
        }
        else if (aji.style.cc == "中间出场1" || aji.style.cc == "中间出场2") {
            var time = 300;
            if (aji.style.cc == "中间出场2")
                time = 800;
            if (robj && mobj.$children.length > 0) {
                you = true;
                egret.Tween.get(robj).wait(time).call(function (data) {
                    Jui.getSingle().removeObj(data);
                }, this, [robj]);
            }
            mobj.addChild(obj);
        }
        else if (aji.style.cc == "旋转出场1") {
            var time = 500;
            if (robj && mobj.$children.length > 0) {
                you = true;
                egret.Tween.get(robj).wait(time).call(function (data) {
                    Jui.getSingle().removeObj(data);
                }, this, [robj]);
            }
            mobj.addChild(obj);
        }
        else if (aji.style.cc == "从大到小" || aji.style.cc == "从小到大") {
            var time = 400;
            var scale = 1.8;
            if (aji.style.cc == "从小到大")
                scale = 0.2;
            if (robj && mobj.$children.length > 0) {
                you = true;
                egret.Tween.get(robj).wait(time).call(function (data) {
                    Jui.getSingle().removeObj(data);
                }, this, [robj]);
            }
            mobj.addChild(obj);
        }
        else if (aji.style.cc == "显隐切换") {
            var time_2 = 800; //过度时间
            var alpha = 0; //透明度调节
            var scale_1 = 0.8; //缩放大小
            if (robj && mobj.$children.length > 0) {
                you = true;
                egret.Tween.get(robj).to({ alpha: alpha, scaleX: scale_1, scaleY: scale_1 }, time_2).call(function (data) {
                    Jui.getSingle().removeObj(data);
                }, this, [robj]);
            }
            mobj.addChild(obj);
        }
        else if (aji.style.cc == "翻转切换") {
            var time_3 = 500; //过度时间
            var scaleX = 0;
            var scaleY = 1;
            if (robj && mobj.$children.length > 0) {
                you = true;
                egret.Tween.get(robj).to({ scaleX: scaleX, scaleY: scaleY }, time_3).call(function (data) {
                    Jui.getSingle().removeObj(data);
                }, this, [robj]);
            }
            mobj.addChild(obj);
        }
        else {
            if (robj && mobj.$children.length > 0) {
                you = true;
                egret.Tween.get(robj).to({ y: -robj.height }, 500, egret.Ease.circOut).call(function (data) {
                    Jui.getSingle().removeObj(data);
                }, this, [robj]);
            }
            mobj.addChild(obj);
        }
        this.chuchang(obj, mobj, aji);
    };
    /**出场特效 */
    Jui.prototype.chuchang = function (obj, mobj, aji) {
        var x = this.deval("x", obj.parent, aji.style);
        var y = this.deval("y", obj.parent, aji.style);
        var w = this.deval("w", obj.parent, aji.style);
        var h = this.deval("h", obj.parent, aji.style);
        var scaleX = aji.style.scaleX;
        var scaleY = aji.style.scaleY;
        var anchorOffsetX = aji.style.anchorOffsetX || w / 2;
        var anchorOffsetY = aji.style.anchorOffsetY || h / 2;
        obj.x = x;
        obj.y = y;
        obj.anchorOffsetX = anchorOffsetX;
        obj.anchorOffsetY = anchorOffsetY;
        if (aji.style.cc == "下方出场1") {
            obj.y = Main.i.height + obj.anchorOffsetY;
            egret.Tween.get(obj).to({ y: y }, 500, egret.Ease.circOut);
        }
        else if (aji.style.cc == "下方出场2") {
            obj.y = Main.i.height + obj.anchorOffsetY;
            egret.Tween.get(obj).to({ y: y }, 500, egret.Ease.circOut);
        }
        else if (aji.style.cc == "左方出场1") {
            obj.x = Main.i.width;
            egret.Tween.get(obj).to({ x: x }, 500, egret.Ease.circOut);
        }
        else if (aji.style.cc == "左方出场2") {
            obj.x = Main.i.width;
            egret.Tween.get(obj).to({ x: x }, 500, egret.Ease.circOut);
        }
        else if (aji.style.cc == "中间出场1" || aji.style.cc == "中间出场2") {
            var time = 300;
            var ease = egret.Ease.backOut;
            if (aji.style.cc == "中间出场2") {
                ease = egret.Ease.bounceOut;
                time = 800;
            }
            obj.width = w;
            obj.height = h;
            obj.anchorOffsetX = anchorOffsetX;
            obj.anchorOffsetY = anchorOffsetY;
            obj.x = x;
            obj.y = y;
            obj.scaleX = 0;
            obj.scaleY = 0;
            egret.Tween.get(obj).to({ scaleX: scaleX || 1, scaleY: scaleY || 1 }, time, ease);
        }
        else if (aji.style.cc == "旋转出场1") {
            var time = 500;
            var ease = egret.Ease.backOut;
            obj.width = this.deval("w", mobj, aji.style);
            obj.height = this.deval("h", mobj, aji.style);
            obj.anchorOffsetX = anchorOffsetX;
            obj.anchorOffsetY = anchorOffsetY;
            obj.x = Main.i.width;
            obj.y = Main.i.height;
            obj.scaleX = 0;
            obj.scaleY = 0;
            egret.Tween.get(obj).to({ rotation: -360, x: x, y: y, scaleX: 1, scaleY: 1 }, time);
        }
        else if (aji.style.cc == "从大到小" || aji.style.cc == "从小到大") {
            var scale = 1.8;
            if (aji.style.cc == "从小到大")
                scale = 0.2;
            var ease = egret.Ease.circOut;
            obj.width = w;
            obj.height = h;
            obj.anchorOffsetX = anchorOffsetX;
            obj.anchorOffsetY = anchorOffsetY;
            obj.x = x;
            obj.y = y;
            obj.scaleX = scale;
            obj.scaleY = scale;
            egret.Tween.get(obj).to({ scaleX: scaleX || 1, scaleY: scaleY || 1 }, 400, ease);
        }
        else if (aji.style.cc == "显隐切换") {
            var ease = egret.Ease.circOut;
            var scale_2 = 0.8;
            obj.width = w;
            obj.height = h;
            obj.anchorOffsetX = anchorOffsetX;
            obj.anchorOffsetY = anchorOffsetY;
            obj.x = x;
            obj.y = y;
            obj.alpha = 0;
            obj.scaleX = scale_2;
            obj.scaleY = scale_2;
            egret.Tween.get(obj).wait(800).to({ scaleX: scaleX || 1, scaleY: scaleY || 1, alpha: 1 }, 800, ease);
        }
        else if (aji.style.cc == "翻转切换") {
            var ease = egret.Ease.circOut;
            var scaleX_1 = 0;
            var scaleY_1 = 1;
            obj.width = w;
            obj.height = h;
            obj.anchorOffsetX = anchorOffsetX;
            obj.anchorOffsetY = anchorOffsetY;
            obj.x = x;
            obj.y = y;
            obj.scaleX = scaleX_1;
            obj.scaleY = scaleY_1;
            egret.Tween.get(obj).wait(500).to({ scaleX: scaleX_1 || 1, scaleY: scaleY_1 || 1 }, 500, ease);
        }
        else {
            obj.y = mobj.height;
            egret.Tween.get(obj).to({ y: 0 }, 500, egret.Ease.circOut);
        }
    };
    /**设置obj帧动画资源
     * obj      需要设置动画资源的对象
     * json     json资源地址或名字
     * png      图片资源地址或名字
     * count    动画执行次数
     * w        宽
     * h        高
     * dz       动作
     * scaleX   宽度比例
     * scaleX   高度比例
     */
    Jui.prototype.setMove = function (obj, json, png, count, w, h, dz, scaleX, scaleY, anchorOffsetX, anchorOffsetY) {
        if (w === void 0) { w = null; }
        if (h === void 0) { h = null; }
        if (dz === void 0) { dz = ""; }
        if (scaleX === void 0) { scaleX = null; }
        if (scaleY === void 0) { scaleY = null; }
        if (anchorOffsetX === void 0) { anchorOffsetX = null; }
        if (anchorOffsetY === void 0) { anchorOffsetY = null; }
        json = window["T"].getResUrl(json);
        png = window["T"].getResUrl(png);
        var wc = obj.movie && obj["zjson"] && obj["zpng"] && obj["zjson"] == json && obj["zpng"] == png; //这个帧图已经加载过且需要再次加载的资源相同
        obj["zjson"] = json;
        obj["zpng"] = png;
        obj["zcount"] = count;
        if (wc && obj["zdz"] && (obj["zdz"] == dz) && scaleX == obj.scaleX && scaleY == obj.scaleY)
            return;
        obj["zdz"] = dz;
        var jsondata, pngdata;
        if (wc) {
            this.setMovedz(obj, obj.movie, count, w, h, dz, scaleX, scaleY, anchorOffsetX, anchorOffsetY);
        }
        else if (json.indexOf('http') > -1) {
            RES.getResByUrl(json, function (aji, url) {
                jsondata = aji;
                RES.getResByUrl(png, function (aji, url) {
                    pngdata = aji;
                    var movie = new egret.MovieClipDataFactory(jsondata, pngdata);
                    Jui.getSingle().setMovedz(this[0], movie, this[1], this[2], this[3], this[4], this[5], this[6], this[7], this[8]);
                }, this, RES.ResourceItem.TYPE_IMAGE);
            }, [obj, count, w, h, dz, scaleX, scaleY, anchorOffsetX, anchorOffsetY], RES.ResourceItem.TYPE_JSON);
        }
        else {
            var mjson = RES.getRes(json), mpng = RES.getRes(png);
            if (mjson && mpng) {
                obj.movieClipData = null;
                var movie = new egret.MovieClipDataFactory(mjson, mpng);
                this.setMovedz(obj, movie, count, w, h, dz, scaleX, scaleY, anchorOffsetX, anchorOffsetY);
            }
        }
    };
    Jui.prototype.setMovedz = function (obj, movie, count, w, h, dz, scaleX, scaleY, anchorOffsetX, anchorOffsetY) {
        if (w === void 0) { w = null; }
        if (h === void 0) { h = null; }
        if (dz === void 0) { dz = ""; }
        if (scaleX === void 0) { scaleX = null; }
        if (scaleY === void 0) { scaleY = null; }
        if (anchorOffsetX === void 0) { anchorOffsetX = null; }
        if (anchorOffsetY === void 0) { anchorOffsetY = null; }
        obj.movie = movie;
        obj.movieClipData = movie.generateMovieClipData("");
        if (Jui.getSingle().getObjLength(movie.$mcDataSet.mc) > 1) {
            if (dz != undefined) {
                obj.movieClipData = movie.generateMovieClipData(dz);
            }
            else {
                obj.movieClipData = movie.generateMovieClipData("");
            }
            obj.play(count || -1);
        }
        else {
            if (dz != undefined && obj.movieClipData.labels && obj.movieClipData.labels.some(function (f) { return f._name == dz; })) {
                obj.gotoAndPlay(dz, count || -1);
            }
            else {
                obj.play(count || -1);
            }
        }
        if (!obj.cw)
            obj.cw = obj.width;
        if (!obj.ch)
            obj.ch = obj.height;
        if (w && w != 0 && obj.name != "jai_天姬本体zimc") {
            obj.scaleX = w / obj.cw;
            obj.width = w;
        }
        if (h && h != 0 && obj.name != "jai_天姬本体zimc") {
            obj.scaleY = h / obj.ch;
            obj.height = h;
        }
        if (scaleX != null && scaleX != -1 && scaleX != "p")
            obj.scaleX = scaleX;
        if (scaleY != null && scaleY != -1 && scaleY != "p")
            obj.scaleY = scaleY;
        if (anchorOffsetX != null)
            obj.anchorOffsetX = anchorOffsetX * obj.width;
        if (anchorOffsetY != null)
            obj.anchorOffsetY = anchorOffsetY * obj.height;
        if (scaleX == -1 || scaleX == "f")
            obj.scaleX = -Math.abs(obj.scaleX);
        if (scaleY == -1 || scaleY == "f")
            obj.scaleY = -Math.abs(obj.scaleY);
        if (scaleX == "p")
            obj.scaleX = Math.abs(obj.scaleX);
        if (scaleY == "p")
            obj.scaleY = Math.abs(obj.scaleY);
        // if (scaleX < 0) obj.x = Math.abs(scaleX * obj.width);
        // if (scaleY < 0) obj.y = Math.abs(scaleY * obj.height);
    };
    /**修改对象图片
     * objname:需要需改对象的name或者对象
     * url:图片名字或连接
     * anchor:绝对锚点
     * mrurl:当url找不到资源图的时候使用默认图片的资源名
     * cb:资源加载完成时执行回调
    */
    Jui.prototype.setImg = function (objname, url, anchor, mrurl, cb) {
        if (url === void 0) { url = ""; }
        if (anchor === void 0) { anchor = -1; }
        if (mrurl === void 0) { mrurl = "x_c_png"; }
        if (cb === void 0) { cb = undefined; }
        var obj;
        try {
            if (typeof (objname) == "string") {
                obj = window["T"].findObj(objname); //sj.obj[objname];
            }
            else {
                obj = objname;
            }
            if (obj instanceof egret.DisplayObjectContainer) {
                obj = obj.getChildByName(obj.name + "ziImg");
            }
            if (!obj) {
                return;
            }
            obj["imgwc"] = 0;
            obj.bgimg = url;
            //提高性能 开启可能会出现渲染问题
            if (Jui.getSingle().getv("cb", 0)) {
                obj.cacheAsBitmap = true;
            }
            // if (window["jg_aj"].local == 1) {
            //     url = url.split("_png")[0];
            //     url = url.split("_jpg")[0];
            //     this.setBase64Tu(obj, url)
            // } else {
            url = window["T"].getResUrl(url);
            if (obj.texture && url == obj.imgurl)
                return;
            obj["imgurl"] = url;
            if (url.indexOf('http') > -1) {
                var name_1 = this.getWlNmae(url);
                var texture = RES.getRes(name_1);
                if (texture) {
                    obj.texture = texture;
                    obj["imgwc"] = 1;
                    if (cb)
                        cb();
                }
                else {
                    this.setUrlImg(obj, url, anchor, mrurl, cb);
                }
            }
            else {
                var anchorOffsetX = obj.anchorOffsetX / obj.width;
                var anchorOffsetY = obj.anchorOffsetY / obj.height;
                obj.texture = RES.getRes(url);
                if (obj.texture == null) {
                    obj.texture = RES.getRes(mrurl);
                }
                if (anchorOffsetX) {
                    obj.anchorOffsetX = obj.width * anchorOffsetX;
                }
                if (anchorOffsetY) {
                    obj.anchorOffsetY = obj.height * anchorOffsetY;
                }
                if (anchor != -1) {
                    obj.anchorOffsetX = obj.width * anchor;
                    obj.anchorOffsetY = obj.height * anchor;
                }
                obj["imgwc"] = 1;
                if (cb)
                    cb();
            }
        }
        catch (error) {
            console.log("设置图片错误");
        }
        // }
    };
    Jui.prototype.setUrlImg = function (obj, url, anchor, mrurl, cb) {
        if (anchor === void 0) { anchor = -1; }
        if (mrurl === void 0) { mrurl = "x_c_png"; }
        if (cb === void 0) { cb = undefined; }
        var anchorOffsetX = obj.anchorOffsetX / obj.width;
        var anchorOffsetY = obj.anchorOffsetY / obj.height;
        try {
            RES.getResByUrl(url, function (aji, url) {
                if (url != obj["imgurl"])
                    return;
                this.texture = aji;
                if (this.texture == null) {
                    this.texture = RES.getRes(mrurl);
                    var zobj = sj.obj[this.name.split("zi")[0]];
                    if (zobj && zobj['限制等级图']) {
                        var img = url.split("?")[0].replace(/[^0-9]/ig, "");
                        if (isNaN(img))
                            return;
                        var num = parseInt(img);
                        if (num <= 0)
                            return;
                        url = url.replace(num + "", num - 1 + "");
                        Jui.getSingle().setImg(obj, url, anchor);
                        return;
                    }
                }
                if (anchorOffsetX) {
                    this.anchorOffsetX = this.width * anchorOffsetX;
                }
                if (anchorOffsetY) {
                    this.anchorOffsetY = this.height * anchorOffsetY;
                }
                if (anchor != -1) {
                    this.anchorOffsetX = this.width * anchor;
                    this.anchorOffsetY = this.height * anchor;
                }
                this["imgwc"] = 1;
                if (cb)
                    cb();
            }, obj, RES.ResourceItem.TYPE_IMAGE);
        }
        catch (error) {
        }
    };
    Jui.prototype.setObjRotation = function (obj, angle) {
        obj.rotation = angle;
        if (angle < 0 || angle > 90) {
            obj.scaleX = -1;
        }
        else {
            obj.scaleX = 1;
        }
    };
    /**
     * 根据两点移动坐标设置帧图动作
     */
    Jui.prototype.setMoveDz = function (obj, x1, y1, x2, y2) {
        if (!obj["zjson"] || !obj["zpng"] || !obj["zdz"])
            return;
        var dz = obj["zdz"].split("-")[0] + "-";
        var d = Jui.getSingle().getAngle(x1, y1, x2, y2);
        var arr = Jui.getSingle().getdzjd(obj.$movieClipData.$mcData.labels); //[0,45,90,135,180,225,270,315,360];
        if (arr.length == 0)
            return;
        var n, linshi = 360, scaleX = 1, scaleY = 1;
        for (var i = 0; i < arr.length; i++) {
            if (Math.abs(d - arr[i]) < linshi) {
                n = arr[i];
                linshi = Math.abs(d - arr[i]);
            }
            // if(Math.abs(d-arr[i])<=22.5){
            //     n = arr[i];
            // }
        }
        if (n == 0) {
            dz += "180";
            scaleX = 1;
        }
        else if (n == 45) {
            dz += "135";
            scaleX = -1;
        }
        else if (n == 90) {
            dz += "90";
            scaleX = -1;
        }
        else if (n == 135) {
            dz += "45";
            scaleX = -1;
        }
        else if (n == 180) {
            dz += "0";
            scaleX = 1;
        }
        else if (n == 225) {
            dz += "45";
            scaleX = 1;
        }
        else if (n == 270) {
            dz += "90";
            scaleX = 1;
        }
        else if (n == 315) {
            dz += "135";
            scaleX = 1;
        }
        else if (n == 360) {
            dz += "180";
            scaleX = 1;
        }
        Jui.getSingle().setMove(obj, obj["zjson"], obj["zpng"], -1, obj.width, obj.height, dz, scaleX * Math.abs(obj.scaleX), scaleY * Math.abs(obj.scaleY));
    };
    Jui.prototype.getAngle = function (px, py, mx, my) {
        var x = Math.abs(px - mx);
        var y = Math.abs(py - my);
        var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        var cos = y / z;
        var radina = Math.acos(cos); //用反三角函数求弧度
        var angle = Math.floor(180 / (Math.PI / radina)); //将弧度转换成角度
        if (mx > px && my > py) {
            angle = 180 - angle;
        }
        if (mx == px && my > py) {
            angle = 180;
        }
        if (mx > px && my == py) {
            angle = 90;
        }
        if (mx < px && my > py) {
            angle = 180 + angle;
        }
        if (mx < px && my == py) {
            angle = 270;
        }
        if (mx < px && my < py) {
            angle = 360 - angle;
        }
        var arr = [0, 45, 90, 135, 180, 225, 270, 315];
        var n;
        for (var i = 0; i < arr.length; i++) {
            if (Math.abs(angle - arr[i]) <= 22.5)
                console.warn(arr[i]);
        }
        return angle;
    };
    Jui.prototype.getdzjd = function (labels) {
        var arr = [];
        for (var i = 0; i < labels.length; i++) {
            if (labels[i].name.indexOf("-") != -1) {
                var mun = parseInt(labels[i].name.split("-")[1]);
                arr.push(mun);
                if (mun > 0 && mun < 180) {
                    arr.push(mun + 180);
                }
            }
        }
        return arr;
    };
    /**坐标点1到坐标点2的转向角度  (角度按照图片方向为向右的计算)
     * x1   坐标点1x轴坐标
     * y1   坐标点1y轴坐标
     * x2   坐标点2x轴坐标
     * x2   坐标点2x轴坐标
     */
    Jui.prototype.fire = function (x1, y1, x2, y2) {
        var angle;
        var x = x2 - x1;
        var y = y2 - y1;
        var z = Math.sqrt(Math.abs(x) * Math.abs(x) + Math.abs(y) * Math.abs(y));
        var jiaodu = Math.round(Math.asin(y / z) / Math.PI * 180);
        if (x2 - x1 > 0 && y2 - y1 >= 0) {
            angle = jiaodu;
        }
        else if (x2 - x1 > 0 && y2 - y1 < 0) {
            angle = jiaodu;
        }
        else if (x2 - x1 < 0 && y2 - y1 > 0) {
            angle = 180 - jiaodu; //- jiaodu - 180;
        }
        else if (x2 - x1 < 0 && y2 - y1 < 0) {
            angle = -180 - jiaodu; //90 - jiaodu + 90;
        }
        else if (x2 - x1 < 0 && y2 - y1 == 0) {
            angle = -180;
        }
        else if (x2 - x1 > 0 && y2 - y1 == 0) {
            angle = 0;
        }
        else if (y2 - y1 < 0 && x2 == x1) {
            angle = -90;
        }
        else {
            angle = 90;
        }
        return angle;
    };
    /**对象池 有待改进*/
    Jui.prototype.objPool = function (obj, objCount) {
        var mobj = null;
        if (!hc[obj]) {
            hc[obj] = [];
            hc[obj + "length"] = objCount;
        }
        else {
            if (hc[obj].length == hc[obj + "length"]) {
                mobj = hc[obj].shift();
            }
        }
        return mobj;
    };
    /**坐标点1到坐标点2以指定速度行走所需要的时间
     * x1   坐标点1x轴坐标
     * y1   坐标点1y轴坐标
     * x2   坐标点2x轴坐标
     * x2   坐标点2x轴坐标
     * SPEED    移动速度
     */
    Jui.prototype.getTime = function (x1, y1, x2, y2, SPEED) {
        var time;
        var d = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        time = d / SPEED * 1000;
        return time;
    };
    /**http链接转本地资源名 */
    Jui.prototype.getWlNmae = function (url) {
        url = url.split("?")[0];
        var arr = url.split("/");
        var arr2 = arr[arr.length - 1].split(".");
        var name = arr2[0] + "_" + arr2[1];
        return name;
    };
    Jui.prototype.deval = function (base, pobj, aji, aj) {
        if (aj === void 0) { aj = undefined; }
        if (aji.ww && base == 'w' && aji[base].indexOf("%")) {
            aji[base] = "{ww}*" + parseFloat(aji[base]) * 0.01;
        }
        if (aji.ww && base == 'h' && aji[base].indexOf("%")) {
            aji[base] = "{wh}*" + parseFloat(aji[base]) * 0.01;
        }
        return window["T"].deval(base, pobj, aji, aj);
    };
    /**读取链接参数值
     * name     参数名
     * rv   没有参数值返回的默认值
    */
    Jui.prototype.getv = function (name, rv) {
        try {
            return window["jex"]().getv(name, rv);
        }
        catch (error) {
            if (!window || !window.location)
                return rv;
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = rv;
            if (window) {
                r = window.location.search.substr(1).match(reg);
            }
            if (r != null)
                return window["decodeURI"](r[2]);
            return rv;
        }
    };
    /**获取子弹延伸发射点(目前射程会出现超远，有待完善)
     * x1:初始x
     * y1:初始y
     * x2:点击x
     * y2:点击y
     */
    Jui.prototype.yssj = function (x1, y1, x2, y2) {
        var mux, muy;
        if (x2 - x1 > 0) {
            mux = Config.getSingle().STAGE_WIDTH + 20;
            muy = Math.abs(y2 - y1) / Math.abs(x2 - x1) * (mux - x1);
            //muy = Math.abs(x2 - x1) / (mux - x1)*Math.abs(y2 - y1)
            // if(muy>Config.getSingle().STAGE_HEIGHT||muy<0){
            //     let bs = muy/
            // }
            if (y2 - y1 > 0) {
                muy = y1 + muy;
            }
            else {
                muy = y1 - muy;
            }
        }
        else {
            mux = -20;
            muy = Math.abs(y2 - y1) / Math.abs(x2 - x1) * (x1 - mux);
            if (y2 - y1 > 0) {
                muy = y1 + muy;
            }
            else {
                muy = y1 - muy;
            }
        }
        return new egret.Point(mux, muy);
    };
    /**获取对象长度 */
    Jui.prototype.getObjLength = function (arr) {
        var length = 0;
        for (var i in arr) {
            length++;
        }
        return length;
    };
    /**返回一个在obj对象上指定坐标点在舞台上的坐标点 */
    Jui.prototype.getstagePoint = function (x, y, obj) {
        var point = obj.localToGlobal(x, y, new egret.Point());
        return point;
    };
    /**返回一个指定舞台坐标在pobj对象上的坐标点
     *
     */
    Jui.prototype.getziPoint = function (x, y, pobj) {
        var x0, y0;
        if (pobj == null || pobj == egret.Stage) {
            return new egret.Point(x, y);
        }
        else {
            if (pobj == egret.Stage)
                return new egret.Point(x, y);
            x0 = x - (pobj.x - pobj.anchorOffsetX);
            y0 = y - (pobj.y - pobj.anchorOffsetY);
            return this.getziPoint(x0, y0, pobj.parent);
        }
    };
    /**检测两个对象是否碰撞
     *
     */
    Jui.prototype.hitTest2 = function (obj1, obj2, kqmpz) {
        if (kqmpz === void 0) { kqmpz = false; }
        var rect1 = obj1.getBounds();
        var rect2 = obj2.getBounds();
        // rect1.width = biliW * rect1.width;
        // rect1.height = biliH * rect1.height;
        // rect1.x = obj1.x + (1 - biliW) / 2 * obj1.width;
        // rect1.y = obj1.y - (1 - biliH)/2 * obj1.height;
        // //        console.warn((1 - biliH) / 2 * obj1.height);
        // rect2.x = obj2.x - obj2.width / 2;
        // rect2.y = obj2.y - obj2.height/4;
        rect1.x = obj1.x - obj1.anchorOffsetX;
        rect1.y = obj1.y - obj1.anchorOffsetY;
        rect2.x = obj2.x - obj2.anchorOffsetX;
        rect2.y = obj2.y - obj2.anchorOffsetY;
        // rect1.width = rect1.width*obj1.scaleX;
        // rect1.height = rect1.height*obj1.scaleY;
        rect1.width = obj1.width * obj1.scaleX;
        rect1.height = obj1.height * obj1.scaleY;
        rect2.width = obj2.width * obj2.scaleX;
        rect2.height = obj2.height * obj2.scaleY;
        // var ni: egret.Shape;
        // var ni2: egret.Shape;
        // if(obj1["ni"]){ni=obj1["ni"]}else{obj1["ni"] = ni;ni = new egret.Shape();obj1.parent.addChild(ni);}
        // if(obj1["ni2"]){ni2=obj2["ni2"]}else{obj1["ni2"] = ni2;ni2 = new egret.Shape();obj1.parent.addChild(ni2);}
        // ni.graphics.clear();
        // ni.graphics.beginFill(0x000000);
        // ni.graphics.drawRect(rect1.x, rect1.y, rect1.width, rect1.height);
        // ni.graphics.endFill();
        // var ni2 = new egret.Shape();
        // ni2.graphics.beginFill(0x000000);
        // ni2.graphics.drawRect(rect2.x,rect2.y,rect2.width,rect2.height);
        // ni2.graphics.endFill();
        // obj1.parent.addChild(ni2);
        var type = 0;
        if (kqmpz && rect1.intersects(rect2)) {
            var o = rect1.x - rect2.x;
            var d = rect1.y - rect2.y;
            if (o < 0 && d < 0) {
                if (Math.abs(Math.abs(o) - rect1.width) > Math.abs(Math.abs(d) - rect1.height)) {
                    type = 1;
                }
                else {
                    type = 4;
                }
            }
            else if (o < 0 && d > 0) {
                if (Math.abs(Math.abs(o) - rect1.width) > Math.abs(Math.abs(d) - rect1.height)) {
                    type = 3;
                }
                else {
                    type = 4;
                }
            }
            else if (o > 0 && d > 0) {
                if (Math.abs(Math.abs(o) - rect1.width) > Math.abs(Math.abs(d) - rect1.height)) {
                    type = 3;
                }
                else {
                    type = 2;
                }
            }
            else if (0 > 0 && d < 0) {
                if (Math.abs(Math.abs(o) - rect1.width) > Math.abs(Math.abs(d) - rect1.height)) {
                    type = 1;
                }
                else {
                    type = 2;
                }
            }
            return type;
        }
        else {
            return rect1.intersects(rect2);
        }
    };
    /**圆形碰撞检测 */
    Jui.prototype.circleHitTest = function (obj1, obj2, r) {
        if (r === void 0) { r = 0; }
        var ht = false;
        var x1 = obj1.x - obj1.anchorOffsetX + obj1.width / 2;
        var y1 = obj1.y - obj1.anchorOffsetY + obj1.height / 2;
        var x2 = obj2.x - obj2.anchorOffsetX + obj2.width / 2;
        var y2 = obj2.y - obj2.anchorOffsetY + obj2.height / 2;
        var dt = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        var ow1 = obj1.width, ow2 = obj2.width;
        if (obj2.rotation != 0 && window["jg_aj"].curproj) {
            ow2 = Math.sin(2 * Math.PI / 360 * (obj2.rotation)) * obj2.height;
            dt = Math.abs(obj2.x + (ow2 * obj2.scaleX) / 2 - x1);
            //console.log(obj2.rotation+"-----"+ow2+"-----"+dt+"---"+(r || ((ow1*obj1.scaleX) / 2 + (ow2*obj2.scaleX) / 2)));
        }
        if (dt < (r || ((ow1 * obj1.scaleX) / 2 + (Math.abs(ow2) * obj2.scaleX) / 2)))
            ht = true;
        return ht;
    };
    /**精准碰撞检测 */
    Jui.prototype.AccurateHitTest = function (obj1, obj2, a) {
        if (a === void 0) { a = 0; }
        if (a) {
        }
        else {
            var x1 = obj1.x - obj1.anchorOffsetX + obj1.width / 2;
            var y1 = obj1.y - obj1.anchorOffsetY + obj1.height / 2;
            return obj2.hitTestPoint(x1, y1, true);
        }
    };
    /**刚体显示图调试 */
    Jui.prototype.setBodySprite = function (world, obj) {
        Main.i["debugDraw"] = new p2DebugDraw(world);
        Main.i["debugSpr"] = new egret.Sprite();
        obj.addChild(Main.i["debugSpr"]);
        Main.i["debugDraw"].setSprite(Main.i["debugSpr"]);
        Main.i["debugDraw"].setLineWidth(0.02);
        Main.i["debugSpr"].x = 0;
        Main.i["debugSpr"].y = obj.stage.stageHeight;
        var scale = 50;
        Main.i["debugSpr"].scaleX = scale;
        Main.i["debugSpr"].scaleY = -scale;
        obj.addEventListener(egret.Event.ENTER_FRAME, function () {
            Main.i["debugDraw"].drawDebug();
        }, this);
    };
    Jui.prototype.zjtfunc = function () {
        for (var i in hc["zjtfun"]) {
            if (i && hc["zjtfun"][i])
                hc["zjtfun"][i]();
        }
    };
    /**游戏全局帧监听 */
    Jui.prototype.setZjt = function () {
        if (!hc["zjt"]) {
            hc["zjt"] = 1;
            Main.i.addEventListener(egret.Event.ENTER_FRAME, Jui.getSingle().zjtfunc, Main.i);
        }
    };
    /**删除游戏全局帧监听 */
    Jui.prototype.removeZjt = function () {
        // if (hc["zjt"] && hc["zjt"] == 1) {
        //     hc["zjt"] = 0;
        //     Jui.getSingle().removeObjEvent(Main.i, egret.Event.ENTER_FRAME, "zjtfunc", Main.i);
        // }
        Jui.getSingle().removeObjEvent(Main.i, egret.Event.ENTER_FRAME, "zjtfunc", Main.i);
        hc["zjtfun"] = {};
    };
    /**删除obj里一个监听
     * jt   事件的类型
     * fun   处理事件的侦听器函数名
     * thisObj  侦听函数绑定的this对象
     * qs       则侦听器只在冒泡阶段处理事件
     */
    Jui.prototype.removeObjEvent = function (obj, jt, fun, thisObj, qs) {
        if (qs === void 0) { qs = false; }
        var event;
        for (var i in obj.$EventDispatcher) {
            event = obj.$EventDispatcher[i];
            if (event && i != '0') {
                for (var ii in event) {
                    if (ii == jt) {
                        var event2 = event[ii];
                        if (event2 != null) {
                            for (var z = event2.length - 1; z >= 0; z--) {
                                var event3 = event2[z];
                                if (event3.target == obj && event3.listener.name == fun) {
                                    event3.target.removeEventListener(event3.type, event3.listener, event3.thisObject, event3.useCapture);
                                    //event2.splice(z, 1);
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    /**清除obj里的所有自身监听及附属于当前obj的监听*/
    Jui.prototype.removeObjEventren = function (obj) {
        var event;
        for (var ii in obj.$EventDispatcher) {
            event = obj.$EventDispatcher[ii];
            if (event && ii != '0') {
                for (var i in event) {
                    var event2 = event[i];
                    if (event2 != null && event2 != []) {
                        for (var z = event2.length - 1; z >= 0; z--) {
                            var event3 = event2[z];
                            event3.target.removeEventListener(event3.type, event3.listener, event3.thisObject);
                        }
                    }
                }
            }
        }
        if (obj.fuEnentDispatcher) {
            var fuevent = obj.fuEnentDispatcher;
            if (fuevent != null) {
                for (var z_1 = 0; z_1 < fuevent.length; z_1++) {
                    var fuevent2 = fuevent[z_1];
                    fuevent2.target.removeEventListener(fuevent2.type, fuevent2.listener, fuevent2.thisObject);
                    fuevent.splice(z_1, 1);
                    z_1--;
                }
            }
        }
    };
    /**设置bese64图片
     * obj      元件
     * url      bese64图片码
     */
    Jui.prototype.setBase64Tu = function (obj, url, ow, ssfun) {
        if (ow === void 0) { ow = 0; }
        if (ssfun === void 0) { ssfun = ""; }
        //var base64 = window["WebViewJavascriptBridge"].imageBase64URL(url);
        obj["imgwc"] = 0;
        var img = new Image();
        img.src = url;
        img.crossOrigin = '*';
        obj.imgurl = url;
        img.onload = function () {
            var texture = new egret.Texture();
            var bitmapdata = new egret.BitmapData(img);
            texture._setBitmapData(bitmapdata);
            obj.texture = texture;
            if (ow) {
                obj.width = ow;
                obj.height = ow * (img.height / img.width);
            }
            obj["imgwc"] = 1;
            //window[ssfun]({obj});
            return texture;
        };
    };
    /**给pobj加一个附属监听
     * pobj :附属于的对象
     * obj ：监听的对象
     * jt ： 监听事件
     * fun ： 监听函数
     * thisObj
     * useCapture ： 是否冒泡
     * priority ： 优先级
    */
    Jui.prototype.addObjEventListener = function (pobj, obj, jt, fun, thisObj, useCapture, priority) {
        if (useCapture === void 0) { useCapture = false; }
        if (priority === void 0) { priority = 0; }
        var jty;
        var funy;
        if (pobj.fuEnentDispatcher) {
            for (var i in pobj.fuEnentDispatcher) {
                if (pobj.fuEnentDispatcher[i].type == jt) {
                    jty = pobj.fuEnentDispatcher[i].type;
                    if (pobj.fuEnentDispatcher[i].listener == fun.name) {
                        pobj.fuEnentDispatcher[i].target.removeEventListener(pobj.fuEnentDispatcher[i].type, pobj.fuEnentDispatcher[i].listener, pobj.fuEnentDispatcher[i].thisObject);
                    }
                }
            }
        }
        if (!pobj.fuEnentDispatcher)
            pobj.fuEnentDispatcher = [];
        pobj.fuEnentDispatcher.push({ target: obj, type: jt, listener: fun, thisObject: thisObj });
        obj.addEventListener(jt, fun, thisObj, useCapture, priority);
    };
    /**
     * 移除容器中的除去名字中包含某些字符外的孩子
     * @param {Object} c - 容器
     * @param {Array} ex - 不会被移除的孩子的关键词
     */
    Jui.prototype.removeChildren = function (obj, ex) {
        if (ex === void 0) { ex = undefined; }
        if (!(obj instanceof egret.DisplayObjectContainer))
            return;
        var exclude = ['zi']; //['ziImg', 'zibg', 'zitext', 'mask'];
        ex && (exclude = ex);
        var _loop_1 = function (t, s) {
            var name_2 = obj.getChildAt(s).name;
            if (!exclude.some(function (e) { return name_2.indexOf(e) != -1; })) {
                Jui.getSingle().removeObj(obj.getChildAt(s));
            }
        };
        for (var t = obj.$children, s = t.length - 1; s >= 0; s--) {
            _loop_1(t, s);
        }
        delete obj["tChildren"];
    };
    /**判断obj及孩子的img是否已加载好 */
    Jui.prototype.imgComplete = function (obj) {
        if (!obj)
            return true;
        var wc = false;
        if (obj.$children && obj.$children.length > 0) {
            for (var i = 0; i < obj.$children.length; i++) {
                wc = this.imgComplete(obj.$children[i]);
                if (!wc)
                    return wc;
            }
        }
        if (obj instanceof egret.Bitmap) {
            if (!obj["imgwc"] || obj["imgwc"] == 1)
                wc = true;
            if (!obj.texture || (obj.texture.bitmapData.source.currentSrc && document.domain.split(".")[1] != obj.texture.bitmapData.source.currentSrc.split("//")[1].split("/")[0].split(".")[1]))
                wc = false;
            if (obj.texture && (obj.texture.bitmapData.source.currentSrc && (obj.texture.bitmapData.source.currentSrc.indexOf("data:image/png;base64") > -1 || obj.texture.bitmapData.source.currentSrc.indexOf("data:image/jpeg;base64") > -1)))
                wc = true;
            if (obj.texture && obj.texture.bitmapData.source.localName == "canvas")
                wc = true;
            if (obj['tg'])
                wc = true;
        }
        else {
            wc = true;
        }
        if (!wc)
            console.log(obj.name);
        return wc;
    };
    /**删除物理世界所有刚体 */
    Jui.prototype.removeWorldBody = function (obj) {
        for (var i = obj.bodies.length - 1; i >= 0; i--) {
            this.removeBody(obj.bodies[i]);
        }
    };
    /**删除刚体对象 */
    Jui.prototype.removeBody = function (obj) {
        if (!obj)
            return;
        delete sj.obj[obj.name];
        delete sj.clas[obj.name];
        Jui.getSingle().removeObj(obj.displays[0]);
        obj.world.removeBody(obj);
        if (obj["objInterval"])
            clearInterval(obj["objInterval"]);
        if (obj["yjsound"] && hc['yinxiaoObj']) {
            hc['yinxiaoObj'].splice(hc['yinxiaoObj'].indexOf(obj), 1);
            //this.stopMusic(obj);
        }
        if (obj["Material"]) {
            for (var i = 0; i < obj["Material"].length; i++) {
                obj.world.removeContactMaterial(obj["Material"][i]);
            }
        }
        obj = null;
    };
    /**需要删除的obj  现在对象监听删除了obj本身的监听，附属于obj的监听 */
    Jui.prototype.removeObj = function (obj) {
        if (!obj)
            return;
        if (sj.clas[obj.name] && obj.name.indexOf("用户") > -1 && obj.parent.name != sj.clas[obj.name].pid)
            return; //元件名字带有用户且元件当前父亲名字不等于clas里pid  一般出现于切换场景
        if (obj.$children && obj.$children.length > 0) {
            for (var i = obj.$children.length - 1; i >= 0; i--) {
                this.removeObj(obj.$children[i]);
            }
        }
        delete sj.obj[obj.name]; //删除sj.obj里索引
        delete sj.clas[obj.name]; //删除sj.clas里数据
        egret.Tween.removeTweens(obj); //停止tween
        Jui.getSingle().removeObjEventren(obj); //删除obj所有事件
        if (obj.parent) {
            window["T"].undodz(obj); //停止obj的dodz
            if (obj["loopdodz"])
                clearTimeout(obj["loopdodz"]);
            if (obj[obj.name + "计时"])
                obj[obj.name + "计时"].stop();
            if (obj.parent.name.indexOf("fuSv") == -1) {
                if (obj["yjsound"] && hc['yinxiaoObj']) {
                    hc['yinxiaoObj'].splice(hc['yinxiaoObj'].indexOf(obj), 1);
                    //this.stopMusic(obj);
                }
                obj.parent.removeChild(obj);
                obj = null;
            }
            else if (obj.parent.name.indexOf("fuSv") > -1) {
                //obj.parent.removeContent(obj);
            }
        }
    };
    /**删除obj对象全部子元件的数据  不删除元件 */
    Jui.prototype.removesjobj = function (obj) {
        if (obj) {
            if (obj.$children && obj.$children.length > 0) {
                for (var i = 0; i < obj.$children.length; i++) {
                    this.removesjobj(obj.$children[i]);
                }
            }
            if (sj.obj[obj.name])
                delete sj.obj[obj.name];
            if (sj.clas[obj.name])
                delete sj.clas[obj.name];
        }
    };
    /**加载音效
     * URL   音效链接
     * obj   当前元件
     * count   播放次数  -1为循环播放
     * beginTime    指定点开始播放
     * bgmusics 是否为背景音乐
     */
    Jui.prototype.LoadMusic = function (url, obj, count, beginTime, resume) {
        if (count === void 0) { count = 1; }
        if (beginTime === void 0) { beginTime = 0; }
        if (resume === void 0) { resume = 0; }
        // if(bgmusics)obj["bgmusics"] = bgmusics;
        // if(curidc=='GAC_区块链'&&window["T"]._my&&window["T"]._my()["音效"]!=undefined&&this.Music===true)this.Music=window["T"]._my()["音效"];
        if (!this.Music)
            return;
        var sound = obj["yjsound"];
        if (!sound) {
            sound = new egret.Sound();
            obj["yjsound"] = sound;
        }
        //     sound["soundurl"] = url;
        //     if (url.indexOf("/") > -1) {
        //         sound.addEventListener(egret.Event.COMPLETE, function (e: egret.Event) {
        //             this[1]["soundwc"] = 1;
        //             Jui.getSingle().PlayMusic(this[0],this[1], count, beginTime);
        //         }, [obj,sound]);
        //        
        //         sound.load(url);
        //     }else{
        //         sound = RES.getRes(url);
        //         Jui.getSingle().PlayMusic(obj,sound, count, beginTime);
        //         sound["soundwc"] = 1;
        //     }
        //     obj["yjsound"] = sound;
        // } else {
        if (sound["soundurl"] != url || sound["soundwc"] != 1) {
            sound["soundurl"] = url;
            if (url.indexOf("/") > -1) {
                sound.addEventListener(egret.Event.COMPLETE, function (e) {
                    this[1]["soundwc"] = 1;
                    Jui.getSingle().PlayMusic(this[0], this[1], count, beginTime, resume);
                }, [obj, sound]);
                sound["soundwc"] = 2;
                sound.load(url);
            }
            else {
                sound = RES.getRes(url);
                Jui.getSingle().PlayMusic(obj, sound, count, beginTime, resume);
                sound["soundwc"] = 1;
            }
        }
        else if (sound["soundwc"] == 1) {
            Jui.getSingle().stopMusic(obj);
            Jui.getSingle().PlayMusic(obj, sound, count, beginTime, resume);
        }
    };
    /**音乐播放
     * sound    音效对象，
     * count    播放次数默认1
     * beginTime    播放起点时间默认0 秒
     * resume 是否从断点继续播放
     */
    Jui.prototype.PlayMusic = function (obj, sound, count, beginTime, resume) {
        if (sound === void 0) { sound = obj['yjsound']; }
        if (count === void 0) { count = 1; }
        if (beginTime === void 0) { beginTime = 0; }
        if (resume === void 0) { resume = 0; }
        // this._channel.volume = 1;
        if (obj["channel"])
            obj["channel"].stop();
        if (resume)
            beginTime = obj["resume"] || beginTime;
        obj["channel"] = sound.play(beginTime, count);
        hc['yinxiaoObj'] = hc['yinxiaoObj'] || [];
        hc['yinxiaoObj'].push(obj);
    };
    /**
     * 播放所有频道音效
     */
    Jui.prototype.PlayMusics = function () {
        for (var i = 0; i < hc['yinxiaoObj'].length; i++) {
            var obj = hc['yinxiaoObj'][i];
            if (obj && obj.parent && obj["yjsound"] && obj["channel"]) {
                obj["channel"].stop();
                obj["channel"] = obj["yjsound"].play(0, 1);
            }
        }
    };
    /**
     * 暂停播放一个频道音效
     */
    Jui.prototype.stopMusic = function (obj) {
        if (obj["channel"]) {
            obj["resume"] = obj["channel"].position;
            obj["channel"].stop();
        }
    };
    /**
     * 暂停所有音效且禁止音效播放
     */
    Jui.prototype.stopMusics = function () {
        this.Music = false;
        if (!hc['yinxiaoObj'])
            return;
        for (var i = 0; i < hc['yinxiaoObj'].length; i++) {
            if (!hc['yinxiaoObj']["bgmusics"]) {
                this.stopMusic(hc['yinxiaoObj'][i]);
            }
        }
    };
    Jui.prototype.diffTime = function (a, b) {
        var c = a - b;
        c = new Date(c);
        var returnStr = [];
        returnStr.push(c.getFullYear() - 1970);
        returnStr.push(c.getMonth());
        returnStr.push(c.getDate() - 1);
        returnStr.push(Math.abs(c.getHours() - 8));
        returnStr.push(c.getMinutes());
        returnStr.push(c.getSeconds());
        return returnStr;
    };
    /**typ==1相关属性设置
     * style.bgimg:图片资源名
     * xuanzhe:作为选择项的时候 被选择状态的资源名
     * nxuanzhe:作为选择项的时候 没有选择状态的资源名
     */
    Jui.prototype.setTD1 = function (obj, aji) {
        var style = aji.style;
        if ((style["png"] && style["png"] != undefined) || (style["bgimg"] && style["bgimg"] != undefined)) {
            this.setImg(obj, style["png"] || style["bgimg"]);
        }
        if (style.fillMode)
            obj.fillMode = style.fillMode;
        if (style.xuanzhe)
            obj["xuanzhe"] = style.xuanzhe;
        if (style.nxuanzhe)
            obj["nxuanzhe"] = style.nxuanzhe;
        if (style.smoothing)
            obj.smoothing = style.smoothing;
        //九宫格
        if (style["9grid"] != undefined) {
            obj.scale9Grid = new egret.Rectangle((style["9grid"]["x"] != undefined ? this.deval("x", obj, style["9grid"]) : 151), (style["9grid"]["y"] != undefined ? this.deval("y", obj, style["9grid"]) : 35), (style["9grid"]["w"] != undefined ? this.deval("w", obj, style["9grid"]) : 228), (style["9grid"]["h"] != undefined ? this.deval("h", obj, style["9grid"]) : 47));
            if (style["9grid"] == false) {
                obj.scale9Grid = null;
            }
        }
    };
    /**
     * typ==4相关属性设置
     */
    Jui.prototype.setTD4 = function (obj, aji) {
        var style = aji.style;
        var ca = (aji.style.caFormat || '{ca}').replace(/\{ca\}/g, aji.ca);
        if (aji.style.textMax && ca.split("").length > aji.style.textMax) {
            ca = ca.substr(0, aji.style.textMax) + "...";
        }
        ca = ca.replace(/{<br>}/g, "\n");
        ca = ca.replace(/\<br\>/g, "\n");
        ca = ca.replace(/\[换行\]/g, "\n");
        if (!style.npca && !style.textFlow)
            obj.text = ca; //aji.ca;
        if (style.textFlow)
            obj.textFlow = style.textFlow; //富文本
        obj.verticalAlign = egret.VerticalAlign.MIDDLE;
        if (style) {
            if (style["input"]) {
                obj.type = egret.TextFieldType.INPUT;
                if (style["CHANGE"] != undefined) {
                    var funjson = {};
                    funjson[style["CHANGE"]] = style;
                    obj.addEventListener(egret.FocusEvent.CHANGE, function () { window["actt"](obj, funjson); }, this); //eval(style["changefun"])
                }
                if (style["FOCUS_IN"] != undefined) {
                    var funjson = {};
                    funjson[style["FOCUS_IN"]] = style;
                    obj.addEventListener(egret.FocusEvent.FOCUS_IN, function () { window["actt"](obj, funjson); }, this);
                }
                if (style["FOCUS_OUT"] != undefined) {
                    var funjson = {};
                    funjson[style["FOCUS_OUT"]] = style;
                    obj.addEventListener(egret.FocusEvent.FOCUS_OUT, function () { window["actt"](obj, funjson); }, this); //eval(style["addedfun"])
                }
            }
            if (!style["w"] && obj.parent)
                obj.width = obj.parent.width;
            if (!style["h"] && obj.parent)
                obj.height = obj.parent.height;
            obj.textColor = style["textColor"] || 0x000000;
            obj.size = style["size"] || 16;
            obj.bold = style["bold"] || false;
            if (style["border"] != undefined)
                obj.border = style["border"];
            if (style["borderColor"] != undefined)
                obj.borderColor = style["borderColor"];
            if (style["background"] != undefined)
                obj.background = style["background"];
            if (style["backgroundColor"] != undefined)
                obj.backgroundColor = style["backgroundColor"];
            if (style["fontFamily"] != undefined)
                obj.fontFamily = style["fontFamily"];
            if (style["multiline"] != undefined)
                obj.multiline = style["multiline"];
            if (style["lineSpacing"] != undefined)
                obj.lineSpacing = style["lineSpacing"];
            obj.italic = style["italic"] || false;
            if (style["stroke"] != undefined) {
                obj.stroke = style["stroke"];
                obj.strokeColor = window["T"].color(style["strokeColor"], "0x");
            }
            if (style["textAlign"]) {
                if (style["textAlign"] == "Center") {
                    obj.textAlign = egret.HorizontalAlign.CENTER;
                }
                else if (style["textAlign"] == "Left") {
                    obj.textAlign = egret.HorizontalAlign.LEFT;
                }
                else if (style["textAlign"] == "Right") {
                    obj.textAlign = egret.HorizontalAlign.RIGHT;
                }
            }
            if (style["verticalAlign"]) {
                if (style["verticalAlign"] == "Center") {
                    obj.verticalAlign = egret.VerticalAlign.MIDDLE;
                }
                else if (style["verticalAlign"] == "Top") {
                    obj.verticalAlign = egret.VerticalAlign.TOP;
                }
                else if (style["verticalAlign"] == "Bottom") {
                    obj.verticalAlign = egret.VerticalAlign.BOTTOM;
                }
            }
            if (style["Textfield"]) {
                for (var i in style["Textfield"]) {
                    obj[i] = style["Textfield"][i];
                }
            }
            if (style['slca']) {
                if (obj.text.length <= style["slca"])
                    return;
                obj["oldtext"] = obj.text;
                obj.text = obj.text.substring(0, style['slca']) + "...";
                obj["slca"] = style['slca'];
                obj.sltype = 1;
                var slcafun = function () {
                    if (this.sltype == 1) {
                        this.sltype = 0;
                        this.text = this.oldtext;
                        this.Height = this.textHeight;
                    }
                    else {
                        this.sltype = 1;
                        this.text = this.text.substring(0, this['slca']) + "...";
                        this.Height = this.textHeight;
                    }
                };
                if (!style["nslcafun"]) {
                    obj.slcafun = slcafun;
                    obj.touchEnabled = true;
                    Jui.getSingle().removeObjEvent(obj, egret.TouchEvent.TOUCH_TAP, slcafun["name"], obj);
                    obj.addEventListener(egret.TouchEvent.TOUCH_TAP, slcafun, obj);
                }
            }
        }
    };
    /**
     * typ == 5相关属性设置
     */
    Jui.prototype.setTD5 = function (obj, aji) {
        var style = aji.style;
        if (style["HSP"])
            obj.horizontalScrollPolicy = style["HSP"]; //水平滚动条显示策略，on/off/auto
        if (style["VSP"])
            obj.verticalScrollPolicy = style["VSP"]; //垂直滚动条显示策略，on/off/auto
        if (style["scon"]) {
            var sv = sj.obj[style["scon"]];
            sj.obj[sj.clas[style["scon"]].pid].removeChild(sv);
            obj.setContent(sv);
        }
    };
    /**
     * typ == 7相关属性设置 目前可有图形 线 矩形
     */
    Jui.prototype.setTD7 = function (obj, aji) {
        if (aji["style"].shapeType == 4) {
            this.setShape(obj, 4, { chu: aji["style"].chu || 3, color: window["T"].color(aji["style"].bgcolor, "0x") || 0x000000, x0: this.deval("x0", obj.parent, aji.style), y0: this.deval("y0", obj.parent, aji.style), x1: this.deval("x1", obj.parent, aji.style), y1: this.deval("y1", obj.parent, aji.style), line: aji.style.line, lineColor: aji.style.lineColor });
        }
        else if (aji["style"].shapeType == 2) {
            this.setShape(obj, 2, { color: aji["style"].bgcolor, alpha: aji["style"].alpha != undefined ? aji["style"].alpha : 1, x: 0, y: 0, w: this.deval("w", obj.parent, aji.style) || obj.width, h: this.deval("h", obj.parent, aji.style) || obj.height, line: aji.style.line, lineColor: aji.style.lineColor });
        }
        else if (aji["style"].shapeType == 1) {
            this.setShape(obj, 1, { color: window["T"].color(aji["style"].bgcolor, "0x") || 0x000000, alpha: aji["style"].alpha != undefined ? aji["style"].alpha : 1, x: this.deval("x", obj.parent, aji.style), y: this.deval("y", obj.parent, aji.style), w: this.deval("w", obj.parent, aji.style), h: this.deval("h", obj.parent, aji.style), line: aji.style.line, lineColor: aji.style.lineColor });
        }
    };
    /**
     * typ == 10相关属性设置
     */
    Jui.prototype.setTD10 = function (obj, aji) {
        var style = aji["style"] || {};
        if (style["font"])
            obj.font = RES.getRes(style["font"]);
        obj.text = aji.ca;
        if (style["Textfield"]) {
            for (var i in style["Textfield"]) {
                obj[i] = style["Textfield"][i];
            }
        }
        if (style["textAlign"]) {
            if (style["textAlign"] == "Center") {
                obj.textAlign = egret.HorizontalAlign.CENTER;
            }
            else if (style["textAlign"] == "Left") {
                obj.textAlign = egret.HorizontalAlign.LEFT;
            }
            else if (style["textAlign"] == "Right") {
                obj.textAlign = egret.HorizontalAlign.RIGHT;
            }
        }
    };
    /**
     * shap画图
     * type:1(圆角矩形),2(矩形),3(圆),4(线)
     */
    Jui.prototype.setShape = function (obj, type, aj) {
        obj.graphics.clear();
        if (type == 1) {
            obj.graphics.beginFill(aj.color, aj.alpha != undefined ? aj.alpha : 1);
            if (aj.line)
                obj.graphics.lineStyle(aj.line, aj.lineColor || 0xff0000);
            obj.graphics.drawRoundRect(aj.x, aj.y, aj.w, aj.h, aj.yuanjiao || 25, aj.yuanjiao || 25);
            obj.graphics.endFill();
        }
        else if (type == 2) {
            obj.graphics.beginFill(aj.color, aj.alpha != undefined ? aj.alpha : 1);
            if (aj.line)
                obj.graphics.lineStyle(aj.line, aj.lineColor || 0xff0000);
            obj.graphics.drawRect(aj.x, aj.y, aj.w, aj.h);
            obj.graphics.endFill();
        }
        else if (type == 3) {
            obj.graphics.beginFill(aj.color, aj.alpha != undefined ? aj.alpha : 1);
            if (aj.line)
                obj.graphics.lineStyle(aj.line, aj.lineColor || 0xff0000);
            obj.graphics.drawCircle(aj.x, aj.y, aj.r || 22);
            obj.graphics.endFill();
        }
        else if (type == 4) {
            obj.graphics.lineStyle(aj.chu, aj.color);
            obj.graphics.moveTo(aj.x0, aj.y0);
            obj.graphics.lineTo(aj.x1, aj.y1);
        }
        else if (type == 5) {
            obj.graphics.beginFill(aj.color, aj.alpha != undefined ? aj.alpha : 1);
            if (aj.line)
                obj.graphics.lineStyle(aj.line, aj.lineColor || 0xff0000);
            obj.graphics.drawEllipse(aj.x, aj.y, aj.w, aj.h);
            obj.graphics.endFill();
        }
        else if (type == 6) {
            obj.graphics.beginFill(aj.color, aj.alpha != undefined ? aj.alpha : 1);
            obj.graphics.drawArc(aj.x, aj.y, aj.r || 22, 0, 360);
            obj.graphics.endFill();
        }
    };
    /**
     * typ == 3、54、55、53、52、6相关属性设置
     */
    Jui.prototype.setTDdis = function (obj, aji) {
        var style = aji.style;
        var pobj = obj.parent;
        if (style.xuanzhe)
            obj["xuanzhe"] = style.xuanzhe;
        if (style.nxuanzhe)
            obj["nxuanzhe"] = style.nxuanzhe;
        //背景颜色
        if (style["bgcolor"]) {
            if (aji.typ > 55) {
                document.getElementById("bodybg").style.background = "#" + (style["bgcolor"].substring(2));
            }
            else {
                var bgshape = obj.getChildByName(obj.name + "zibg");
                if (bgshape == null) {
                    bgshape = new egret.Shape();
                    bgshape.name = obj.name + "zibg";
                    obj.addChildAt(bgshape, 0);
                }
                if (style.shapeType == 1) {
                    this.setShape(bgshape, 1, { color: window["T"].color(style["bgcolor"], "0x"), x: 0, y: 0, w: obj.width, h: obj.height, yuanjiao: style.yuanjiao, alpha: (style.bgalpha || 1), line: style.line, lineColor: style.lineColor });
                }
                else {
                    this.setShape(bgshape, 2, { color: window["T"].color(style["bgcolor"], "0x"), x: 0, y: 0, w: obj.width, h: obj.height, alpha: (style.bgalpha || 1), line: style.line, lineColor: style.lineColor });
                }
            }
        }
        else if (style["bgcolor"] == false) {
            var bgshape = obj.getChildByName(obj.name + "zibg");
            if (bgshape) {
                obj.removeChild(bgshape);
            }
        }
        //背景图
        if (style["bgimg"] === false || style["png"] === false) {
            var bgshape = obj.getChildByName(obj.name + "ziImg");
            if (bgshape) {
                obj.removeChild(bgshape);
            }
        }
        else if (!style["json"] && !style["zjson"] && (style["bgimg"] || style["png"])) {
            if (aji.typ > 55) {
                document.getElementById("bodybg").style.background = "url(" + style["bgimg"] + ")50% 50%/100% 100% no-repeat";
            }
            else {
                var bgImg = obj.getChildByName(obj.name + "ziImg");
                var bgimgurl = "";
                if (style["bgimg"])
                    bgimgurl = style["bgimg"];
                if (style["png"])
                    bgimgurl = style["png"];
                if (!bgImg) {
                    bgImg = new egret.Bitmap();
                    bgImg.name = obj.name + "ziImg";
                    obj.addChild(bgImg);
                }
                if (style.fillMode)
                    bgImg.fillMode = style.fillMode;
                if (style.bgalpha)
                    bgImg.alpha = style.bgalpha;
                if (style["等级png"] && style["等级png"] > 1) {
                    var type = "_png";
                    if (bgimgurl.indexOf("/") > -1)
                        type = ".png";
                    bgimgurl = bgimgurl.split(type)[0].split("_")[0] + "_" + style["等级png"] + type;
                }
                this.setImg(bgImg, bgimgurl);
                //九宫格
                if (style["9grid"] != undefined) {
                    bgImg.scale9Grid = new egret.Rectangle(style["9grid"]["x"] != undefined ? this.deval("x", obj, style["9grid"]) : 151, style["9grid"]["y"] != undefined ? this.deval("y", obj, style["9grid"]) : 35, style["9grid"]["w"] != undefined ? this.deval("w", obj, style["9grid"]) : 228, style["9grid"]["h"] != undefined ? this.deval("h", obj, style["9grid"]) : 47);
                    if (style["9grid"] == false) {
                        bgImg.scale9Grid = null;
                    }
                }
                bgImg.width = obj.width;
                bgImg.height = obj.height;
                if (style["bgimgw"])
                    bgImg.width = this.deval("bgimgw", obj, style);
                if (style["bgimgh"])
                    bgImg.height = this.deval("bgimgh", obj, style);
                bgImg.anchorOffsetX = 0.5 * bgImg.width;
                bgImg.anchorOffsetY = 0.5 * bgImg.height;
                bgImg.x = obj.width / 2;
                bgImg.y = obj.height / 2;
                if (style["imgscaleX"])
                    bgImg.scaleX = style["imgscaleX"];
                if (style["imgscaleY"])
                    bgImg.scaleY = style["imgscaleY"];
                if (style["bgrotation"])
                    bgImg.rotation = style["bgrotation"];
                var conobj = obj.getChildByName(obj.name + "zitext");
                if (!conobj)
                    conobj = obj.getChildByName(obj.name + "caimg");
                if (conobj) {
                    obj.setChildIndex(conobj, obj.numChildren - 1);
                }
            }
        }
        //文字
        if (aji.typ != 54 && aji.typ != 55 && aji.ca != undefined) {
            if (style["hideCa"] == undefined) {
                // if (stra[0].indexOf("text") == 0) {
                var conobj = obj.getChildByName(obj.name + "zitext");
                if (conobj == null) {
                    conobj = new egret.TextField();
                    conobj.name = obj.name + "zitext";
                    obj.addChild(conobj);
                    if (style["input"]) {
                        conobj.type = egret.TextFieldType.INPUT;
                        if (style["input"] > 1) {
                            conobj.multiline = true;
                        }
                        else {
                            conobj.height = obj.height;
                        }
                        if (style["CHANGE"] != undefined) {
                            var funjson = {};
                            funjson[style["CHANGE"]] = style;
                            conobj.addEventListener(egret.FocusEvent.CHANGE, function () { window["actt"](obj, funjson); }, this); //eval(style["changefun"])
                        }
                        if (style["FOCUS_IN"] != undefined) {
                            var funjson = {};
                            funjson[style["FOCUS_IN"]] = style;
                            conobj.addEventListener(egret.FocusEvent.FOCUS_IN, function () { window["actt"](obj, funjson); }, this);
                        }
                        if (style["FOCUS_OUT"] != undefined) {
                            console.log("FOCUS_OUT");
                            var funjson = {};
                            funjson[style["FOCUS_OUT"]] = style;
                            conobj.addEventListener(egret.FocusEvent.FOCUS_OUT, function () { window["actt"](obj, funjson); }, this); //eval(style["addedfun"])
                        }
                    }
                    conobj.text = " ";
                }
                var ca = (aji.style.caFormat || '{ca}').replace(/\{ca\}/g, aji.ca);
                if (aji.style.textMax && ca.split("").length > aji.style.textMax) {
                    ca = ca.substr(0, aji.style.textMax) + "...";
                }
                ca = ca.replace(/{<br>}/g, "\n");
                ca = ca.replace(/\<br\>/g, "\n");
                ca = ca.replace(/\[换行\]/g, "\n");
                obj.text = ca;
                if (!style.npca)
                    conobj.text = ca; //aji.ca;
                if (style["textColor"])
                    conobj.textColor = style["textColor"];
                conobj.size = style["size"] || 16;
                if (style["bold"] != undefined) {
                    conobj.bold = style["bold"];
                }
                else {
                    conobj.bold = false;
                }
                if (style["italic"] != undefined) {
                    conobj.italic = style["italic"];
                }
                else {
                    conobj.italic = false;
                }
                if (style["stroke"] != undefined) {
                    conobj.stroke = style["stroke"];
                    conobj.strokeColor = window["T"].color(style["strokeColor"], "0x");
                }
                if (style["border"] != undefined)
                    conobj.border = style["border"];
                if (style["borderColor"] != undefined)
                    conobj.borderColor = style["borderColor"];
                if (style["fontFamily"])
                    conobj.fontFamily = style["fontFamily"];
                if (style["lineSpacing"])
                    conobj.lineSpacing = style["lineSpacing"];
                if (style["textAlign"]) {
                    if (style["textAlign"] == "Center") {
                        conobj.textAlign = egret.HorizontalAlign.CENTER;
                    }
                    else if (style["textAlign"] == "Left") {
                        conobj.textAlign = egret.HorizontalAlign.LEFT;
                    }
                    else if (style["textAlign"] == "Right") {
                        conobj.textAlign = egret.HorizontalAlign.RIGHT;
                    }
                }
                if (style["verticalAlign"]) {
                    if (style["verticalAlign"] == "Center") {
                        conobj.verticalAlign = egret.VerticalAlign.MIDDLE;
                    }
                    else if (style["verticalAlign"] == "Top") {
                        conobj.verticalAlign = egret.VerticalAlign.TOP;
                    }
                    else if (style["verticalAlign"] == "Bottom") {
                        conobj.verticalAlign = egret.VerticalAlign.BOTTOM;
                    }
                }
                if (style["Textfield"]) {
                    for (var i in style["Textfield"]) {
                        conobj[i] = style["Textfield"][i];
                    }
                }
                if (!style["textgd"] && (!style.textsf || style.textsf == 0))
                    conobj.width = obj.width * 0.9;
                if (!style.h || style.h == "0")
                    obj.height = conobj.height;
                if (style.minheight) {
                    style.minheight = this.deval("h", obj, { "h": style.minheight });
                    if (conobj.height < style.minheight)
                        conobj.height = style.minheight;
                }
                if (style.maxheight) {
                    style.maxheight = this.deval("h", obj, { "h": style.maxheight });
                    if (conobj.height > style.maxheight)
                        conobj.height = style.maxheight;
                }
                if (style.minwidth) {
                    style.minwidth = this.deval("w", obj, { "w": style.minwidth });
                    if (conobj.width < style.minwidth)
                        conobj.width = style.minwidth;
                }
                if (style.maxwidth) {
                    style.maxwidth = this.deval("w", obj, { "w": style.maxwidth });
                    if (conobj.width > style.maxwidth)
                        conobj.width = style.maxwidth;
                }
                if (style['slca']) {
                    if (conobj.text.length <= style["slca"])
                        return;
                    conobj["oldtext"] = conobj.text;
                    conobj.text = conobj.text.substring(0, style['slca']) + "...";
                    conobj["slca"] = style['slca'];
                    conobj.sltype = 1;
                    var slcafun = function () {
                        var img = this.parent.getChildByName(this.parent.name + "ziImg") || { height: 0 };
                        if (this.sltype == 1) {
                            this.sltype = 0;
                            this.text = this.oldtext;
                            this.height = this.textHeight;
                            this.parent.height = Math.max(this.height, img.height);
                        }
                        else {
                            this.sltype = 1;
                            this.text = this.text.substring(0, this['slca']) + "...";
                            this.height = this.textHeight;
                            this.parent.height = Math.max(this.height, img.height);
                        }
                    };
                    if (!style["nslcafun"]) {
                        conobj.slcafun = slcafun.bind(conobj);
                        obj.touchEnabled = true;
                        Jui.getSingle().removeObjEvent(obj, egret.TouchEvent.TOUCH_TAP, slcafun["name"], conobj);
                        obj.addEventListener(egret.TouchEvent.TOUCH_TAP, slcafun, conobj, false, 2);
                    }
                }
                var ziw, zih;
                if (style["textgd"]) {
                    var zitimask = obj.getChildByName(obj.name + "ziztmask");
                    ziw = style["textgd"]["w"] != undefined ? this.deval("w", obj, style["textgd"]) : conobj.width;
                    zih = style["textgd"]["h"] != undefined ? this.deval("h", obj, style["textgd"]) : conobj.height;
                    if (!zitimask) {
                        zitimask = new egret.Shape();
                        this.setShape(zitimask, 2, { color: 0x000000, x: 0, y: 0, w: ziw, h: zih });
                        zitimask.name = obj.name + "ziztmask";
                        obj.addChild(zitimask);
                        conobj.mask = zitimask;
                    }
                    var zix = style["textgd"]["x"] != undefined ? this.deval("x", obj, style["textgd"]) : 0;
                    var ziy = style["textgd"]["y"] != undefined ? this.deval("y", obj, style["textgd"]) : 0;
                    zitimask.x = obj.width * 0.5 - ziw * 0.5 + zix;
                    conobj.x = conobj.x0 = zitimask.x + zitimask.width;
                    conobj.y = conobj.y0 = zitimask.y = obj.height * 0.5 - zih * 0.5 + ziy;
                    egret.Tween.removeTweens(conobj);
                    if (conobj.width > zitimask.width) {
                        egret.Tween.get(conobj, { loop: true }).to({ x: conobj.x - (conobj.width + zitimask.width) }, conobj.width / (style["textgd"]['speed'] || 80) * 2000);
                    }
                }
                else {
                    if (!style.minwidth && !style.maxwidth && (!style.textsf || style.textsf == 0))
                        conobj.width = obj.width * 0.8;
                    conobj.x = conobj.x0 = obj.width * 0.5 - conobj.width * 0.5;
                    conobj.y = conobj.y0 = obj.height * 0.5 - conobj.height * 0.5;
                }
                style.textx != undefined && (conobj.x = conobj.x0 + this.deval('textx', obj, style, { obj: conobj }));
                style.texty != undefined && (conobj.y = conobj.y0 + this.deval('texty', obj, style, { obj: conobj }));
                // style.textx != undefined && (conobj.x += style.textx * 1);
                // style.texty != undefined && (conobj.y += style.texty * 1); 
                if (style.textsf && style.textsf.w != 0) {
                    var maxw = this.deval("w", obj, style.textsf) || 200;
                    maxw = conobj.width + 20 > maxw ? maxw : conobj.width + 20;
                    conobj.width = maxw - 20;
                    var minh = this.deval("h", obj, style.textsf) || 54;
                    minh = conobj.height + 20 < minh ? minh : conobj.height + 20;
                    conobj.x = (maxw - conobj.width) / 2;
                    conobj.y = (minh - conobj.height) / 2;
                    var bgshape = obj.getChildByName(obj.name + "zibg");
                    this.setShape(bgshape, 1, { color: window["T"].color(style["bgcolor"], "0x"), x: 0, y: 0, w: maxw, h: minh, yuanjiao: style.yuanjiao, alpha: (style.bgalpha || 1) });
                }
            }
            else if (style["expca"]) {
                var eobj = obj.getChildByName(obj.name + "zitext");
                if (!eobj) {
                    eobj = new Expression(style["exparr"]);
                    obj.addChild(eobj);
                    eobj.name = obj.name + "zitext";
                }
                var conobj_1 = eobj.getTf();
                this.setTD4(conobj_1, aji);
                if (!style["textgd"] && (!style.textsf || style.textsf == 0))
                    eobj.setWidth(obj.width * 0.9);
                if (!style.h || style.h == "0")
                    obj.height = eobj.height;
                if (!style.minwidth && !style.maxwidth && (!style.textsf || style.textsf == 0))
                    eobj.setWidth(obj.width * 0.9);
                eobj.x = eobj["x0"] = obj.width * 0.5 - eobj.width * 0.5;
                eobj.y = eobj["y0"] = obj.height * 0.5 - eobj.height * 0.5;
                if (style.textsf && style.textsf.w != 0) {
                    var maxw = this.deval("w", obj, style.textsf) || 200;
                    maxw = conobj_1.width + 20 > maxw ? maxw : conobj_1.width + 20;
                    eobj.setWidth(maxw - 20);
                    //conobj.width = maxw - 20;
                    var minh = this.deval("h", obj, style.textsf) || 54;
                    minh = conobj_1.height + 20 < minh ? minh : conobj_1.height + 20;
                    eobj.x = (maxw - conobj_1.width) / 2;
                    eobj.y = (minh - conobj_1.height) / 2;
                    var bgshape = obj.getChildByName(obj.name + "zibg");
                    this.setShape(bgshape, 1, { color: window["T"].color(style["bgcolor"], "0x"), x: 0, y: 0, w: maxw, h: minh, yuanjiao: style.yuanjiao, alpha: (style.bgalpha || 1) });
                }
                eobj.setText(conobj_1.text);
            }
            else {
                var conobj = obj.getChildByName(obj.name + "zitext");
                if (conobj)
                    conobj.parent.removeChild(conobj);
                if (style["caimg"]) {
                    var caimg = obj.getChildByName(obj.name + "caimg");
                    if (!caimg) {
                        caimg = new egret.Bitmap();
                        caimg.name = obj.name + "caimg";
                        obj.addChild(caimg);
                    }
                    Jui.getSingle().setImg(caimg, style.caimg, 0.5);
                    caimg.x = obj.width / 2;
                    caimg.y = obj.height / 2;
                }
            }
        }
        else {
            var conobj = obj.getChildByName(obj.name + "zitext");
            if (conobj) {
                conobj.text = "";
            }
        }
        //帧动画
        if (style["json"] || style["zjson"]) {
            var zobj = obj.getChildByName(obj.name + "zimc");
            // if (obj.name.indexOf("捕鱼测试") > -1) {
            //     if (obj.name.indexOf("草鱼") > -1) {
            //         style.mcax = 0.46;
            //         style.mcay = 0.55;
            //     } else if (obj.name.indexOf("鲨鱼") > -1) {
            //         style.mcax = 2.1;
            //         style.mcay = 2.5;
            //     } else if (obj.name.indexOf("灯笼鱼") > -1) {
            //         style.mcax = 0.54;
            //         style.mcay = 0.76;
            //     } else {
            //         style.mcax = 0.85;
            //         style.mcay = 1.25;
            //     }
            //     style.mcx = 0.5;
            //     style.mcy = 0.5;
            // }
            if (!zobj) {
                zobj = new egret.MovieClip();
                zobj.name = obj.name + "zimc";
                obj.addChild(zobj);
                if (style.mcx != undefined)
                    zobj.x = obj.width * style.mcx;
                if (style.mcy != undefined)
                    zobj.y = obj.height * style.mcy;
            }
            var w = this.deval("w", pobj, aji.style, { obj: obj });
            var h = this.deval("h", pobj, aji.style, { obj: obj });
            var scaleX = null, scaleY = null;
            if (style.scaleX != undefined)
                scaleX = style.scaleX;
            if (style.scaleY != undefined)
                scaleY = style.scaleY;
            Jui.getSingle().setMove(zobj, style["json"] || style["zjson"], style["png"] || style["zpng"], style["count"], w, h, style["dz"], style.mcscx || null, style.mcscy || null, style.mcax || null, style.mcay || null); //设置动画资源
        }
    };
    /**
     * 遮罩
     * @param obj 需要加遮罩的对象
     * @param maskdata 遮罩参数
     */
    Jui.prototype.setMask = function (obj, maskdata) {
        if (maskdata.mobj)
            obj = obj.getChildByName(obj.name + "ziImg");
        if (!obj || !obj.parent)
            return;
        var mask;
        if (maskdata.maskname) {
            mask = window["T"].findObj(maskdata.maskname);
        }
        else {
            mask = obj.parent.getChildByName(obj.name + "zimask");
            if (mask == null) {
                mask = new egret.Shape();
                mask.name = obj.name + "zimask";
                obj.parent.addChild(mask);
                if (maskdata["type"] == 3) {
                    this.setShape(mask, 2, { color: 0x00ff00, x: this.deval("x", obj.parent, maskdata), y: this.deval("y", obj.parent, maskdata), w: this.deval("w", obj.parent, maskdata), h: this.deval("h", obj.parent, maskdata) });
                }
                else if (maskdata["type"] == 2) {
                    this.setShape(mask, 2, { color: 0x00ff00, x: obj.x - obj.anchorOffsetX, y: obj.y - obj.anchorOffsetY, w: obj.width, h: obj.height });
                }
                else if (maskdata["type"] == 1) {
                    this.setShape(mask, 1, { color: 0x00ff00, x: obj.x - obj.anchorOffsetX, y: obj.y - obj.anchorOffsetY, w: obj.width, h: obj.height, yuanjiao: maskdata.yuanjiao });
                }
                else if (maskdata["type"] == "") {
                    mask.graphics.clear();
                }
                else if (maskdata["type"] == 4) {
                    this.setShape(mask, 3, { color: 0x00ff00, x: obj.width / 2 - 1.5, y: obj.height / 2 - 1.5, r: (maskdata.r || obj.width / 2) });
                    mask.anchorOffsetX = mask.width / 2;
                    mask.anchorOffsetY = mask.height / 2;
                    mask.x = obj.x - obj.anchorOffsetX + (obj.width + 3) / 2;
                    mask.y = obj.y - obj.anchorOffsetY + (obj.height + 3) / 2;
                }
                else if (maskdata["type"] == 5) {
                    this.setShape(mask, 5, { color: 0x00ff00, x: 0, y: 0, w: obj.width, h: obj.height });
                    mask.anchorOffsetX = mask.width / 2;
                    mask.anchorOffsetY = mask.height / 2;
                    mask.x = obj.x - obj.anchorOffsetX + obj.width / 2;
                    mask.y = obj.y - obj.anchorOffsetY + obj.height / 2;
                    if (maskdata["rotation"])
                        mask.rotation = maskdata["rotation"];
                }
            }
        }
        obj.mask = mask;
    };
    /**
     * 脚标  必须为容器才能使用
     * @param obj 需要加脚标的对象
     * @param menb 脚标参数
     */
    Jui.prototype.setFoot = function (obj, foot) {
        if (obj && !obj.addChild)
            return;
        var footicon;
        if (foot["img"]) {
            footicon = obj.getChildByName(obj.name + "zifoot");
            if (!footicon) {
                footicon = new egret.Bitmap();
                footicon.name = obj.name + "zifoot";
                obj.addChild(footicon);
            }
            this.setImg(footicon, foot["img"], 0.5);
            footicon.x = this.deval("x", obj, foot);
            footicon.y = this.deval("y", obj, foot);
            if (foot["w"])
                footicon.width = this.deval("w", obj, foot);
            if (foot["h"])
                footicon.height = this.deval("h", obj, foot);
        }
        else if (foot["text"]) {
            var footText;
            footText = obj.getChildByName(obj.name + "zifoot");
            if (!footText) {
                footText = new egret.TextField();
                footText.name = obj.name + "zifoot";
                obj.addChild(footText);
            }
            footText.text = foot["text"];
            if (foot["Textfield"]) {
                for (var i in foot["Textfield"]) {
                    footText[i] = foot["Textfield"][i];
                }
            }
            footText.x = this.deval("x", obj, foot);
            footText.y = this.deval("y", obj, foot);
            if (foot["w"])
                footText.width = this.deval("w", obj, foot);
            if (foot["h"])
                footText.height = this.deval("h", obj, foot);
            footText.anchorOffsetX = footText.width / 2;
            footText.anchorOffsetY = footText.height / 2;
        }
    };
    /**文字脚标 */
    Jui.prototype.footText = function (obj, foot, name) {
        if (name === void 0) { name = "zixx"; }
        if (obj && !obj.addChild)
            return;
        var footText;
        if (foot["text"]) {
            footText = obj.getChildByName(obj.name + name);
            if (!footText) {
                footText = new egret.TextField();
                footText.name = obj.name + name;
                obj.addChild(footText);
            }
            footText.text = foot["text"];
            if (foot["Textfield"]) {
                for (var i in foot["Textfield"]) {
                    footText[i] = foot["Textfield"][i];
                }
            }
            footText.x = this.deval("x", obj, foot);
            footText.y = this.deval("y", obj, foot);
            if (foot["w"])
                footText.width = this.deval("w", obj, foot);
            if (foot["h"])
                footText.height = this.deval("h", obj, foot);
            footText.anchorOffsetX = footText.width / 2;
            footText.anchorOffsetY = footText.height / 2;
        }
    };
    /**
     * 加载资源
     * resJson：需要加载资源json
     * Group：需要加载的资源组
     */
    Jui.prototype.loading = function () {
    };
    Jui.prototype.isDate = function (dateString) {
        if (dateString.trim() == "")
            return false;
        var r = dateString.match(/^(\d{1,4})(.|\/)(\d{1,2})\2(\d{1,2})$/);
        if (r == null) {
            //alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd\n\r例  如：2008-08-08\n\r");
            return false;
        }
        var d = new Date(r[1], r[3] - 1, r[4]);
        var num = (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]);
        if (num == 0) {
            //alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd\n\r例  如：2008-08-08\n\r");
        }
        return (num != 0);
    };
    /**
     * 蒙层
     * @param obj 需要加蒙层的对象
     * @param menb 蒙层参数
     */
    Jui.prototype.setMenb = function (obj, menb) {
        if (obj && !obj.addChild)
            return;
        var menbobj = obj.getChildByName(obj.name + "zimenb"); //获取该该对象已存在的蒙层
        if (menb["remove"] == 1) {
            if (menbobj) {
                Jui.getSingle().removeObj(menbobj);
            }
        }
        else {
            if (!menbobj) {
                menbobj = new egret.Shape();
                menbobj.name = obj.name + "zimenb";
                this.setShape(menbobj, 2, { color: (menb.color || 0x000000), alpha: menb["alpha"] != undefined ? menb["alpha"] : 0.7, x: 0, y: 0, w: Config.getSingle().STAGE_WIDTH * 3, h: Config.getSingle().STAGE_HEIGHT * 2 });
                menbobj.anchorOffsetX = menbobj.width / 2;
                menbobj.anchorOffsetY = menbobj.height / 2;
                menbobj.touchEnabled = true;
                menbobj.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                    var point = Jui.getSingle().getstagePoint(0, 0, this);
                    if (menb["ssfun"] != undefined) {
                        if (!(e.stageX > point.x && e.stageX < point.x + this.width && e.stageY > point.y && e.stageY < point.y + this.height)) {
                            window[menb["ssfun"]]({ obj: obj });
                            //eval(menb["ssfun"]);
                        }
                    }
                    else {
                        if (!(e.stageX > point.x && e.stageX < point.x + this.width && e.stageY > point.y && e.stageY < point.y + this.height)) {
                            e.stopImmediatePropagation(); //点击蒙板不执行后续事件
                            Jui.getSingle().removeObj(this);
                        }
                    }
                }, obj, false);
            }
            obj.addChildAt(menbobj, 0);
        }
    };
    /**
     * title
     * @param obj 需要加title的对象
     * @param ca title的文字
     */
    Jui.prototype.setTitle = function (obj, title) {
        if (!obj.parent)
            return;
        var tobj = obj.parent;
        if (title.adobj)
            tobj = obj;
        var x = title.x ? this.deval("x", obj, title) : (obj.x - obj.anchorOffsetX);
        var y = title.y ? this.deval("y", obj, title) : (obj.y - obj.anchorOffsetY);
        var aj = { x: x, y: y, Textfield: { size: (title.size || 18), textColor: (title.textColor || 0xffffff) }, anchorOffsetX: 0, anchorOffsetY: 0, _id: 'zititle', typ: 4, ca: title.ca, obj: obj, pobj: tobj };
        var zitext = JuiData.getzi([aj])[0];
        if (!zitext.parent)
            tobj.addChild(zitext);
        var titlefun = function (e) {
            egret.Tween.get(this).to({ y: this.y - this.height }, 200);
            Jui.getSingle().removeObjEvent(e.currentTarget, egret.TouchEvent.TOUCH_TAP, titlefun["name"], this);
        };
        if (!title.static)
            obj.addEventListener(egret.TouchEvent.TOUCH_TAP, titlefun, zitext);
    };
    /**
     * 边框
     */
    Jui.prototype.setBorder = function (obj, border) {
        var zobj = obj.getChildByName(obj.name + "ziborder");
        if (!zobj) {
            zobj = new egret.Shape();
        }
    };
    /**
     * 滤镜
     * @param obj 需要加滤镜的对象
     * @param filters 滤镜参数
     */
    Jui.prototype.setFilters = function (obj, filters) {
        var filtersobj = obj;
        // if (obj instanceof egret.DisplayObjectContainer) {
        //     filtersobj = obj.getChildByName(obj.name + "ziImg");
        //     if (!filtersobj) {
        //         filtersobj = obj.getChildByName(obj.name + "zibg");
        //     }
        // }
        if (filters) {
            var distance = void 0, angle = void 0, fcolor = void 0, alpha = void 0, blurX = void 0, blurY = void 0, strength = void 0, quality = void 0, inner = void 0, knockout = void 0;
            filters["distance"] != undefined ? distance = filters["distance"] : distance = 4; /// 阴影的偏移距离，以像素为单位
            filters["angle"] != undefined ? angle = filters["angle"] : angle = 45; /// 阴影的角度，0 到 360 度
            filters["fcolor"] != undefined ? fcolor = filters["fcolor"] : fcolor = 0x000000; /// 阴影的颜色，不包含透明度
            filters["alpha"] != undefined ? alpha = filters["alpha"] : alpha = 0.7; /// 光晕的颜色透明度，是对 color 参数的透明度设定
            filters["blurX"] != undefined ? blurX = filters["blurX"] : blurX = 16; /// 水平模糊量。有效值为 0 到 255.0（浮点）
            filters["blurY"] != undefined ? blurY = filters["blurY"] : blurY = 16; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
            filters["strength"] != undefined ? strength = filters["strength"] : strength = 0.65; /// 压印的强度，值越大，压印的颜色越深，而且阴影与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
            filters["quality"] != undefined ? quality = filters["quality"] : quality = 1 /* LOW */; /// 应用滤镜的次数，暂无实现
            filters["inner"] != undefined ? inner = filters["inner"] : inner = false; /// 指定发光是否为内侧发光
            filters["knockout"] != undefined ? knockout = filters["knockout"] : knockout = false; /// 指定对象是否具有挖空效果
            if (filters["type"] == 1) {
                var colorMatrix = [
                    0.3, 0.6, 0, 0, 0,
                    0.3, 0.6, 0, 0, 0,
                    0.3, 0.6, 0, 0, 0,
                    0, 0, 0, 1, 0
                ];
                var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
                filtersobj.filters = [colorFlilter];
            }
            else if (filters["type"] == 2) {
                quality = 3 /* HIGH */;
                var glowFilter = new egret.GlowFilter(fcolor, alpha, blurX, blurY, strength, quality, inner, knockout);
                filtersobj.filters = [glowFilter];
            }
            else if (filters["type"] == 3) {
                var blurFliter = new egret.BlurFilter(filters["blurX"] || 1, filters["blurY"] || 1);
                filtersobj.filters = [blurFliter];
            }
            else if (filters["type"] == 4) {
                var dropShadowFilter = new egret.DropShadowFilter(distance, angle, fcolor, alpha, blurX, blurY, strength, quality, inner, knockout);
                filtersobj.filters = [dropShadowFilter];
            }
        }
        else {
            filtersobj.filters = null;
        }
    };
    Jui.prototype.randomsort = function (arr) {
        return arr.sort(this.randomsort2);
    };
    Jui.prototype.randomsort2 = function (a, b) {
        return Math.random() > .5 ? -1 : 1;
        //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
    };
    Jui.prototype.sqwp = function (e) {
        var zi = { typ: 1, png: e.png, x: e.obj.x, y: e.obj.y + e.obj.height / 2, _id: "物品", obj: e.tobj, pobj: e.pobj };
        var wuti = JuiData.getzi([zi])[0];
        e.pobj.addChild(wuti);
        egret.Tween.get(wuti).to({ y: wuti.y - 100 }, 200).to({ y: wuti.y }, 200).wait(400).to({ x: e.tobj.x, y: e.tobj.y + e.tobj.height / 2 }, 700).to({ alpha: 0 }, 300).call(function (obj) { Jui.getSingle().removeObj(obj); }, this, [wuti]);
    };
    /**设置hp */
    Jui.prototype.setHp = function (obj, count) {
        var hp = JuiData.getzi([{ typ: "血条", _id: "hp", alpha: obj.hpalpha != undefined ? obj.hpalpha : 1, hp: count, hpbar: obj["hpbar"], hpbg: obj["hpbg"], hptype: (obj["hptype"] || 0), mqhp: (obj["mqhp"] || count), x: 0 + obj.width / 2, y: obj["hpy"] || -10, w: (obj["hpw"] || obj.width - obj.width / 5), h: (obj["hph"] || 3), obj: obj, pobj: obj }])[0];
        //var hp = JuiData.getzi([{ typ: "血条", _id: "hp", hp: count, w: obj.getChildByName(obj.name + "hp0").width, obj: obj, pobj: obj }])[0]
        if (!hp.parent)
            obj.addChild(hp);
        obj["hpBar"] = hp;
        obj.hp = count;
    };
    /**将对象存与二维数组 */
    Jui.prototype.setewObj = function (obj, name, index, addx, addy) {
        if (index === void 0) { index = 30; }
        if (addx === void 0) { addx = 0; }
        if (addy === void 0) { addy = 0; }
        if (!hc[name]) {
            hc[name] = [];
            for (var i = 0; i < index; i++) {
                hc[name][i] = [];
            }
        }
        var x = Math.floor((obj.x + addx) / obj.width), y = Math.floor((obj.y + addy) / obj.height);
        if (x >= 0 && y >= 0)
            hc[name][x][y] = obj;
    };
    /**获取a*路径
     * point1  行走对象在数组中的初始下标（注意：这里不是对象xy）
     * point2  行走对象在数组中的终点下标
     * cellSize 方块大小
     * grid     a*数组
     */
    Jui.prototype.getPath = function (point1, point2, cellSize, grid) {
        grid.setEndNode(point1.x, point1.y);
        grid.setStartNode(point2.x, point2.y);
        var path = 0;
        var startTime = egret.getTimer();
        if (!hc["aStar"]) {
            hc["aStar"] = new astar.AStar();
        }
        if (hc["aStar"].findPath(grid)) {
            path = hc["aStar"].path;
        }
        console.log("耗时:", egret.getTimer() - startTime);
        return path;
    };
    return Jui;
}());
__reflect(Jui.prototype, "Jui");
window['Jui'] = Jui;
//十六进制颜色值的正则表达式  
var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
//////////////////////////////////////////////////////////////////////////////////**辅助类*/
/**
 * 根据系统时间的计时器
 * @author chenkai
 * 2016/12/30
 * Example:
 * var dateTimer:DateTimer = new DateTimer(1000);
 * dateTimer.addEventListeners(egret.TimerEvent.TIMER, this.onTimerHandler, this);
 * dateTimer.addEventListeners(egret.TimerEvent.TIMER_COMPLETE, this.onTimerComplete, this);
 * dateTimer.reset();
 * dateTimer.start();
 */
var DateTimer = (function (_super) {
    __extends(DateTimer, _super);
    function DateTimer(delay, repeatCount) {
        if (repeatCount === void 0) { repeatCount = 0; }
        var _this = _super.call(this) || this;
        _this.delay = delay;
        _this.repeatCount = repeatCount;
        _this.currentCount = 0;
        return _this;
    }
    /**开始计时 */
    DateTimer.prototype.start = function () {
        this.previous = egret.getTimer();
        this.accTime = 0;
        egret.startTick(this.update, this);
    };
    /**重置计时 */
    DateTimer.prototype.reset = function () {
        this.previous = egret.getTimer();
        this.accTime = 0;
        this.currentCount = 0;
    };
    /**停止计时 */
    DateTimer.prototype.stop = function () {
        egret.stopTick(this.update, this);
    };
    /**更新时间 */
    DateTimer.prototype.update = function () {
        this.curTime = egret.getTimer();
        this.passTime = this.curTime - this.previous;
        this.previous = this.curTime;
        this.accTime += this.passTime;
        while (this.accTime >= this.delay) {
            this.accTime -= this.delay;
            this.currentCount++;
            if (this.repeatCount > 0 && (this.currentCount == this.repeatCount)) {
                this.dispatchEvent(new egret.TimerEvent(egret.TimerEvent.TIMER_COMPLETE));
                this.stop();
            }
            this.dispatchEvent(new egret.TimerEvent(egret.TimerEvent.TIMER));
        }
        return false;
    };
    return DateTimer;
}(egret.EventDispatcher));
__reflect(DateTimer.prototype, "DateTimer");
window['DateTimer'] = DateTimer;
/**画板 */
var Scratch = (function (_super) {
    __extends(Scratch, _super);
    function Scratch() {
        var _this = _super.call(this) || this;
        _this.biw = 5;
        _this.color = 0x000000;
        _this.mpp = false;
        _this._jxarr = [];
        _this.init();
        return _this;
    }
    Scratch.prototype.init = function () {
        this.bg = new egret.Shape();
        this.addChild(this.bg);
        this.container = new egret.Sprite();
        this.addChild(this.container);
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchEventHandler, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchEventHandler, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEventHandler, this);
        this.addEventListener(egret.Event.CHANGE, this.setbgwh, this);
    };
    /**鼠标监听，执行画图*/
    Scratch.prototype.onTouchEventHandler = function (e) {
        switch (e.type) {
            case "touchBegin":
                this.container.graphics.lineStyle(this.biw, this.color, 1, false);
                this.container.graphics.moveTo(e.localX, e.localY);
                this._arr = [];
                if (this.mpp) {
                    var point = { "x": e.localX, "y": e.localY };
                    this._arr.push(point);
                }
                break;
            case "touchMove":
                this.container.graphics.lineTo(e.localX, e.localY);
                if (this.mpp) {
                    var point = { "x": e.localX, "y": e.localY };
                    this._arr.push(point);
                }
                break;
            case "touchEnd":
                if (this.mpp) {
                    var acts = [{ "动作": "画板数据", "biw": this.biw, "color": this.color, "arr": this._arr, "idus": window["jg_aj"].idus }];
                    window["T"].dodz(this, acts, { "broadcast": true });
                    window["T"].undodz(this);
                }
                break;
        }
    };
    Object.defineProperty(Scratch, "biw", {
        set: function (biw) {
            this.biw = biw;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scratch, "color", {
        set: function (color) {
            this.color = color;
        },
        enumerable: true,
        configurable: true
    });
    /**数据画画
     * data.biw 画笔大小
     * data.color 画笔颜色
     * data.arr  落点组
     */
    Scratch.prototype.setData = function (data) {
        if (data.arr.length <= 0)
            return;
        this._jxarr.push(data);
        if (this._jxarr.length == 1) {
            this.Drawing(data);
        }
    };
    Scratch.prototype.Drawing = function (data) {
        var time = new egret.Timer(data.time || 20, data.arr.length);
        this.container2.graphics.lineStyle(data.biw, data.color, 1, false);
        this.container2.graphics.moveTo(data.arr[0].x, data.arr[0].y);
        var num = 0;
        var hbgjfun = function () {
            num++;
            if (num >= data.arr.length)
                return;
            this.container2.graphics.lineTo(data.arr[num].x, data.arr[num].y);
        };
        var hbgjendfun = function () {
            time.stop();
            time.removeEventListener(egret.TimerEvent.TIMER, hbgjfun, this);
            time.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, hbgjendfun, this);
            this._jxarr.shift();
            if (this._jxarr.length > 0) {
                this.Drawing(this._jxarr[0]);
            }
        };
        time.addEventListener(egret.TimerEvent.TIMER, hbgjfun, this);
        time.addEventListener(egret.TimerEvent.TIMER_COMPLETE, hbgjendfun, this);
        time.start();
    };
    Scratch.prototype.setmpp = function () {
        this.mpp = true;
        this.container2 = new egret.Sprite();
        this.addChild(this.container2);
    };
    Scratch.prototype.setbgwh = function (w, h) {
        // this.bg.width = w;
        // this.bg.height = h;
        this.container.graphics.clear();
        this.bg.graphics.clear();
        this.bg.graphics.beginFill(0xffffff, 0);
        this.bg.graphics.drawRect(0, 0, w, h);
        this.bg.graphics.endFill();
    };
    Scratch.prototype.removeBg = function () {
        this.removeChild(this.bg);
    };
    Scratch.prototype.seturlkey = function (uri, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
            return uri + separator + key + "=" + value;
        }
    };
    return Scratch;
}(egret.DisplayObjectContainer));
__reflect(Scratch.prototype, "Scratch");
/**摇杆类 */
var VirtualJoystick = (function (_super) {
    __extends(VirtualJoystick, _super);
    function VirtualJoystick(gameStage, cr, br) {
        if (cr === void 0) { cr = 270; }
        if (br === void 0) { br = 100; }
        var _this = _super.call(this) || this;
        _this.circleRadius = 0; //圆环半径
        _this.ballRadius = 0; //小球半径
        _this.centerX = 0; //中心点坐标
        _this.centerY = 0;
        //触摸移动，设置小球的位置
        _this.p1 = new egret.Point();
        _this.p2 = new egret.Point();
        _this.gameStage = gameStage;
        _this.circle = new egret.Bitmap();
        // this.circle.texture = RES.getRes(circleurl);
        // this.setcircle(circleurl);
        _this.addChild(_this.circle);
        _this.circle.width = cr;
        _this.circle.height = cr;
        _this.ball = new egret.Bitmap();
        // this.ball.texture = RES.getRes(ballurl);
        // this.setball(ballurl);
        _this.addChild(_this.ball);
        _this.ball.width = br;
        _this.ball.height = br;
        _this.childrenCreated();
        return _this;
    }
    VirtualJoystick.prototype.childrenCreated = function () {
        //获取圆环和小球半径
        this.circleRadius = this.circle.height / 2;
        this.ballRadius = this.ball.height / 2;
        //获取中心点
        this.centerX = this.circleRadius;
        this.centerY = this.circleRadius;
        //设置锚点
        this.anchorOffsetX = this.circleRadius;
        this.anchorOffsetY = this.circleRadius;
        //设置小球初始位置
        this.ball.anchorOffsetX = this.ball.width / 2;
        this.ball.anchorOffsetY = this.ball.height / 2;
        this.ball.x = this.centerX;
        this.ball.y = this.centerY;
    };
    //启动虚拟摇杆 (监听事件根据实际情况设置，不然点一下UI上的其他按钮，也会触发虚拟摇杆事件。这里只是做demo，就没那么讲究了 - -!)
    VirtualJoystick.prototype.start = function () {
        this.gameStage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this, true, 99);
        this.gameStage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this, true, 99);
        this.gameStage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this, true, 99);
    };
    //停止虚拟摇杆
    VirtualJoystick.prototype.stop = function () {
        this.gameStage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this, true, 99);
        this.gameStage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this, true, 99);
        this.gameStage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this, true, 99);
    };
    //触摸开始，显示虚拟摇杆
    VirtualJoystick.prototype.onTouchBegin = function (e) {
        if (this.parent) {
            return;
        }
        this.touchID = e.target.name;
        this.x = e.localX;
        this.y = e.localY;
        this.ball.x = this.centerX;
        this.ball.y = this.centerY;
        this.gameStage.addChild(this);
        this.dispatchEvent(new egret.Event("vj_start"));
    };
    //触摸结束，隐藏虚拟摇杆
    VirtualJoystick.prototype.onTouchEnd = function (e) {
        if (this.touchID != e.target.name) {
            return;
        }
        this.hide();
        this.dispatchEvent(new egret.Event("vj_end"));
    };
    VirtualJoystick.prototype.onTouchMove = function (e) {
        if (this.touchID != e.target.name) {
            return;
        }
        //获取手指和虚拟摇杆的距离
        this.p1.x = this.x;
        this.p1.y = this.y;
        this.p2.x = e.localX;
        this.p2.y = e.localY;
        var dist = egret.Point.distance(this.p1, this.p2);
        var angle = Math.atan2(e.localY - this.y, e.localX - this.x);
        //手指距离在圆环范围内
        if (dist <= (this.circleRadius - this.ballRadius)) {
            this.ball.x = this.centerX + e.localX - this.x;
            this.ball.y = this.centerY + e.localY - this.y;
            //手指距离在圆环范围外
        }
        else {
            this.ball.x = Math.cos(angle) * (this.circleRadius - this.ballRadius) + this.centerX;
            this.ball.y = Math.sin(angle) * (this.circleRadius - this.ballRadius) + this.centerY;
        }
        //派发事件
        this.dispatchEventWith("vj_move", false, angle);
    };
    VirtualJoystick.prototype.hide = function () {
        this.parent && this.parent.removeChild(this);
    };
    /**设置圆环图片 */
    VirtualJoystick.prototype.setcircle = function (url) {
        Jui.getSingle().setImg(this.circle, url);
    };
    /**设置小球图片 */
    VirtualJoystick.prototype.setball = function (url) {
        Jui.getSingle().setImg(this.ball, url);
    };
    return VirtualJoystick;
}(egret.DisplayObjectContainer));
__reflect(VirtualJoystick.prototype, "VirtualJoystick");
/**
 *
 * @author
 *
 */
var Config = (function () {
    function Config() {
        this.STAGE_WIDTH = egret.MainContext.instance.stage.stageWidth;
        this.STAGE_HEIGHT = egret.MainContext.instance.stage.stageHeight;
    }
    Config.getSingle = function () {
        return this._single == null ? this._single = new Config() : this._single;
    };
    /**删除指定场景 */
    Config.prototype.removeContainer = function (child) {
        if (child.parent)
            this._rootStage.removeChild(child);
    };
    /**添加一个场景到舞台显示 */
    Config.prototype.addToStage = function (child) {
        this._rootStage.addChild(child);
    };
    Object.defineProperty(Config.prototype, "rootStage", {
        //=====get and set========
        get: function () {
            return this._rootStage;
        },
        //设置舞台
        set: function (stage) {
            this._rootStage = stage;
        },
        enumerable: true,
        configurable: true
    });
    //清空舞台所以对象
    Config.prototype.removeChildren = function () {
        this._rootStage.removeChildren();
    };
    return Config;
}());
__reflect(Config.prototype, "Config");
var juiDate = (function (_super) {
    __extends(juiDate, _super);
    function juiDate(font, time, size) {
        var _this = _super.call(this) || this;
        _this.font = font;
        _this.time = time;
        _this.size = size;
        _this.init();
        return _this;
    }
    juiDate.prototype.init = function () {
        this._tian = new egret.BitmapText();
        this._tian.font = RES.getRes(this.font);
        this.addChild(this._tian);
        this._tian.letterSpacing = 5;
        var t = new egret.TextField();
        this._t = t;
        t.text = "天";
        t.size = this.size;
        t.textColor = 0x000000;
        this.addChild(t);
        this._t.x = this._tian.x + this._tian.width + 5;
        this._shi = new egret.BitmapText();
        this._shi.font = RES.getRes(this.font);
        this.addChild(this._shi);
        this._shi.x = this._t.x + this._t.width + 5;
        this._shi.letterSpacing = 5;
        var s = new egret.TextField();
        this._s = s;
        s.text = "时";
        s.size = this.size;
        s.textColor = 0x000000;
        this.addChild(s);
        this._s.x = this._shi.x + this._shi.width + 5;
        this._fen = new egret.BitmapText();
        this._fen.font = RES.getRes(this.font);
        this.addChild(this._fen);
        this._fen.x = this._s.x + this._s.width + 5;
        this._fen.letterSpacing = 5;
        var f = new egret.TextField();
        this._f = f;
        f.text = "分";
        f.size = this.size;
        f.textColor = 0x000000;
        this.addChild(f);
        this._f.x = this._fen.x + this._fen.width + 5;
        this._miao = new egret.BitmapText();
        this._miao.font = RES.getRes(this.font);
        this.addChild(this._miao);
        this._miao.x = this._f.x + this._f.width + 5;
        this._miao.letterSpacing = 5;
        var m = new egret.TextField();
        this._m = m;
        m.text = "秒";
        m.size = this.size;
        m.textColor = 0x000000;
        this.addChild(m);
        this._m.x = this._miao.x + this._miao.width + 5;
        this.jishi();
        var timer = new DateTimer(1000);
        timer.addEventListener(egret.TimerEvent.TIMER, this.jishi, this);
        timer.start();
    };
    juiDate.prototype.jishi = function () {
        var time = this.diffTime(new Date(), new Date(this.time));
        this._tian.text = time.split("天")[0];
        this._shi.text = time.split("天")[1].split("小时")[0];
        this._fen.text = time.split("小时")[1].split("分")[0];
        this._miao.text = time.split("分")[1].split("秒")[0];
        this._t.x = this._tian.x + this._tian.width + 5;
        this._shi.x = this._t.x + this._t.width + 5;
        this._s.x = this._shi.x + this._shi.width + 5;
        this._fen.x = this._s.x + this._s.width + 5;
        this._f.x = this._fen.x + this._fen.width + 5;
        this._miao.x = this._f.x + this._f.width + 5;
        this._m.x = this._miao.x + this._miao.width + 5;
    };
    juiDate.prototype.diffTime = function (startDate, endDate) {
        var diff = endDate.getTime() - startDate.getTime(); //时间差的毫秒数
        //计算出相差天数
        var days = Math.floor(diff / (24 * 3600 * 1000));
        //计算出小时数
        var leave1 = diff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
        var hours = Math.floor(leave1 / (3600 * 1000));
        //计算相差分钟数
        var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
        var minutes = Math.floor(leave2 / (60 * 1000));
        //计算相差秒数
        var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
        var seconds = Math.round(leave3 / 1000);
        var returnStr = seconds + "秒";
        if (minutes > 0) {
            returnStr = minutes + "分" + returnStr;
        }
        else {
            returnStr = "0" + "分" + returnStr;
        }
        if (hours > 0) {
            returnStr = hours + "小时" + returnStr;
        }
        else {
            returnStr = "0" + "小时" + returnStr;
        }
        if (days > 0) {
            returnStr = days + "天" + returnStr;
        }
        else {
            returnStr = "0" + "天" + returnStr;
        }
        return returnStr;
    };
    return juiDate;
}(egret.DisplayObjectContainer));
__reflect(juiDate.prototype, "juiDate");
var HP = (function (_super) {
    __extends(HP, _super);
    function HP(hpbg, hpBar, hp, mqhp) {
        if (mqhp === void 0) { mqhp = null; }
        var _this = _super.call(this) || this;
        //血量最大值
        _this.maxhp = 0;
        //当前血量
        _this.hp = 0;
        _this.juli = 0;
        _this.hpbg = hpbg;
        _this.hpBar = hpBar;
        _this.maxhp = hp;
        _this.hp = hp;
        _this.init();
        if (mqhp != null) {
            _this.setmqhp(mqhp);
        }
        return _this;
    }
    HP.prototype.init = function () {
        this.addChild(this.hpBar);
        this.width = this.hpBar.width;
        this.height = this.hpBar.height;
        this.yd = this.hpBar.x;
        this.juli = this.width / this.maxhp;
        var mask = new egret.Shape();
        mask.graphics.beginFill(0x000000, 1);
        mask.graphics.drawRect(this.hpBar.x, this.hpBar.y, this.hpBar.width, this.hpBar.height);
        mask.graphics.endFill();
        this.addChild(mask);
        this.hpBar.mask = mask;
    };
    Object.defineProperty(HP.prototype, "setHp", {
        set: function (hp) {
            this.hp = hp;
            egret.Tween.removeTweens(this.hpBar);
            egret.Tween.get(this.hpBar).to({ x: this.yd - (this.maxhp - hp) * this.juli }, 200);
            // this.hpBar.x = this.yd-(this.maxhp-hp)*this.juli;
        },
        enumerable: true,
        configurable: true
    });
    HP.prototype.setmqhp = function (hp) {
        this.hp = hp;
        this.hpBar.x = this.yd - (this.maxhp - hp) * this.juli;
    };
    HP.prototype.jhp = function (count) {
        this.hp -= count;
        this.setHp = this.hp;
    };
    return HP;
}(egret.DisplayObjectContainer));
__reflect(HP.prototype, "HP");
/**
*
* @xyl
* 自定义事件管理器
*/
var EventManager = (function () {
    function EventManager() {
    }
    // 添加事件
    EventManager.addEvent = function (type, fun, thisObject) {
        if (this.eventList[type] == null) {
            this.eventList[type] = [];
        }
        var len = this.eventList[type].length;
        this.eventList[type][len] = { "fun": fun, "this": thisObject };
    };
    //删除事件
    EventManager.removeEvent = function (type, fun, thisObject) {
        var dic = this.eventList[type];
        if (dic == null)
            return;
        for (var i in dic) {
            var data = dic;
            if (data["fun"] == fun) {
                dic.splice(i, 1);
                return;
            }
        }
    };
    //派发事件
    EventManager.dispatchEvent = function (type, data) {
        var dic = this.eventList[type];
        if (!dic)
            return;
        for (var i = 0; i < dic.length; i++) {
            var data1 = dic;
            data1["fun"].apply(data1["this"], [data]);
        }
    };
    EventManager.hasEvent = function (type) {
        var dic = this.eventList[type];
        if (!dic)
            return false;
        return true;
    };
    //删除无用事件类型
    EventManager.gc = function () {
    };
    EventManager.eventList = {};
    return EventManager;
}());
__reflect(EventManager.prototype, "EventManager");
/**
 *
 * @author
 *帧动画播放组件
 */
var FrameAnimation = (function (_super) {
    __extends(FrameAnimation, _super);
    function FrameAnimation(list) {
        if (list === void 0) { list = []; }
        var _this = _super.call(this) || this;
        /**播放列表*/
        _this._list = [];
        /**帧频  默认100*/
        _this.FRAME_RATE = 43;
        /**记录目前帧数*/
        _this.num = 0;
        _this._list = list;
        _this.init();
        return _this;
    }
    FrameAnimation.prototype.init = function () {
        this._animation = new egret.Bitmap();
        this._animation.texture = RES.getRes(this._list[0]);
        this.addChild(this._animation);
    };
    FrameAnimation.prototype.setList = function (begin, end, str, type, t) {
        if (type === void 0) { type = "png"; }
        if (t === void 0) { t = 0; }
        for (var i = begin; i <= end; i++) {
            if (!t) {
                this._list.push(str + "(" + i + ")" + "_" + type);
            }
            else {
                this._list.push(str + i + "_" + type);
            }
        }
        this._animation.texture = RES.getRes(this._list[0]);
        this._animation.width = this.width;
        this._animation.height = this.height;
    };
    /**开始播放播放，传入-1循环播放，输入指定值播放指定值次数*/
    FrameAnimation.prototype.play = function (num) {
        if (num === void 0) { num = 1; }
        var animationNum = this._list.length;
        this._play = num;
        if (animationNum > 0) {
            if (this._timer) {
                this._timer.stop();
                this._timer.removeEventListener(egret.TimerEvent.TIMER, this.Timer, this);
            }
            if (num == -1) {
                this._timer = new egret.Timer(this.FRAME_RATE);
            }
            else {
                this._timer = new egret.Timer(this.FRAME_RATE, animationNum * num - 1);
            }
            this._timer.addEventListener(egret.TimerEvent.TIMER, this.Timer, this);
            this._timer.start();
        }
    };
    FrameAnimation.prototype.Timer = function () {
        if (this.num >= this._list.length - 1) {
            this.num = -1;
        }
        this.num++;
        var texture = RES.getRes(this._list[this.num]);
        if (!texture) {
            if (this._play != -1) {
                this._timer.stop();
                this._timer.removeEventListener(egret.TimerEvent.TIMER, this.Timer, this);
            }
            else {
                this.num = -1;
            }
            return;
        }
        this._animation.texture = texture;
    };
    Object.defineProperty(FrameAnimation.prototype, "frameRate", {
        /**修改播放频率*/
        set: function (num) {
            this.FRAME_RATE = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrameAnimation.prototype, "aniData", {
        /**改变播放数据*/
        set: function (list) {
            this._list = list;
        },
        enumerable: true,
        configurable: true
    });
    /**暂停播放*/
    FrameAnimation.prototype.stop = function () {
        this._timer.stop();
    };
    /**继续播放*/
    FrameAnimation.prototype.start = function () {
        this._timer.start();
    };
    Object.defineProperty(FrameAnimation.prototype, "assignStart", {
        /**从指定帧数开始播放*/
        set: function (num) {
            this.num = num - 2;
        },
        enumerable: true,
        configurable: true
    });
    return FrameAnimation;
}(egret.DisplayObjectContainer));
__reflect(FrameAnimation.prototype, "FrameAnimation");
/**
 * 用于贝塞尔曲线运动的图片对象
 * url:图片资源名
 */
var BseBitmap = (function (_super) {
    __extends(BseBitmap, _super);
    function BseBitmap(obj) {
        var _this = _super.call(this) || this;
        _this._obj = obj;
        _this.addChild(_this._obj);
        return _this;
        // this.width = obj.width;
        // this.height = obj.height;
    }
    Object.defineProperty(BseBitmap.prototype, "factor", {
        get: function () {
            return 0;
        },
        set: function (value) {
            this.x = (1 - value) * (1 - value) * this["x1"] + 2 * value * (1 - value) * this["x2"] + value * value * this["x3"];
            this.y = (1 - value) * (1 - value) * this["y1"] + 2 * value * (1 - value) * this["y2"] + value * value * this["y3"];
        },
        enumerable: true,
        configurable: true
    });
    return BseBitmap;
}(egret.DisplayObjectContainer));
__reflect(BseBitmap.prototype, "BseBitmap");
//图文混排类
var Expression = (function (_super) {
    __extends(Expression, _super);
    function Expression(data) {
        if (data === void 0) { data = null; }
        var _this = _super.call(this) || this;
        _this._text = "";
        _this.sw = false;
        if (data)
            _this.data = data;
        _this.textf = new egret.TextField();
        _this.textf.size = 50;
        _this.addChild(_this.textf);
        return _this;
    }
    /**
     * 获取文本对象
     */
    Expression.prototype.getTf = function () {
        return this.textf;
    };
    /**
     * 设置宽
     */
    Expression.prototype.setWidth = function (w) {
        this.width = w;
        this.textf.width = w;
        this.sw = true;
    };
    /**
     * 设置高
     */
    Expression.prototype.setHeiht = function (h) {
        this.height = h;
        this.textf.height = h;
    };
    /**设置文本
     * text 文本
     */
    Expression.prototype.setText = function (text) {
        var jl = text;
        var arr = text.split(/\[\d+\]/);
        if (arr.length > 1) {
            this.textf.text = arr[0];
            var node = new egret.Bitmap();
            this.setTexture(node, jl.match(/\[\d+\]/)[0]);
            this.addChild(node);
            node.width = node.height = this.textf.size;
            var data = this.textf.$getLinesArr();
            var x = data.length > 0 ? (data[data.length - 1].width) : 0;
            var y = data.length > 0 ? ((data.length - 1) * data[data.length - 1].height + this.textf.lineSpacing * (data.length - 1)) : 0;
            if (this.sw && data.length > 0 && data[data.length - 1].width + this.textf.size > this.textf.width) {
                x = 0;
                y = data.length * data[data.length - 1].height + this.textf.lineSpacing * (data.length);
            }
            node.x = x;
            node.y = y;
            text = text.replace(/\[\d+\]/, "ㅇ");
            var arr2 = text.split(/\[\d+\]/);
            if (arr2.length > 1) {
                this.setText(text);
            }
            else {
                this.textf.text = text;
                this._text = text;
            }
        }
    };
    /**
     * 获取当前文本
     */
    Expression.prototype.getText = function () {
        return this.textf.text;
    };
    Expression.prototype.setTexture = function (obj, str) {
        var img;
        if (this.data) {
            img = this.data[str];
        }
        else {
            img = "bq_" + str.replace(/[^0-9]/ig, "") + "_png";
        }
        Jui.getSingle().setImg(obj, img);
    };
    return Expression;
}(egret.DisplayObjectContainer));
__reflect(Expression.prototype, "Expression");
/**画一条初始点到终点的虚线
 * color:虚线颜色、默认0x000000
 * tk：虚线大小、默认2
 * alpha：虚线透明度、默认1
 */
var DottedLine = (function (_super) {
    __extends(DottedLine, _super);
    function DottedLine(color, tk, alpha) {
        if (color === void 0) { color = 0x000000; }
        if (tk === void 0) { tk = 2; }
        if (alpha === void 0) { alpha = 1; }
        var _this = _super.call(this) || this;
        _this._duan = [];
        _this._color = color;
        _this._tk = tk;
        _this._alpha = alpha;
        _this.Init();
        return _this;
    }
    DottedLine.prototype.Init = function () {
        // this._container = new egret.Sprite();
        // this.addChild(this._container);
    };
    /**绘画虚线、会清空原画的虚线
     * beginPoint：初始点  格式{x:0,y:0}
     * endPoint：终点  格式{x:0,y:0}
     * dx:虚线每隔长度 默认10
     * jiange：虚线点两点间隔 默认3
     */
    DottedLine.prototype.setline = function (beginPoint, endPoint, dx, jiange) {
        if (dx === void 0) { dx = 10; }
        if (jiange === void 0) { jiange = 3; }
        // this._container = new egret.Sprite();
        this._duan = [];
        this.width = beginPoint.x + Math.abs(endPoint.x - beginPoint.x);
        this.height = beginPoint.y + Math.abs(endPoint.y - beginPoint.y);
        // this.x = beginPoint.x;
        // this.y = beginPoint.y;
        var ds = Math.sqrt(this.width * this.width + this.height * this.height) / dx;
        var sx = (endPoint.x - beginPoint.x) / ds;
        var sy = (endPoint.y - beginPoint.y) / ds;
        this._duan.push({ x: beginPoint.x, y: beginPoint.y });
        for (var i = 0; i < ds; i++) {
            var point = { x: beginPoint.x + sx, y: beginPoint.y + sy };
            this._duan.push(point);
            beginPoint = point;
        }
        this.hualine(jiange);
    };
    DottedLine.prototype.hualine = function (jiange) {
        if (jiange === void 0) { jiange = 3; }
        this.graphics.clear();
        var s = jiange;
        for (var i = 0; i < this._duan.length; i++) {
            var point = this._duan[i];
            var point2 = this._duan[i + 1];
            if (s == jiange && point2) {
                this.graphics.lineStyle(this._tk, this._color, this._alpha);
                this.graphics.moveTo(point.x, point.y);
                this.graphics.lineTo(point2.x, point2.y);
            }
            s--;
            if (s < 0)
                s = jiange;
        }
    };
    return DottedLine;
}(egret.Sprite));
__reflect(DottedLine.prototype, "DottedLine");
/**
 * P2MouseJointHelper 鼠标PvtJoint
 * @author
 *
 */
var P2MouseJointHelper = (function () {
    function P2MouseJointHelper(stageRef, pSceneCtn, pWorld, hasDisplaySkin) {
        if (hasDisplaySkin === void 0) { hasDisplaySkin = true; }
        this.stage = stageRef;
        this.world = pWorld;
        this.sceneCtn = pSceneCtn;
        if (hasDisplaySkin) {
            this.mouseBody = P2Space.getSingle().addOneBox(this.world, this.sceneCtn, 400, 400, 20, 20, 0, p2.Body.KINEMATIC, null); //mouseBody
            this.mouseBody.shapes[0].collisionMask = 0;
        }
        else {
            this.mouseBody = new p2.Body();
        }
        this.mouseBody.allowSleep = false;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStageTouchBegin, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onStageTouchMove, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this);
    }
    P2MouseJointHelper.prototype.onStageTouchBegin = function (e) {
        this.clearConstraint();
        var p2x = P2Space.getSingle().convertEgretValueToP2(e.stageX);
        var p2y = P2Space.getSingle().convertEgretY_To_P2Y(e.stageY);
        // Check if the cursor is inside the box
        var hitBodies = this.world.hitTest([p2x, p2y], this.world.bodies, 5);
        if (hitBodies.length) {
            var temBody = hitBodies[0];
            this.mouseBody.position[0] = p2x;
            this.mouseBody.position[1] = p2y;
            this.mouseConstraint = new p2.RevoluteConstraint(this.mouseBody, temBody, { worldPivot: [p2x, p2y] });
            this.mouseConstraint.collideConnected = false;
            this.world.addConstraint(this.mouseConstraint);
        }
    };
    P2MouseJointHelper.prototype.onStageTouchMove = function (e) {
        if (this.mouseConstraint) {
            var p2x = P2Space.getSingle().convertEgretValueToP2(e.stageX);
            var p2y = P2Space.getSingle().convertEgretY_To_P2Y(e.stageY);
            this.mouseBody.position[0] = p2x;
            this.mouseBody.position[1] = p2y;
        }
    };
    P2MouseJointHelper.prototype.onStageTouchEnd = function (e) {
        this.clearConstraint();
    };
    P2MouseJointHelper.prototype.clearConstraint = function () {
        if (this.mouseConstraint) {
            this.world.removeConstraint(this.mouseConstraint);
            this.mouseConstraint.bodyA = null;
            this.mouseConstraint.bodyB = null;
            this.mouseConstraint = null;
        }
    };
    return P2MouseJointHelper;
}());
__reflect(P2MouseJointHelper.prototype, "P2MouseJointHelper");
/**
 * 封装出来一个简单的物理场景
 * @author
 *
 */
var jbP2;
(function (jbP2) {
    var SimpleP2Scene = (function () {
        function SimpleP2Scene(pStage, pDispCtn) {
            //物理世界转换系数
            this.factor = 50;
            //
            this.intime = 1000;
            this.stage = pStage; //ref of stage
            this.dispCtn = pDispCtn; //ref of disp container
            //初始化P2Space
            P2Space.getSingle().initSpace(this.factor, new egret.Rectangle(0, 0, this.stage.stageWidth, this.stage.stageHeight));
            //创建world
            this.world = new p2.World();
            //set p2.world.sleepMode
            this.world.sleepMode = p2.World.BODY_SLEEPING;
            egret.Ticker.getInstance().register(this.p2RunStep, this); //register update step of p2.wolrd
            //this.stage.addEventListener(egret.Event.ENTER_FRAME,this.p2Step,this);
        }
        //update step
        SimpleP2Scene.prototype.p2RunStep = function (dt) {
            if (dt < 10) {
                return;
            }
            if (dt > 1000) {
                return;
            }
            //console.log("dt="+dt+"--"+"timie="+(dt / this.intime))
            this.world.step(dt / this.intime); //p2.World.step                                 
            P2Space.getSingle().updateWorldBodiesSkin(this.world); //更新p2World内所有刚体皮肤显示
        };
        SimpleP2Scene.prototype.p2Step = function (e) {
            this.world.step(1 / 60);
            P2Space.getSingle().updateWorldBodiesSkin(this.world); //更新p2World内所有刚体皮肤显示
        };
        /**
         * creage ground
         */
        SimpleP2Scene.prototype.createGround = function () {
            //创建plane
            var planeShape = new p2.Plane();
            var planeBody = new p2.Body();
            planeBody.type = p2.Body.STATIC;
            planeBody.addShape(planeShape);
            planeBody.displays = [];
            this.world.addBody(planeBody);
        };
        return SimpleP2Scene;
    }());
    jbP2.SimpleP2Scene = SimpleP2Scene;
    __reflect(SimpleP2Scene.prototype, "jbP2.SimpleP2Scene");
})(jbP2 || (jbP2 = {}));
/**
* p2物理引擎工具类
*/
var P2Space = (function () {
    function P2Space() {
        this.yAxis = p2.vec2.fromValues(0, 1); //p2 y轴
    }
    P2Space.getSingle = function () {
        if (!this._single) {
            this._single = new P2Space();
        }
        return this._single;
    };
    P2Space.prototype.checkIfCanJump = function (world, body) {
        var result = false;
        for (var i = 0; i < world.narrowphase.contactEquations.length; i++) {
            var c = world.narrowphase.contactEquations[i];
            if (c.bodyA === body || c.bodyB === body) {
                var d = p2.vec2.dot(c.normalA, this.yAxis); // Normal dot Y-axis
                if (c.bodyA === body)
                    d *= -1;
                if (d > 0.5)
                    result = true;
            }
        }
        return result;
    };
    /**
     * 更新刚体的皮肤显示
     */
    P2Space.prototype.updateBodySkin = function (body) {
        if (body.displays == null || body.displays.length == 0) {
            return;
        }
        for (var i = 0; i < body.displays.length; i++) {
            var skinDisp = body.displays[i];
            if (skinDisp) {
                //使用shape数据来更新皮肤-------------------------------------------------------------------------------------------
                var skinWorldPos = [0, 0]; //shapeSkin在p2World中的坐标
                body.toWorldFrame(skinWorldPos, body.shapes[i].position); //从Body局部转世界
                skinDisp.x = this.convertP2ValueToEgret(skinWorldPos[0]); //转化为egret坐标，赋给skin
                skinDisp.y = this.convertP2Y_To_EgretY(skinWorldPos[1]); //转化为egret坐标，赋给skin
                skinDisp.rotation = 360 - (body.angle + body.shapes[i].angle) * 180 / Math.PI; //
                //使用body数据来更新皮肤-------------------------------------------------------------------------------------------
                //                    skinDisp.x = this.convertP2ValueToEgret(body.position[0]);//把物理世界的位置转换到显示世界的位置，赋值
                //                    skinDisp.y = this.convertP2Y_To_EgretY(body.position[1]);//把物理世界的位置转换到显示世界的位置，赋值
                //                    skinDisp.rotation = this.convertP2BodyAngleToEgret(body);//把物理世界刚体角度转换为显示世界角度，赋值
            }
        }
    };
    /**
     * 物理世界的长度标量到显示世界的转换
     * 适合如 x,width,height的转换，y值不适合
     */
    P2Space.prototype.convertP2ValueToEgret = function (value) {
        return value * this.factor;
    };
    /**
     * 显示世界物理世界的长度标量到物理世界的转换
     * 适合如 x,width,height的转换，y值不适合
     */
    P2Space.prototype.convertEgretValueToP2 = function (value) {
        return value / this.factor;
    };
    /**
     * 把egretY值转换到p2Y值，仅适合y转换
     */
    P2Space.prototype.convertEgretY_To_P2Y = function (egretY) {
        return (this.worldRect.height - egretY) / this.factor;
    };
    /**
     * 把p2y值转换到egretY值，仅适合y转换
     */
    P2Space.prototype.convertP2Y_To_EgretY = function (p2Y) {
        return this.worldRect.height - p2Y * this.factor;
    };
    /**
     * 把给定egret坐标转换为p2坐标
     */
    P2Space.prototype.convertEgretPosToP2 = function (xEgret, yEgret) {
        return [xEgret / this.factor, (this.worldRect.height - yEgret) / this.factor];
    };
    /**
     * 获得p2Body的egret显示坐标
     */
    P2Space.prototype.convertBodyPosToEgret = function (body) {
        var xP2 = body.position[0];
        var yP2 = body.position[1];
        return [xP2 * this.factor, this.worldRect.height - yP2 * this.factor];
    };
    /**
     * 获得p2Body的egret显示旋转角度
     */
    P2Space.prototype.convertP2BodyAngleToEgret = function (body) {
        var result;
        result = 360 - body.angle * 180 / Math.PI;
        return result;
    };
    /**
     * 把egret deg角度转换为p2 rad角度
     */
    P2Space.prototype.convertEgretAngleToP2 = function (angle) {
        var result;
        result = (360 - angle) * Math.PI / 180;
        return result;
    };
    /**
     * 初始化
     */
    P2Space.prototype.initSpace = function (factor, rectWorld) {
        this.factor = factor;
        this.worldRect = rectWorld;
    };
    /**
     * 在物理世界创建一个矩形刚体，显示cube矢量图形
     */
    P2Space.prototype.addOneBox = function (p2World, ctn, px, py, pw, ph, pAngle, type, obj) {
        //在物理世界中的位置
        var p2x = P2Space.getSingle().convertEgretValueToP2(px); //显示位置变换到物理世界位置
        var p2y = P2Space.getSingle().convertEgretY_To_P2Y(py); //显示位置变换到物理世界位置
        var p2Wid = P2Space.getSingle().convertEgretValueToP2(pw);
        var p2Hei = P2Space.getSingle().convertEgretValueToP2(ph);
        var p2Angle = P2Space.getSingle().convertEgretAngleToP2(pAngle);
        var display;
        var bodyShape = new p2.Box({ width: p2Wid, height: p2Hei }); //new p2.Rectangle(p2Wid, p2Hei);
        var body = new p2.Body({ mass: 1, position: [p2x, p2y], angle: p2Angle });
        body.type = type;
        body.addShape(bodyShape); //给刚体添加p2.Shape
        p2World.addBody(body);
        if (typeof (obj) != "object") {
            display = jbP2.DispUtil.createBox(pw, ph, obj);
        }
        else {
            display = obj;
        }
        //绑定刚体和显示皮肤
        body.displays = [display];
        display["gt"] = body;
        if (!obj.parent)
            ctn.addChild(display); //把皮肤添加到显示世界
        return body;
    };
    /**
     * 在物理世界创建一个capsule刚体，显示capsule矢量图形
     * @param p2World
     * @param ctn
     * @param px
     * @param py
     * @param pw
     * @param ph
     * @param pAngle
     * @param type
     */
    P2Space.prototype.addOneCapsule = function (p2World, ctn, px, py, pLen, pRadius, pAngle, type) {
        //在物理世界中的位置
        var p2x = P2Space.getSingle().convertEgretValueToP2(px); //显示位置变换到物理世界位置
        var p2y = P2Space.getSingle().convertEgretY_To_P2Y(py); //显示位置变换到物理世界位置
        var p2Len = P2Space.getSingle().convertEgretValueToP2(pLen);
        var p2Radius = P2Space.getSingle().convertEgretValueToP2(pRadius);
        var p2Angle = P2Space.getSingle().convertEgretAngleToP2(pAngle);
        var display;
        var bodyShape = new p2.Capsule({ length: p2Len, radius: p2Radius }); //new p2.Box({ width: p2Wid,height: p2Hei }); 
        var body = new p2.Body({ mass: 1, position: [p2x, p2y], angle: p2Angle });
        body.type = type;
        body.addShape(bodyShape); //给刚体添加p2.Shape
        p2World.addBody(body);
        display = jbP2.DispUtil.createCapsule(pLen, pRadius);
        //绑定刚体和显示皮肤
        body.displays = [display];
        display["gt"] = body;
        ctn.addChild(display); //把皮肤添加到显示世界
        return body;
    };
    /**
    * 在物理世界创建一个圆形刚体，显示circle矢量图形
    */
    P2Space.prototype.addOneBall = function (p2World, ctn, px, py, pr, pAngle, type, obj) {
        //在物理世界中的位置
        var p2x = P2Space.getSingle().convertEgretValueToP2(px); //显示位置变换到物理世界位置
        var p2y = P2Space.getSingle().convertEgretY_To_P2Y(py); //显示位置变换到物理世界位置
        var p2R = P2Space.getSingle().convertEgretValueToP2(pr);
        var p2Angle = P2Space.getSingle().convertEgretAngleToP2(pAngle);
        var display;
        var bodyShape = new p2.Circle({ radius: p2R }); //new p2.Circle(p2R)
        var body = new p2.Body({ mass: 1, position: [p2x, p2y], angle: p2Angle });
        body.type = type;
        body.addShape(bodyShape); //给刚体添加p2.Shape
        p2World.addBody(body);
        if (typeof (obj) != "object") {
            display = jbP2.DispUtil.createBall(pr, obj);
        }
        else {
            display = obj;
        }
        //绑定刚体和显示皮肤
        body.displays = [display];
        display["gt"] = body;
        if (!obj.parent)
            ctn.addChild(display); //把皮肤添加到显示世界
        return body;
    };
    /**
    * 在物理世界创建一个多边形刚体，显示circle矢量图形
    */
    P2Space.prototype.addDbx = function (p2World, ctn, px, py, vertices, pAngle, type, obj, ht) {
        if (ht === void 0) { ht = 0; }
        //在物理世界中的位置
        var p2x = P2Space.getSingle().convertEgretValueToP2(px); //显示位置变换到物理世界位置
        var p2y = P2Space.getSingle().convertEgretY_To_P2Y(py); //显示位置变换到物理世界位置
        var p2Angle = P2Space.getSingle().convertEgretAngleToP2(pAngle);
        var display;
        var od = [];
        for (var i = 0; i < vertices.length; i++) {
            var point = [];
            point[0] = P2Space.getSingle().convertEgretValueToP2(vertices[i][0]);
            point[1] = P2Space.getSingle().convertEgretY_To_P2Y(vertices[i][1]);
            od.push(point);
        }
        // var bodyShape: p2.Shape = new p2.Convex({ vertices: vertices });//new p2.Circle(p2R)
        var body = new p2.Body({ mass: 1, angle: p2Angle });
        body.fromPolygon(od, { optimalDecomp: false });
        body.type = type;
        // body.addShape(bodyShape);//给刚体添加p2.Shape
        p2World.addBody(body);
        if (!obj) {
            display = jbP2.DispUtil.createDbx(vertices);
        }
        else {
            display = obj;
        }
        if (ht) {
            obj.addChild(jbP2.DispUtil.createDbx(vertices));
        }
        body.position = [p2x, p2y];
        body.angle = p2Angle;
        //绑定刚体和显示皮肤
        body.displays = [display];
        display["gt"] = body;
        if (!obj.parent)
            ctn.addChild(display); //把皮肤添加到显示世界
        return body;
    };
    /**
     * 更新p2World的刚体皮肤显示
     */
    P2Space.prototype.updateWorldBodiesSkin = function (p2World) {
        var stageHeight = egret.MainContext.instance.stage.stageHeight; //显示世界 stageHeight
        var len = p2World.bodies.length;
        for (var i = 0; i < len; i++) {
            var temBody = p2World.bodies[i];
            P2Space.getSingle().updateBodySkin(temBody);
            if (temBody.displays == null || temBody.displays.length == 0) {
                continue;
            }
            for (var j = 0; j < temBody.displays.length; j++) {
                var dispSkin = temBody.displays[j];
                if (temBody.sleepState == p2.Body.SLEEPING) {
                    dispSkin.alpha = 0.5;
                }
                else {
                    dispSkin.alpha = 1;
                }
            } //end for
        } //end for
    };
    return P2Space;
}());
__reflect(P2Space.prototype, "P2Space");
var tjp2 = (function () {
    function tjp2() {
    }
    tjp2.setBody = function (aji) {
        var pobj = null;
        var obj = null;
        var typ = aji["typ"]; //对象类型
        var pid = window["T"].findid(aji["pid"]); //对象父类pid
        var cid = aji["_id"] || aji.idclas;
        if (pid) {
            pobj = sj.obj[pid];
        }
        if (!pobj && typ != 20)
            return;
        obj = window["T"].findObj(cid); //pobj.world["getBodyById"](cid);
        var style = aji.style;
        if (typ != 20) {
            var x = Jui.getSingle().deval("x", pobj.dispCtn, aji.style);
            var y = Jui.getSingle().deval("y", pobj.dispCtn, aji.style);
            var w = Jui.getSingle().deval("w", pobj.dispCtn, aji.style);
            var h = Jui.getSingle().deval("h", pobj.dispCtn, aji.style);
        }
        var ctobj;
        if (!obj) {
            if (typ == 20) {
                // obj["ct"] = window["T"].findid(aji.ct);
                obj = new jbP2.SimpleP2Scene(window["T"].findObj(style.ct).stage, window["T"].findObj(style.ct));
            }
            else {
                if (style.ct) {
                    ctobj = window["T"].findObj(window["T"].findmyid(style.ct));
                }
                else if (style.png) {
                    ctobj = JuiData.getzi([{ typ: 3, obj: { name: cid }, pobj: pobj.dispCtn, x: x, y: y, w: w, h: h, _id: "zi刚体显示图", bgimg: style.png }])[0];
                    ctobj.name = cid + "ziimg";
                }
                else {
                    ctobj = JuiData.getzi([{ typ: 3, obj: { name: cid }, pobj: pobj.dispCtn, x: x, y: y, w: w, h: h, _id: "zi刚体显示图", bgcolor: (style.bgcolor || "0x111111") }])[0];
                    ctobj.name = cid + "ziimg";
                }
                if (typ == 21) {
                    obj = P2Space.getSingle().addOneBox(pobj.world, pobj.dispCtn, x, y, w, h, style.rotation || 0, style.type || p2.Body.DYNAMIC, ctobj);
                }
                else if (typ == 22) {
                    var r = Jui.getSingle().deval("r", pobj.dispCtn, aji.style);
                    obj = P2Space.getSingle().addOneBall(pobj.world, pobj.dispCtn, x, y, r, style.rotation || 0, style.type || p2.Body.DYNAMIC, ctobj);
                }
                else if (typ == 23) {
                    obj = P2Space.getSingle().addDbx(pobj.world, pobj.dispCtn, x, y, style.arr || [[100, 120], [160, 100], [190, 160]], style.rotation || 0, style.type || p2.Body.DYNAMIC, ctobj, style.ht || 0);
                }
                if (style.mask && ctobj) {
                    Jui.getSingle().setMask(ctobj.$children[0], style.mask);
                }
                pobj.world.addBody(obj);
            }
        }
        else {
            if (typ == 20) {
                Jui.getSingle().removeWorldBody(obj.world);
                obj.world.clear();
                obj.stage = window["T"].findObj(style.ct).stage;
                obj.dispCtn = window["T"].findObj(style.ct);
            }
            else {
                var p2x = P2Space.getSingle().convertEgretValueToP2(x); //显示位置变换到物理世界位置
                var p2y = P2Space.getSingle().convertEgretY_To_P2Y(y); //显示位置变换到物理世界位置
                obj.position = [p2x, p2y];
                // var p2Angle: number = P2Space.getSingle().convertEgretAngleToP2(pAngle);
            }
        }
        if (style['material']) {
            obj.shapes[0].material = new p2.Material(Math.floor(Math.random() * 10000000000000));
        }
        // if (typ != 20) {
        //     pobj.world.addBody(obj);
        // }
        sj.obj[cid] = obj;
        sj.clas[cid] = aji;
        if (typ == 20) {
            obj = obj.world;
        }
        obj.id = Math.floor(Math.random() * 10000000000000);
        obj["name"] = cid;
        for (var i in style["sx"]) {
            obj[i] = style["sx"][i];
        }
    };
    return tjp2;
}());
__reflect(tjp2.prototype, "tjp2");
var qr;
(function (qr) {
    var QR8bitByte = (function () {
        function QR8bitByte(data) {
            this.mode = qr.QRMode.MODE_8BIT_BYTE;
            this.data = data;
            this.parsedData = [];
            //  UTF-8
            for (var i = 0, l = this.data.length; i < l; i++) {
                var byteArray = [];
                var code = this.data.charCodeAt(i);
                if (code > 0x10000) {
                    byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);
                    byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);
                    byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);
                    byteArray[3] = 0x80 | (code & 0x3F);
                }
                else if (code > 0x800) {
                    byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);
                    byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);
                    byteArray[2] = 0x80 | (code & 0x3F);
                }
                else if (code > 0x80) {
                    byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);
                    byteArray[1] = 0x80 | (code & 0x3F);
                }
                else {
                    byteArray[0] = code;
                }
                this.parsedData.push(byteArray);
            }
            this.parsedData = Array.prototype.concat.apply([], this.parsedData);
            if (this.parsedData.length != this.data.length) {
                this.parsedData.unshift(191);
                this.parsedData.unshift(187);
                this.parsedData.unshift(239);
            }
        }
        QR8bitByte.prototype.getLength = function (buffer) {
            return this.parsedData.length;
        };
        QR8bitByte.prototype.write = function (buffer) {
            for (var i = 0, l = this.parsedData.length; i < l; i++) {
                buffer.put(this.parsedData[i], 8);
            }
        };
        return QR8bitByte;
    }());
    qr.QR8bitByte = QR8bitByte;
    __reflect(QR8bitByte.prototype, "qr.QR8bitByte");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRBitBuffer = (function () {
        function QRBitBuffer() {
            this.buffer = [];
            this.length = 0;
        }
        QRBitBuffer.prototype.get = function (index) {
            var bufIndex = Math.floor(index / 8);
            return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
        };
        QRBitBuffer.prototype.put = function (num, length) {
            for (var i = 0; i < length; i++)
                this.putBit((num >>> length - i - 1 & 1) == 1);
        };
        QRBitBuffer.prototype.getLengthInBits = function () {
            return this.length;
        };
        QRBitBuffer.prototype.putBit = function (bit) {
            var bufIndex = Math.floor(this.length / 8);
            this.buffer.length <= bufIndex && this.buffer.push(0), bit && (this.buffer[bufIndex] |= 128 >>> this.length % 8), this.length++;
        };
        return QRBitBuffer;
    }());
    qr.QRBitBuffer = QRBitBuffer;
    __reflect(QRBitBuffer.prototype, "qr.QRBitBuffer");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRCode = (function () {
        function QRCode() {
        }
        /**
         * msg
         * width,height 二维码宽度，高度
         * color 颜色
         *
         * errorCorrectLevel:
         * level L : 最大 7% 的错误能够被纠正；
         * level M : 最大 15% 的错误能够被纠正；
         * level Q : 最大 25% 的错误能够被纠正；
         * level H : 最大 30% 的错误能够被纠正；
         *
         * typeNumber:
         * QR图的大小(size)被定义为版本（Version)，版本号从1到40。版本1就是一个21*21的矩阵，每增加一个版本号，矩阵的大小就增加4个模块(Module)，
         * 因此，版本40就是一个177*177的矩阵。（版本越高，意味着存储的内容越多，纠错能力也越强）。
         * */
        QRCode.create = function (msg, width, height, errorCorrectLevel, typeNumer, color) {
            if (width === void 0) { width = 200; }
            if (height === void 0) { height = 200; }
            if (errorCorrectLevel === void 0) { errorCorrectLevel = qr.QRErrorCorrectLevel.M; }
            if (typeNumer === void 0) { typeNumer = 4; }
            if (color === void 0) { color = 0; }
            var _htOption = {
                color: color,
                width: width,
                height: height,
                correctLevel: errorCorrectLevel,
                typeNumer: typeNumer
            };
            var _oQRCode = new qr.QRCodeModel(_htOption.typeNumer, _htOption.correctLevel);
            _oQRCode.addData(msg);
            _oQRCode.make();
            return QRCode.draw(_oQRCode, _htOption);
        };
        QRCode.draw = function (m, _htOption) {
            var sc = new egret.Sprite();
            var _htOption = _htOption;
            var nCount = m.getModuleCount();
            var nWidth = (_htOption.width / nCount);
            var nHeight = (_htOption.height / nCount);
            //画一个比二维码本身略大的白色底框
            var borderWidth = 10;
            sc.graphics.moveTo(-borderWidth, -borderWidth);
            sc.graphics.beginFill(0xffffff);
            sc.graphics.drawRect(-borderWidth, -borderWidth, _htOption.width + 2 * borderWidth, _htOption.height + 2 * borderWidth);
            sc.graphics.endFill();
            for (var row = 0; row < nCount; row++) {
                for (var col = 0; col < nCount; col++) {
                    var b = m.isDark(row, col);
                    if (b) {
                        sc.graphics.moveTo(col * nWidth, row * nHeight);
                        sc.graphics.beginFill(_htOption.color);
                        sc.graphics.drawRect(col * nWidth, row * nHeight, nWidth, nHeight);
                        sc.graphics.endFill();
                    }
                }
            }
            return sc;
        };
        return QRCode;
    }());
    qr.QRCode = QRCode;
    __reflect(QRCode.prototype, "qr.QRCode");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRCodeModel = (function () {
        function QRCodeModel(typeNumber, errorCorrectLevel) {
            this.modules = null;
            this.moduleCount = 0;
            this.dataCache = null;
            this.dataList = [];
            this.typeNumber = typeNumber;
            this.errorCorrectLevel = errorCorrectLevel;
            this.modules = null;
            this.moduleCount = 0;
            this.dataCache = null;
            this.dataList = [];
        }
        QRCodeModel.prototype.addData = function (data) {
            var newData = new qr.QR8bitByte(data);
            this.dataList.push(newData), this.dataCache = null;
        };
        QRCodeModel.prototype.isDark = function (row, col) {
            if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col)
                throw new Error(row + "," + col);
            return this.modules[row][col];
        };
        QRCodeModel.prototype.getModuleCount = function () {
            return this.moduleCount;
        };
        QRCodeModel.prototype.make = function () {
            this.makeImpl(!1, this.getBestMaskPattern());
        };
        QRCodeModel.prototype.makeImpl = function (test, maskPattern) {
            this.moduleCount = this.typeNumber * 4 + 17, this.modules = new Array(this.moduleCount);
            for (var row = 0; row < this.moduleCount; row++) {
                this.modules[row] = new Array(this.moduleCount);
                for (var col = 0; col < this.moduleCount; col++)
                    this.modules[row][col] = null;
            }
            this.setupPositionProbePattern(0, 0),
                this.setupPositionProbePattern(this.moduleCount - 7, 0),
                this.setupPositionProbePattern(0, this.moduleCount - 7),
                this.setupPositionAdjustPattern(),
                this.setupTimingPattern(),
                this.setupTypeInfo(test, maskPattern),
                this.typeNumber >= 7 && this.setupTypeNumber(test),
                this.dataCache == null && (this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, maskPattern);
        };
        QRCodeModel.prototype.setupPositionProbePattern = function (row, col) {
            for (var r = -1; r <= 7; r++) {
                if (row + r <= -1 || this.moduleCount <= row + r)
                    continue;
                for (var c = -1; c <= 7; c++) {
                    if (col + c <= -1 || this.moduleCount <= col + c)
                        continue;
                    0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4 ? this.modules[row + r][col + c] = !0 : this.modules[row + r][col + c] = !1;
                }
            }
        };
        QRCodeModel.prototype.getBestMaskPattern = function () {
            var minLostPoint = 0, pattern = 0;
            for (var i = 0; i < 8; i++) {
                this.makeImpl(!0, i);
                var lostPoint = qr.QRUtil.getLostPoint(this);
                if (i == 0 || minLostPoint > lostPoint)
                    minLostPoint = lostPoint, pattern = i;
            }
            return pattern;
        };
        QRCodeModel.prototype.createMovieClip = function (target_mc, instance_name, depth) {
            var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth), cs = 1;
            this.make();
            for (var row = 0; row < this.modules.length; row++) {
                var y = row * cs;
                for (var col = 0; col < this.modules[row].length; col++) {
                    var x = col * cs, dark = this.modules[row][col];
                    dark && (qr_mc.beginFill(0, 100), qr_mc.moveTo(x, y), qr_mc.lineTo(x + cs, y), qr_mc.lineTo(x + cs, y + cs), qr_mc.lineTo(x, y + cs), qr_mc.endFill());
                }
            }
            return qr_mc;
        };
        QRCodeModel.prototype.setupTimingPattern = function () {
            for (var r = 8; r < this.moduleCount - 8; r++) {
                if (this.modules[r][6] != null)
                    continue;
                this.modules[r][6] = r % 2 == 0;
            }
            for (var c = 8; c < this.moduleCount - 8; c++) {
                if (this.modules[6][c] != null)
                    continue;
                this.modules[6][c] = c % 2 == 0;
            }
        };
        QRCodeModel.prototype.setupPositionAdjustPattern = function () {
            var pos = qr.QRUtil.getPatternPosition(this.typeNumber);
            for (var i = 0; i < pos.length; i++)
                for (var j = 0; j < pos.length; j++) {
                    var row = pos[i], col = pos[j];
                    if (this.modules[row][col] != null)
                        continue;
                    for (var r = -2; r <= 2; r++)
                        for (var c = -2; c <= 2; c++)
                            r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0 ? this.modules[row + r][col + c] = !0 : this.modules[row + r][col + c] = !1;
                }
        };
        QRCodeModel.prototype.setupTypeNumber = function (test) {
            var bits = qr.QRUtil.getBCHTypeNumber(this.typeNumber);
            for (var i = 0; i < 18; i++) {
                var mod = !test && (bits >> i & 1) == 1;
                this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
            }
            for (var i = 0; i < 18; i++) {
                var mod = !test && (bits >> i & 1) == 1;
                this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
            }
        };
        QRCodeModel.prototype.setupTypeInfo = function (test, maskPattern) {
            var data = this.errorCorrectLevel << 3 | maskPattern, bits = qr.QRUtil.getBCHTypeInfo(data);
            for (var i = 0; i < 15; i++) {
                var mod = !test && (bits >> i & 1) == 1;
                i < 6 ? this.modules[i][8] = mod : i < 8 ? this.modules[i + 1][8] = mod : this.modules[this.moduleCount - 15 + i][8] = mod;
            }
            for (var i = 0; i < 15; i++) {
                var mod = !test && (bits >> i & 1) == 1;
                i < 8 ? this.modules[8][this.moduleCount - i - 1] = mod : i < 9 ? this.modules[8][15 - i - 1 + 1] = mod : this.modules[8][15 - i - 1] = mod;
            }
            this.modules[this.moduleCount - 8][8] = !test;
        };
        QRCodeModel.prototype.mapData = function (data, maskPattern) {
            var inc = -1, row = this.moduleCount - 1, bitIndex = 7, byteIndex = 0;
            for (var col = this.moduleCount - 1; col > 0; col -= 2) {
                col == 6 && col--;
                for (;;) {
                    for (var c = 0; c < 2; c++)
                        if (this.modules[row][col - c] == null) {
                            var dark = !1;
                            byteIndex < data.length && (dark = (data[byteIndex] >>> bitIndex & 1) == 1);
                            var mask = qr.QRUtil.getMask(maskPattern, row, col - c);
                            mask && (dark = !dark), this.modules[row][col - c] = dark, bitIndex--, bitIndex == -1 && (byteIndex++, bitIndex = 7);
                        }
                    row += inc;
                    if (row < 0 || this.moduleCount <= row) {
                        row -= inc, inc = -inc;
                        break;
                    }
                }
            }
        };
        QRCodeModel.createData = function (typeNumber, errorCorrectLevel, dataList) {
            var rsBlocks = qr.QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel), buffer = new qr.QRBitBuffer;
            for (var i = 0; i < dataList.length; i++) {
                var data = dataList[i];
                buffer.put(data.mode, 4), buffer.put(data.getLength(), qr.QRUtil.getLengthInBits(data.mode, typeNumber)), data.write(buffer);
            }
            var totalDataCount = 0;
            for (var i = 0; i < rsBlocks.length; i++)
                totalDataCount += rsBlocks[i].dataCount;
            if (buffer.getLengthInBits() > totalDataCount * 8)
                throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
            buffer.getLengthInBits() + 4 <= totalDataCount * 8 && buffer.put(0, 4);
            while (buffer.getLengthInBits() % 8 != 0)
                buffer.putBit(!1);
            for (;;) {
                if (buffer.getLengthInBits() >= totalDataCount * 8)
                    break;
                buffer.put(QRCodeModel.PAD0, 8);
                if (buffer.getLengthInBits() >= totalDataCount * 8)
                    break;
                buffer.put(QRCodeModel.PAD1, 8);
            }
            return QRCodeModel.createBytes(buffer, rsBlocks);
        };
        QRCodeModel.createBytes = function (buffer, rsBlocks) {
            var offset = 0, maxDcCount = 0, maxEcCount = 0, dcdata = new Array(rsBlocks.length), ecdata = new Array(rsBlocks.length);
            for (var r = 0; r < rsBlocks.length; r++) {
                var dcCount = rsBlocks[r].dataCount, ecCount = rsBlocks[r].totalCount - dcCount;
                maxDcCount = Math.max(maxDcCount, dcCount), maxEcCount = Math.max(maxEcCount, ecCount), dcdata[r] = new Array(dcCount);
                for (var i = 0; i < dcdata[r].length; i++)
                    dcdata[r][i] = 255 & buffer.buffer[i + offset];
                offset += dcCount;
                var rsPoly = qr.QRUtil.getErrorCorrectPolynomial(ecCount), rawPoly = new qr.QRPolynomial(dcdata[r], rsPoly.getLength() - 1), modPoly = rawPoly.mod(rsPoly);
                ecdata[r] = new Array(rsPoly.getLength() - 1);
                for (var i = 0; i < ecdata[r].length; i++) {
                    var modIndex = i + modPoly.getLength() - ecdata[r].length;
                    ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
                }
            }
            var totalCodeCount = 0;
            for (var i = 0; i < rsBlocks.length; i++)
                totalCodeCount += rsBlocks[i].totalCount;
            var data = new Array(totalCodeCount), index = 0;
            for (var i = 0; i < maxDcCount; i++)
                for (var r = 0; r < rsBlocks.length; r++)
                    i < dcdata[r].length && (data[index++] = dcdata[r][i]);
            for (var i = 0; i < maxEcCount; i++)
                for (var r = 0; r < rsBlocks.length; r++)
                    i < ecdata[r].length && (data[index++] = ecdata[r][i]);
            return data;
        };
        ////
        QRCodeModel.PAD0 = 236;
        QRCodeModel.PAD1 = 17;
        return QRCodeModel;
    }());
    qr.QRCodeModel = QRCodeModel;
    __reflect(QRCodeModel.prototype, "qr.QRCodeModel");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRErrorCorrectLevel = (function () {
        function QRErrorCorrectLevel() {
        }
        QRErrorCorrectLevel.L = 1;
        QRErrorCorrectLevel.M = 0;
        QRErrorCorrectLevel.Q = 3;
        QRErrorCorrectLevel.H = 2;
        return QRErrorCorrectLevel;
    }());
    qr.QRErrorCorrectLevel = QRErrorCorrectLevel;
    __reflect(QRErrorCorrectLevel.prototype, "qr.QRErrorCorrectLevel");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRMaskPattern = (function () {
        function QRMaskPattern() {
        }
        QRMaskPattern.PATTERN000 = 0;
        QRMaskPattern.PATTERN001 = 1;
        QRMaskPattern.PATTERN010 = 2;
        QRMaskPattern.PATTERN011 = 3;
        QRMaskPattern.PATTERN100 = 4;
        QRMaskPattern.PATTERN101 = 5;
        QRMaskPattern.PATTERN110 = 6;
        QRMaskPattern.PATTERN111 = 7;
        return QRMaskPattern;
    }());
    qr.QRMaskPattern = QRMaskPattern;
    __reflect(QRMaskPattern.prototype, "qr.QRMaskPattern");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRMath = (function () {
        function QRMath() {
        }
        QRMath.glog = function (n) {
            if (!QRMath.isInit) {
                QRMath.init();
            }
            if (n < 1)
                console.log("错误:n=" + n);
            return QRMath.LOG_TABLE[n];
        };
        QRMath.gexp = function (n) {
            if (!QRMath.isInit) {
                QRMath.init();
            }
            while (n < 0)
                n += 255;
            while (n >= 256)
                n -= 255;
            return QRMath.EXP_TABLE[n];
        };
        QRMath.init = function () {
            QRMath.isInit = true;
            for (var i = 0; i < 8; i++)
                QRMath.EXP_TABLE[i] = 1 << i;
            for (var i = 8; i < 256; i++)
                QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
            for (var i = 0; i < 255; i++)
                QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
        };
        QRMath.EXP_TABLE = new Array(256);
        QRMath.LOG_TABLE = new Array(256);
        return QRMath;
    }());
    qr.QRMath = QRMath;
    __reflect(QRMath.prototype, "qr.QRMath");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRMode = (function () {
        function QRMode() {
        }
        QRMode.MODE_NUMBER = 1;
        QRMode.MODE_ALPHA_NUM = 2;
        QRMode.MODE_8BIT_BYTE = 4;
        QRMode.MODE_KANJI = 8;
        return QRMode;
    }());
    qr.QRMode = QRMode;
    __reflect(QRMode.prototype, "qr.QRMode");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRPolynomial = (function () {
        function QRPolynomial(num, shift) {
            if (num.length == undefined)
                throw new Error(num.length + "/" + shift);
            var offset = 0;
            while (offset < num.length && num[offset] == 0)
                offset++;
            this.num = new Array(num.length - offset + shift);
            for (var i = 0; i < num.length - offset; i++)
                this.num[i] = num[i + offset];
        }
        QRPolynomial.prototype.get = function (index) {
            return this.num[index];
        };
        QRPolynomial.prototype.getLength = function () {
            return this.num.length;
        };
        QRPolynomial.prototype.multiply = function (e) {
            var num = new Array(this.getLength() + e.getLength() - 1);
            for (var i = 0; i < this.getLength(); i++)
                for (var j = 0; j < e.getLength(); j++)
                    num[i + j] ^= qr.QRMath.gexp(qr.QRMath.glog(this.get(i)) + qr.QRMath.glog(e.get(j)));
            return new QRPolynomial(num, 0);
        };
        QRPolynomial.prototype.mod = function (e) {
            if (this.getLength() - e.getLength() < 0)
                return this;
            var ratio = qr.QRMath.glog(this.get(0)) - qr.QRMath.glog(e.get(0)), num = new Array(this.getLength());
            for (var i = 0; i < this.getLength(); i++)
                num[i] = this.get(i);
            for (var i = 0; i < e.getLength(); i++)
                num[i] ^= qr.QRMath.gexp(qr.QRMath.glog(e.get(i)) + ratio);
            return (new QRPolynomial(num, 0)).mod(e);
        };
        return QRPolynomial;
    }());
    qr.QRPolynomial = QRPolynomial;
    __reflect(QRPolynomial.prototype, "qr.QRPolynomial");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRRSBlock = (function () {
        function QRRSBlock(totalCount, dataCount) {
            this.totalCount = totalCount;
            this.dataCount = dataCount;
        }
        QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
        QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
            var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
            if (rsBlock == undefined)
                throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
            var length = rsBlock.length / 3, list = [];
            for (var i = 0; i < length; i++) {
                var count = rsBlock[i * 3 + 0], totalCount = rsBlock[i * 3 + 1], dataCount = rsBlock[i * 3 + 2];
                for (var j = 0; j < count; j++)
                    list.push(new QRRSBlock(totalCount, dataCount));
            }
            return list;
        };
        QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
            switch (errorCorrectLevel) {
                case qr.QRErrorCorrectLevel.L:
                    return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
                case qr.QRErrorCorrectLevel.M:
                    return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
                case qr.QRErrorCorrectLevel.Q:
                    return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
                case qr.QRErrorCorrectLevel.H:
                    return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
                default:
                    return undefined;
            }
        };
        return QRRSBlock;
    }());
    qr.QRRSBlock = QRRSBlock;
    __reflect(QRRSBlock.prototype, "qr.QRRSBlock");
})(qr || (qr = {}));
/**
 * Created by qingzhu on 15/7/1.
 */
var qr;
(function (qr) {
    var QRUtil = (function () {
        function QRUtil() {
        }
        QRUtil.getBCHTypeInfo = function (data) {
            var d = data << 10;
            while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0)
                d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
            return (data << 10 | d) ^ QRUtil.G15_MASK;
        };
        QRUtil.getBCHTypeNumber = function (data) {
            var d = data << 12;
            while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0)
                d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
            return data << 12 | d;
        };
        QRUtil.getBCHDigit = function (data) {
            var digit = 0;
            while (data != 0)
                digit++, data >>>= 1;
            return digit;
        };
        QRUtil.getPatternPosition = function (typeNumber) {
            return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
        };
        QRUtil.getMask = function (maskPattern, i, j) {
            switch (maskPattern) {
                case qr.QRMaskPattern.PATTERN000:
                    return (i + j) % 2 == 0;
                case qr.QRMaskPattern.PATTERN001:
                    return i % 2 == 0;
                case qr.QRMaskPattern.PATTERN010:
                    return j % 3 == 0;
                case qr.QRMaskPattern.PATTERN011:
                    return (i + j) % 3 == 0;
                case qr.QRMaskPattern.PATTERN100:
                    return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
                case qr.QRMaskPattern.PATTERN101:
                    return i * j % 2 + i * j % 3 == 0;
                case qr.QRMaskPattern.PATTERN110:
                    return (i * j % 2 + i * j % 3) % 2 == 0;
                case qr.QRMaskPattern.PATTERN111:
                    return (i * j % 3 + (i + j) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + maskPattern);
            }
        };
        QRUtil.getErrorCorrectPolynomial = function (errorCorrectLength) {
            var a = new qr.QRPolynomial([1], 0);
            for (var i = 0; i < errorCorrectLength; i++)
                a = a.multiply(new qr.QRPolynomial([1, qr.QRMath.gexp(i)], 0));
            return a;
        };
        QRUtil.getLengthInBits = function (mode, type) {
            if (1 <= type && type < 10)
                switch (mode) {
                    case qr.QRMode.MODE_NUMBER:
                        return 10;
                    case qr.QRMode.MODE_ALPHA_NUM:
                        return 9;
                    case qr.QRMode.MODE_8BIT_BYTE:
                        return 8;
                    case qr.QRMode.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + mode);
                }
            else if (type < 27)
                switch (mode) {
                    case qr.QRMode.MODE_NUMBER:
                        return 12;
                    case qr.QRMode.MODE_ALPHA_NUM:
                        return 11;
                    case qr.QRMode.MODE_8BIT_BYTE:
                        return 16;
                    case qr.QRMode.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + mode);
                }
            else {
                if (!(type < 41))
                    throw new Error("type:" + type);
                switch (mode) {
                    case qr.QRMode.MODE_NUMBER:
                        return 14;
                    case qr.QRMode.MODE_ALPHA_NUM:
                        return 13;
                    case qr.QRMode.MODE_8BIT_BYTE:
                        return 16;
                    case qr.QRMode.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + mode);
                }
            }
        };
        QRUtil.getLostPoint = function (qrCode) {
            var moduleCount = qrCode.getModuleCount(), lostPoint = 0;
            for (var row = 0; row < moduleCount; row++)
                for (var col = 0; col < moduleCount; col++) {
                    var sameCount = 0, dark = qrCode.isDark(row, col);
                    for (var r = -1; r <= 1; r++) {
                        if (row + r < 0 || moduleCount <= row + r)
                            continue;
                        for (var c = -1; c <= 1; c++) {
                            if (col + c < 0 || moduleCount <= col + c)
                                continue;
                            if (r == 0 && c == 0)
                                continue;
                            dark == qrCode.isDark(row + r, col + c) && sameCount++;
                        }
                    }
                    sameCount > 5 && (lostPoint += 3 + sameCount - 5);
                }
            for (var row = 0; row < moduleCount - 1; row++)
                for (var col = 0; col < moduleCount - 1; col++) {
                    var count = 0;
                    qrCode.isDark(row, col) && count++, qrCode.isDark(row + 1, col) && count++, qrCode.isDark(row, col + 1) && count++, qrCode.isDark(row + 1, col + 1) && count++;
                    if (count == 0 || count == 4)
                        lostPoint += 3;
                }
            for (var row = 0; row < moduleCount; row++)
                for (var col = 0; col < moduleCount - 6; col++)
                    qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6) && (lostPoint += 40);
            for (var col = 0; col < moduleCount; col++)
                for (var row = 0; row < moduleCount - 6; row++)
                    qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col) && (lostPoint += 40);
            var darkCount = 0;
            for (var col = 0; col < moduleCount; col++)
                for (var row = 0; row < moduleCount; row++)
                    qrCode.isDark(row, col) && darkCount++;
            var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
            return lostPoint += ratio * 10, lostPoint;
        };
        QRUtil.prototype.static_isSupportCanvas = function () {
            return typeof CanvasRenderingContext2D != "undefined";
        };
        QRUtil._getTypeNumber = function (sText, nCorrectLevel) {
            var nType = 1;
            var length = QRUtil._getUTF8Length(sText);
            for (var i = 0, len = QRUtil.QRCodeLimitLength.length; i <= len; i++) {
                var nLimit = 0;
                switch (nCorrectLevel) {
                    case qr.QRErrorCorrectLevel.L:
                        nLimit = QRUtil.QRCodeLimitLength[i][0];
                        break;
                    case qr.QRErrorCorrectLevel.M:
                        nLimit = QRUtil.QRCodeLimitLength[i][1];
                        break;
                    case qr.QRErrorCorrectLevel.Q:
                        nLimit = QRUtil.QRCodeLimitLength[i][2];
                        break;
                    case qr.QRErrorCorrectLevel.H:
                        nLimit = QRUtil.QRCodeLimitLength[i][3];
                        break;
                }
                if (length <= nLimit) {
                    break;
                }
                else {
                    nType++;
                }
            }
            if (nType > QRUtil.QRCodeLimitLength.length) {
                throw new Error("Too long data");
            }
            return nType;
        };
        QRUtil._getUTF8Length = function (sText) {
            var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
            return replacedText.length + (replacedText.length != sText ? 3 : 0);
        };
        QRUtil.PATTERN_POSITION_TABLE = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]];
        QRUtil.G15 = 1335;
        QRUtil.G18 = 7973;
        QRUtil.G15_MASK = 21522;
        ///////////////////////////
        QRUtil.QRCodeLimitLength = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
        return QRUtil;
    }());
    qr.QRUtil = QRUtil;
    __reflect(QRUtil.prototype, "qr.QRUtil");
})(qr || (qr = {}));

;window.Main = Main;