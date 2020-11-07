//1.引入
// import express from 'express'
const express =require('express')
//2.创建应用对象
const app = express();

//3.创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装

app.get('/server',(request,response)=>{
  //设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  //设置响应体
  response.send('Hello Ajax')
})
//可以接受任意类型的请求
app.all('/server',(request,response)=>{
  //设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  //响应头
  response.setHeader('Access-Control-Allow-Headers','*')  //自定义头时需要
  //设置响应体
  response.send('Hello Ajax POST')
})

app.all('/json-server',(request,response)=>{
  //设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  //响应头
  response.setHeader('Access-Control-Allow-Headers','*')
  //响应一个数据
  const data = {
    name:'wh'
  }
  //对象进行字符串转换
  let str = JSON.stringify(data)
  //设置响应体
  //
  response.send(str)
})

//针对ie缓存问题
app.get('/ie',(request,response)=>{
  //设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  //设置响应体
  response.send('Hello IE -2')
})

//延时响应
app.get('/delay',(request,response)=> {
  //设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  //设置响应体
  setTimeout(() => {
    response.send('延时响应')
  }, 3000)
})

//jQuery服务
app.all('/jquery-server',(request,response)=> {
  //设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers','*')  //自定义头时需要
  //设置响应体
  // response.send('Hello Jquery AJAX')
  const data = {name:'wh',age:18}
  response.send(JSON.stringify(data))
})

//axios服务
app.all('/axios-server',(request,response)=> {
  //设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers','*')  //自定义头时需要
  //设置响应体
  // response.send('Hello Jquery AJAX')
  const data = {name:'wh',age:18}
  response.send(JSON.stringify(data))
})

//fetch服务
app.all('/fetch-server',(request,response)=> {
  //设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers','*')  //自定义头时需要
  //设置响应体
  // response.send('Hello Jquery AJAX')
  const data = {name:'wh',age:18}
  response.send(JSON.stringify(data))
})

//4.监听端口启动服务
app.listen(8000,()=>{
  console.log('服务已经启动，8000端口监听中......')
})