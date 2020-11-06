# AJAX

a sync JavaScript and xml[引用了XMLHttpRequest对象]

### 同步请求和异步请求

- 异步请求是局部刷新，同步请求是页面全局刷新

- 本质来说，异步请求就有浏览器开启一个新线程去发送请求到服务端，而主线程不受影响，直到这个异步线程从服务端响应回来，然后主线程就要针对这个回来的响应进行处理。


### AJAX的对象

XMLHttpRequest对象，专门用来发送异步请求的对象（ie7之后，safari，chrome都是支持的）

### AJAX代码编写的步骤

1.创建XMLHttpRequest对象

```javascript
var xmlhttp;
function ajaxDemo(){
    //1.
    if(window.XMLHttpRequest){
        //IE7+,CHROME,SAFARI,OPERA
        xmlhttp = new XMLHttpRequest();
    }else {
        //IE5,6
        xmlhttp = new ActiveXObject('microsoft.XMLHttp')
    }
}
```

2.注册回调函数

```javascript
var xmlhttp;
function ajaxDemo(){
    //1.
    if(window.XMLHttpRequest){
        //IE7+,CHROME,SAFARI,OPERA
        xmlhttp = new XMLHttpRequest();
    }else {
        //IE5,6
        xmlhttp = new ActiveXObject('microsoft.XMLHttp')
    }
    //2.
    xmlhttp.onreadystatechange = function(){
        //执行你的异步的代码逻辑
        
    }
}
```

3.建立与服务端的连接

```javascript
var xmlhttp;
function ajaxDemo(){
    //1.
    if(window.XMLHttpRequest){
        //IE7+,CHROME,SAFARI,OPERA
        xmlhttp = new XMLHttpRequest();
    }else {
        //IE5,6
        xmlhttp = new ActiveXObject('microsoft.XMLHttp')
    }
    //2.
    xmlhttp.onreadystatechange = function(){
        //执行你的异步的代码逻辑
        
    }
    //3.
    xmlhttp.open('post|get','目标URL'，true|false) //true为异步，false为同步
}
```

4.发送请求

```javascript
var xmlhttp;
function ajaxDemo(){
    //1.
    if(window.XMLHttpRequest){
        //IE7+,CHROME,SAFARI,OPERA
        xmlhttp = new XMLHttpRequest();
    }else {
        //IE5,6
        xmlhttp = new ActiveXObject('microsoft.XMLHttp')
    }
    //2.
    xmlhttp.onreadystatechange = function(){
        //执行你的异步的代码逻辑
        //当readystate的值变为4的时候，才去处理
        if(xmlhttp.readystate === 4){
            
        }
    }
    //3.
    xmlhttp.open('post|get','目标URL'，true|false) //true为异步，false为同步
    //4.
    xmlhttp.send();//如果要传递数据给服务器，把数据作为参数传过去；否则传null
}
```

###  XMLHttpRequest对象的属性

1.readystate属性

> ​	此属性0-4的值，共5种状态
>
> 0 表示请求未初始化
>
> 1 服务器已建立连接
>
> 2 请求已接受
>
> 3 请求处理中
>
> 4 请求已完成，响应已就绪

2.status属性

aaaasss

  

  

