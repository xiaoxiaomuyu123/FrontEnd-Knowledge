# AJAX
https://www.nowcoder.com/tutorial/96/7bf81ef089184fdebeec58822b6e93fd

## 1. 手写 AJAX

```
var xhr = new XMLHttpRequest();
xhr.open('GET', '/');
xhr.onreadystatechange = function () {
    console.log(xhr)
};
xhr.send();

```

## 2. Ajax 状态码

readyState 说明：
- 0-未初始化，还没有调用 send（）方法；
- 1-载入，已经调用 send（）方法，正在发送请求；
- 2-载入完成，send（）方法执行完成，已经接受到全部相应内容；
- 3-交互，正在解析相应内容；
- 4-完成，解析完成，客户端可以调用


## 3. Ajax解决浏览器缓存问题

## 4. 将原生的ajax封装成promise 

```
var  myNewAjax=function(url){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('get',url);
        xhr.send(data);
        xhr.onreadystatechange=function(){
            if(xhr.status==200&&readyState==4){
                var json=JSON.parse(xhr.responseText);
                resolve(json)
            }else if(xhr.readyState==4&&xhr.status!=200){
                reject('error');
            }
        }
    })
}
```

## 5. AJAX 的缺点

- 无法使用前进和后退的功能
- 对 SEO 不友好

## 6. AJAX 是前端渲染还是后端渲染   
是前端渲染


## 7. AJAX 除了用 onreadystatechange 还可以用什么方法？

可以用 onload 方法。他与 onreadystatechange 的区别是，onreadystatechange 有五种状态，可以访问到 readystate 2， 3， 4 三个值。而 onload 只能是 readystate 为 4 的时候，也就是只有收到响应的时候，才会被触发调用。


onreadystatechange 兼容性更好，一些较老的浏览器不支持 onload 事件。



