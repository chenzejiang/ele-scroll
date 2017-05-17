/*
 【API说明】eleScroll()
 设置重置参数, 如下：
 1.top=>增加或减少差值  类型：Number 默认：0
 2.time=>动画执行时间，单位：秒 默认：1  类型：Number
 3.targetFirst=>第一次调用插件的时候,滚动到指定位置或元素 #div|.div|div|Number
 4.speed 动画的规则 仅支持 swing 快到慢 && linear 匀速  默认：linear  默认jQuery提供"linear" 和 "swing"
 5.event 绑定元素触发滚动的事件 默认：click
 6.initBefore=>初始化插件之前
 7.initAfter=>初始化插件之后
 8.clickBefore=>事件触发之前
 9.clickAfter=>事件触发之后
 */
(function ($) {
    $.fn.eleScroll = function (options) {
        var settings = {
            top: 0,
            time:1,
            targetFirst:null,
            speed:"linear",
            event: 'click',
            initAfter:function(){},
            initBefore:function(){},
            clickBefore:function(){},
            clickAfter:function(){}
        };
        $.extend(true, settings, options);  // 合并
        // 初始化之前  PS:要写在extend之后
        settings.initBefore();
        var windowHeight = $(window).height();        //获取浏览器窗口高度
        var documentHeight = $(document).height();        //获取文档高度
        var $thisAll = this;
        return this.each(function(i){
            var _this = $(this);
            var _target = _this.attr("data-target");
            var _thisTop = 0;

            function animate(flag){
                var t = (flag===true) ? settings.targetFirst :  _target;
                if(t != null){
                    if(isNaN(t) === false){  // false => Number
                        _thisTop = Number(t);
                    }else{  // true => Ele
                        if(_target === 'top'){
                            _thisTop = 0;
                        }else if(_target === 'bottom'){
                            _thisTop = documentHeight - windowHeight;
                        }else{
                            _thisTop =  $(t).offset().top + settings.top;
                        }
                    }
                }
                $("html,body").animate({scrollTop:_thisTop}, settings.time * 1000,settings.speed);
            }

            // 如果 targetFirst 有值
            if(settings.targetFirst != null && $thisAll.length-1 === i){
                animate(true);
            }

            _this.on(settings.event,function(){
                settings.clickBefore();
                animate();
                settings.clickAfter();
                return false;
            });
            // 初始化之后
            if($thisAll.length-1 === i){
                settings.initAfter();
            }
        });
    };
})(jQuery);