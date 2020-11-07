# AJAX

## AJAX基本原理

a sync JavaScript and xml[引用了XMLHttpRequest对象]

### AJAX的特点

#### 优点

- 不需要插件支持
- （重点）不刷新页面即可获得可更新的数据，良好的用户体验
- 提升了web的性能，减轻了服务器和带宽的负担

#### 缺点

- 前进、后退的功能被破坏
- 搜索引擎的支持度不够
- 不同版本的浏览器XMLHttpRequest对象支持度不够（如IE5-）
- 存在跨域问题（同源）

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
            if(xmlhttp.status ===200){
                //表示服务端正常响应客户端
                ...
                var str = xmlhttp.responseText
                //如果服务端传递过来的是json字符串，则我们可以通过如下方式把它解析成JSON对象
                var json = JSON.parse(str)
                ...
            }
        }
    }
    //3.
    xmlhttp.open('post|get','目标URL'，true|false) //true为异步，false为同步
    //4.
    xmlhttp.send();//如果要传递数据给服务器，把数据作为参数传过去；否则传null
}
```

ajax设置get请求参数，加在目标url后面 比如‘?a=100&b=200’

ajax设置post请求参数，加在send()函数中 比如‘?a=100&b=200’

------



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

> 响应的状态码，这个状态码也有5个类型的值
>
> 1xx  ..
>
> 2xx  表示服务端正常响应客户端
>
> 3xx  代表服务端资源没有发生改变
>
> 4xx  代表资源错误
>
> 5xx 代表服务端错误

3.responseText和responseXML

> responseText表示以文本的信息获取服务端的响应，获取的就是字符串。
>
> responseXML表示当服务端以xml格式返回客户端时，则使用此属性去接受，获取的是DOM对象

##   XML简介

> xml是可拓展标记语言，被设计用来传输与存储数据，xml与html类似，不同的是html中都是预定义标签，xml中无预定义，全是自定义标签

## HTTP介绍

### 网络协议

> 前后端商量好的沟通准则。服务器要能读得懂客户端的请求，客户端也要懂服务器的响应，他们之间就需要一个协议，如TCP,HTTP,HTTPS(加强版的HTTP，更加安全),FTP

### 三次握手四次挥手

> HTTP基于TCP，是面向连接的协议，建立连接要通过三次握手，断开连接要经过四次挥手

### HTTP协议的构成

> #### 请求：
>
> ##### 	请求头-request header(请求头内容关键)
>
> ​			POST  /s?ie=utf-8  HTTP/1.1
>
> ​			Host: xxxx.com
>
> ​			Cookie：name=xxxx
>
> ​			Content-type: application/x-www-form-urlencoded
>
> ​			User-Agent:chrome 83
>
> ##### 	请求体-request body
>
> ​			username=admin&password=admin
>
> #### 响应
>
> ##### 	响应头-response header
>
> ​			HTTP/1.1  200  OK
>
> ​			Content-type:text/html;charset=utf-8
>
> ​			Content-length:2048
>
> ​			content-encoding:gzip
>
> ##### 	响应体-response body
>
> ```javascript
> <html>
> 	<head>
>     </head>
> 	<body>
>     </body>
> </html>
> ```
>
> ​			

# jQuery中的AJAX

## get请求

$.get(url, [data], [callback], [type]) 

url:请求的 URL 地址。

 data:请求携带的参数。

 callback:载入成功时回调函数。

 type:设置返回内容格式，xml, html, script, json, text, _default。



## post请求

$.post(url, [data], [callback], [type]) 

url:请求的 URL 地址。

 data:请求携带的参数。

 callback:载入成功时回调函数。

 type:设置返回内容格式，xml, html, script, json, text, _default。



# Axios发送AJAX请求

## get请求

```javascript
//配置baseURL
axios.defaults.baseURL = 'http://xxx.xxx.xxx:xxx';

// 为给定 ID 的 user 创建请求  
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// 上面的请求也可以这样做
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

## post请求

```javascript
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

## 用axios函数发送请求

```javascript
axios({
        //请求方法
        method:'POST',
        //url
        url:'/axios-server',
        //url参数
        params:{
          id:100,
          host:5900
        },
        //头信息
        headers:{
          a:100,
          b:299
        },
        //请求体参数
        data:{
          username:'admin',
          password:'admin'
        }
      }).then(response => {
        //响应状态码
        console.log(response.status);
        //响应状态字符串
        console.log(response.statusText);
        //响应头信息
        console.log(response.headers);
        //响应体信息
        console.log(response.data);
      })
```

#   fetch函数发送AJAX请求

```javascript
fetch('http://localhost:8000/fetch-server?id=1',{   //url后添加头参数?id=1
        method:'POST',
        headers:{
          name:'wh'
        },
        body:'username=admin&password=admin'
      }).then(response => {
        return response.json();
      }).then(response => {
        console.log(response);
      })
```



------



# 跨域问题

## 同源策略

> 同源策略（Same-Origin Policy）最早由Netscape公司提出，是浏览器的安全策略
>
> 同源就是：协议、域名、端口号必须完全相等
>
> 违背了同源策略就是跨域

```javascript
//客户端
    const btn = document.querySelector('button')
    btn.onclick = function () {
      const x = new XMLHttpRequest()
      x.open('GET','/data')
      x.send()
      x.onreadystatechange = function () {
        if (x.readyState ===4){
          if (x.status >=200 && x.status <300){
            console.log(x.response);
          }
        }
      }
    }



//服务端
const express = require('express')
const app = express()

app.get('/home',(request,response) => {
  //响应一个页面
  response.sendFile(__dirname + '/index.html')
})

app.get('/data',(request,response) => {
  //响应数据
  response.send('用户数据')
})

app.listen(9000,()=>{
  console.log('服务启动')
})


```

![sexy](C:\Users\13819\Desktop\sexy.jpg)