### 允许跨域
```javascript
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
```


### 关闭电脑 端口
1. lsof -i tcp: [port] 
 将port换成被占用的端口(如：8086、9998)
2. 找到进程的PID,使用kill命令：kill PID（进程的PID，如2044）