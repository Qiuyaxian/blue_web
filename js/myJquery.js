define(function(require,exports,module){
    //框架要求
    //1.具备常用的元素选取
    //2.具备常见的事件方法
    //3.具备设置样式属性
    //4.动画运动形式
    function MyFrame(mix){
        this.ele=[];
        switch(typeof mix) {
            case 'function':
                bindEvent(window,'load',mix);
                break;
            case 'string':
                switch(mix.charAt(0)) {
                    case '#':
                        var oDiv = document.getElementById(mix.substring(1));
                        this.ele.push(oDiv);
                        break;
                    case '.':
                        this.ele = getByClass(document,mix.substring(1));
                        break;
                    default:
                        this.ele = document.getElementsByTagName(mix);
                        break;
                };
                break;
            case 'object':
                this.ele.push(mix);
                break;
        };
    };
    //设置事件
    MyFrame.prototype.on = function(events,fn){
         for(var i=0;i<this.ele.length;i++){
             bindEvent(this.ele[i],events,fn);
         };
         return this;
    };
    //点击事件
    MyFrame.prototype.click = function(fn){
        this.on('click',fn);
        return this;
    };
    //样式
    MyFrame.prototype.css = function(attr,value){
        if(arguments.length == 2){
            for(var i=0;i<this.ele.length;i++){
                 this.ele[i].style[attr] = value;
            };
        }else if(arguments.length == 1){
            if(typeof attr == 'object'){
                for(var key in attr){
                    for(var i=0;i<this.ele.length;i++){
                        this.ele[i].style[key] = attr[key]; 
                    };
                };
            };
        };
        return this;
    };
    //显示
    MyFrame.prototype.show = function(){
        for(var i=0;i<this.ele.length;i++){
            this.ele[i].style.display='block';
        };
    };
    //隐藏
    MyFrame.prototype.hide = function(){
        for(var i=0;i<this.ele.length;i++){
            this.ele[i].style.display='none';
        };
    };
    //鼠标移近移出
    MyFrame.prototype.hover = function(fn1,fn2){
        this.on('mouseover',fn1);
        this.on('mouseout',fn2);
    }
    MyFrame.prototype.html = function(){
        for(var i=0;i<this.ele.length;i++){
            return this.ele[i].innerHTML;
        };
    };
    //选取于元素
    MyFrame.prototype.eq = function(n){
         return $(this.ele[n]);
    };
    //获取offset值
    MyFrame.prototype.offset = function(){
        var left = 0,top=0,width=0,height=0;
        for(var i=0;i<this.ele.length;i++){
            return {
                  left : this.ele[i].offsetLeft,
                   top : this.ele[i].offsetTop,
                 width : this.ele[i].offsetWidth,
                height : this.ele[i].offsetHeight  
            };
        };
    };
    //获取第一个节点
    MyFrame.prototype.first = function(){
        return $(this.ele[0]);
    };
    //获取最后一个节点
    MyFrame.prototype.last = function(){
        return $(this.ele[this.ele.length-1]);
    };
    //设置属性
    MyFrame.prototype.attr = function(attr,value){
        if(arguments.length == 2){
            for(var i=0;i<this.ele.length;i++){
                 this.ele[i].setAttribute(attr,value);
            };
        }else if(arguments.length == 1){
                 this.ele[0].getAttribute(attr); 
        };
        return this;
    };
    //获取宽度
    MyFrame.prototype.width = function(){
        for(var i=0;i<this.ele.length;i++){
            return getStyle(this.ele[i], 'width');
        };
        return this;
    };
    //获取高度
    MyFrame.prototype.height = function(){
        for(var i=0;i<this.ele.length;i++){
            return getStyle(this.ele[i], 'height');
        };
        return this;
    };
    //添加样式
    MyFrame.prototype.addClass = function(ClassName){
        for(var i=0;i<this.ele.length;i++){
            if(this.ele[i].className == ""){
                return this.ele[i].setAttribute('class',ClassName);
                //return this.ele[i].className = ClassName;
            }else{
                return this.ele[i].className+=" "+ClassName;
            };
        };
    };
    //移除样式
    MyFrame.prototype.removeClass = function(ClassName){
        for(var i=0;i<this.ele.length;i++){
            var names = this.ele[i].className.split(' ');
            for(var j=0;j<names.length;j++){
                if(names[j] == ClassName){
                    delete names[j];
                };
            };
            this.ele[i].className = names.join(' ');
            return this.ele[i].className;
        };
    };
    //样式查找
    MyFrame.prototype.hasClass = function(ClassName){
        for(var i=0;i<this.ele.length;i++){
           var names = this.ele[i].className.split(' ');
           for(var j=0;j<names.length;j++){
                if(names[j] == ClassName){
                    return true;
                }else{
                    return false;
                };
            };
        };
    };
    //键盘按下
    MyFrame.prototype.keydown = function(data,fn){
        
    }
    //查找
    MyFrame.prototype.find = function(obj){
        var arr = [];
        if(obj.charAt(0) == '.'){
            for(var i=0;i<this.ele.length;i++){
                arr = arr.concat(getByClass(this.ele[i].obj.substring(1)));
            }
        }else{
            for(var i=0;i<this.ele.length;i++){
                arr = arr.concat(toArray(this.ele[i].getElementsByTagName(obj)));
            }
        }
        
        return $(arr);
    }
    //索引
    MyFrame.prototype.index = function(){
        
    }
    //遍历
    MyFrame.prototype.each = function(){
         
    }
    //动画
    MyFrame.prototype.animate = function(json, times, fx, fun){
        for(var i=0;i<this.ele.length;i++){
            return startMove(this.ele[i],json,times,fx,fun);
        };
    };
    //绑定事件
    MyFrame.prototype.bind = function(events,fun){
        for(var i=0;i<this.ele.length;i++){
            bindEvent(this.ele[i],events,fun);
        };
    };
    MyFrame.prototype.unbind = function(events,fun){
        for(var i=0;i<this.ele.length;i++){
            removeEvent(this.ele[i],events,fun);
        };
    };
    //css3动画
    MyFrame.prototype.transitionend = function(fun){
        for(var i=0;i<this.ele.length;i++){
            bindEvent(this.ele[i],'webkitTransitionEnd',fun);
            bindEvent(this.ele[i],'mozTransitionEnd',fun);
            bindEvent(this.ele[i],'msTransitionEnd',fun);
            bindEvent(this.ele[i],'oTransitionEnd',fun);
            bindEvent(this.ele[i],'transitionend',fun);
        };
    };
    function toArray(elems){
        var arr = [];
        for(var i=0;i<elems.length;i++){
            arr.push(elems[i]);
        }
        return arr;
    }
    function startMove(obj,json,times,fx,fun){
        var iCur = {};
        var StartTime = Nowtimes();
        if( typeof times == 'undefined' ){
            times = 400;
            fx = 'linear';
        }
            
        if( typeof times == 'string' ){
            if(typeof fx == 'function'){
                 fn = fx;
            }
            fx = times;
            times = 400;
        }
        else if(typeof times == 'function'){
            fn = times;
            times = 400;
            fx = 'linear';
        }
        else if(typeof times == 'number'){
            if(typeof fx == 'function'){
                fn = fx;
                fx = 'linear';
            }
            else if(typeof fx == 'undefined'){
                 fx = 'linear';
            };
        };
        for(var attr in json){
            iCur[attr] = 0;
            if(attr == "opacity"){
                iCur[attr] = Math.round(getStyle(obj,attr));
            }else{
                iCur[attr] = parseInt(getStyle(obj,attr));
            };
        };
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var ChangeTimes = Nowtimes();
            var scale = 1-Math.max(0,StartTime + times - ChangeTimes)/times;
            for(var attr in json){
                var value = Tween[fx](scale*times,iCur[attr],json[attr] - iCur[attr],times);
                if(attr == 'opacity'){
                    obj.style.filter = 'alpha(opacity='+ value +')';
                    obj.style.opacity = value/100;
                }
                else{
                    obj.style[attr] = value + 'px';
                };
            };
            if(scale == 1){
                clearInterval(obj.timer);
                if(fun){
                     fun.call(obj);
                };
            };
        },30);
          //获取当前时间
        function Nowtimes(){
            return (new Date()).getTime();
        }
    };
    //
    $.fn={};
    $.fn.extend = function(json){
        for(var key in json){
            MyFrame.prototype[key] = json[attr];
        }
    }
    //扩展
    $.extend = function(json){
         for(var key in json){
            $[key] = json[attr];
        };
    };
    //事件绑定
    function bindEvent(obj,events,fn){
        if(obj.addEventListener){
            obj.addEventListener(events,function(ev){
                 if( fn() == false){
                      ev.preventDefault();
                      ev.cancelBubble = true;
                 }
            },false);
        }else{
            obj.attachEvent('on'+events,function(){
                if( fn() == false){
                    window.event.cancelBubble = true;
                    return false;
                };
            });
        };
    };
    //移除事件
    function removeEvent(obj,event,fn){
        if(obj.removeEventListener){
            obj.removeEventListener(events,function(ev){
                 if( fn() == false){
                      ev.preventDefault();
                      ev.cancelBubble = true;
                 }
            },false);
        }else{
            obj.detachEvent('on'+events,function(){
                if( fn() == false){
                    window.event.cancelBubble = true;
                    return false;
                };
            });
        };
    }
    //获取clas名
    function getByClass(obj,ClassName){
        var AllClass = obj.getElementsByTagName('*');
        var ret = [];
        for(var i=0;i<AllClass.length;i++){
            if(AllClass[i].className == ClassName){
                ret.push(AllClass[i]);
            };
        };
        return ret; 
    };
    //获取样式
    function getStyle(obj,attr){
        if(obj.currentStyle){
            return obj.currentStyle[attr];
        }else{
            return getComputedStyle(obj,false)[attr];
        };
    };
    //Tween运动形式
    var Tween = {
            linear: function (t, b, c, d){  //匀速
                return c*t/d + b;
            },
            easeIn: function(t, b, c, d){  //加速曲线
                return c*(t/=d)*t + b;
            },
            easeOut: function(t, b, c, d){  //减速曲线
                return -c *(t/=d)*(t-2) + b;
            },
            easeBoth: function(t, b, c, d){  //加速减速曲线
                if ((t/=d/2) < 1) {
                    return c/2*t*t + b;
                }
                return -c/2 * ((--t)*(t-2) - 1) + b;
            },
            easeInStrong: function(t, b, c, d){  //加加速曲线
                return c*(t/=d)*t*t*t + b;
            },
            easeOutStrong: function(t, b, c, d){  //减减速曲线
                return -c * ((t=t/d-1)*t*t*t - 1) + b;
            },
            easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
                if ((t/=d/2) < 1) {
                    return c/2*t*t*t*t + b;
                }
                return -c/2 * ((t-=2)*t*t*t - 2) + b;
            },
            elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
                if (t === 0) { 
                    return b; 
                }
                if ( (t /= d) == 1 ) {
                    return b+c; 
                }
                if (!p) {
                    p=d*0.3; 
                }
                if (!a || a < Math.abs(c)) {
                    a = c; 
                    var s = p/4;
                } else {
                    var s = p/(2*Math.PI) * Math.asin (c/a);
                }
                return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            },
            elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
                if (t === 0) {
                    return b;
                }
                if ( (t /= d) == 1 ) {
                    return b+c;
                }
                if (!p) {
                    p=d*0.3;
                }
                if (!a || a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                } else {
                    var s = p/(2*Math.PI) * Math.asin (c/a);
                }
                return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
            },    
            elasticBoth: function(t, b, c, d, a, p){
                if (t === 0) {
                    return b;
                }
                if ( (t /= d/2) == 2 ) {
                    return b+c;
                }
                if (!p) {
                    p = d*(0.3*1.5);
                }
                if ( !a || a < Math.abs(c) ) {
                    a = c; 
                    var s = p/4;
                }
                else {
                    var s = p/(2*Math.PI) * Math.asin (c/a);
                }
                if (t < 1) {
                    return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
                            Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
                }
                return a*Math.pow(2,-10*(t-=1)) * 
                        Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
            },
            backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
                if (typeof s == 'undefined') {
                   s = 1.70158;
                }
                return c*(t/=d)*t*((s+1)*t - s) + b;
            },
            backOut: function(t, b, c, d, s){
                if (typeof s == 'undefined') {
                    s = 3.70158;  //回缩的距离
                }
                return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
            }, 
            backBoth: function(t, b, c, d, s){
                if (typeof s == 'undefined') {
                    s = 1.70158; 
                }
                if ((t /= d/2 ) < 1) {
                    return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
                }
                return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
            },
            bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
                return c - Tween['bounceOut'](d-t, 0, c, d) + b;
            },       
            bounceOut: function(t, b, c, d){
                if ((t/=d) < (1/2.75)) {
                    return c*(7.5625*t*t) + b;
                } else if (t < (2/2.75)) {
                    return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
                } else if (t < (2.5/2.75)) {
                    return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
                }
                return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
            },      
            bounceBoth: function(t, b, c, d){
                if (t < d/2) {
                    return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
                }
                return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
            }
    };
    //初始化
    function $(mix){
        return new MyFrame(mix);
    };

    exports.myFrams=$;
})