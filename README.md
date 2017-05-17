# jQuery 插件 之 ele-scroll

###【API说明】eleScroll()
#### 设置重置参数, 如下：
 1. top=>增加或减少差值  类型：Number 默认：0
 2. time=>动画执行时间，单位：秒 默认：1  类型：Number
 3. targetFirst=>第一次调用插件的时候,滚动到指定位置或元素 #div|.div|div|Number
 4. speed 动画的规则 仅支持 swing 快到慢 && linear 匀速 默认：linear  默认jQuery提供"linear" 和 "swing"
 5. event 绑定元素触发滚动的事件 默认：click
 6. initBefore=>初始化插件之前
 7. initAfter=>初始化插件之后
 8. clickBefore=>事件触发之前
 9. clickAfter=>事件触发之后

> 语法使用

```js

$("a").eleScroll({
    top:-50,
    time:1,
    speed:"swing",
    event:"click",
    initBefore:function(){
      console.log("初始化之前");
    },
    initAfter:function(){
      console.log("初始化之后");
    },
    clickBefore:function(){
      console.log("事件触发之前");
    },
    clickAfter:function(){
      console.log("事件触发之后");
    }
});

```



> 实例地址

[ele-scroll](http://demo.chenzejiang.com/ele-scroll/index.html)
