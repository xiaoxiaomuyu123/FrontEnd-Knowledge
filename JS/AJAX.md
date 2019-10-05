# AJAX
https://www.nowcoder.com/tutorial/96/7bf81ef089184fdebeec58822b6e93fd
## Ajax解决浏览器缓存问题
## 将原生的ajax封装成promise 
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