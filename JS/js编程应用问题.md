### 1.对象深度克隆的简单实现    

```
function deepClone(obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
        for(key in obj){
            if(obj.hasOwnProperty(key)){
            
                //判断ojb子元素是否为对象，如果是，递归复制
                
                if(obj[key]&&typeof obj[key] ==="object"){
                    objClone[key] = deepClone(obj[key]);
                }else{
                
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}    
```


```
function deepCopy(obj){  //深拷贝
    var newObj = {};
    if(typeof obj != 'object'){
        
        return obj;
    }
    for(var attr in obj){  
        newObj[attr] = deepCopy(obj[attr]); 
    }
    
    return newObj;    
}
```

```
function deepClone(obj){
    let _obj = JSON.stringify(obj),
        objClone = JSON.parse(_obj);
    return objClone
}    
```


### 实现js中所有对象的深度克隆（包装对象，Date对象，正则对象）     


### 2. js怎么控制一次加载一张图片，加载完后再加载下一张     

### 3. 如何实现sleep的效果（es5或者es6）        


### 4. 去除字符串首尾空格          

 
### 5. JS的全排列            


### 6. 写一个函数，第一秒打印1，第二秒打印2        
  

### 7. 写个函数，可以转化下划线命名到驼峰命名       
   

### 8. js字符串转数字的方法    

通过函数parseInt（），可解析一个字符串，并返回一个整数，语法为parseInt（string ,radix）    

### 9. JavaScript中的轮播实现原理？假如一个页面上有两个轮播，你会怎么实现？           


### 10. 怎么实现一个计算一年中有多少周？        


### 11. 防抖节流

```
function debounce(fn, delay) {
    let timer = null;
    return function() {
        let arg = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, arg), delay)
    }
}
```

### 12. 如何求两个数组的交集？         


### 13.拍平一个数组

```
function fn(arr){
　　　　let arr1 = []
      arr.forEach((val)=>{
         if(val instanceof Array){
             arr1 = arr1.concat(fn(val))
         }else{
             arr1.push(val)
         }
      })
      return arr1
 }
```    

```
function fn(arr){
    return arr.reduce((prev,cur)=>{
        return prev.concat(Array.isArray(cur)?fn(cur):cur)
    },[])
}
```    
   
```
function fn(arr){
    let arr1 = [];
    let bStop = true;
    arr.forEach((val)=>{
        if(Array.isArray(val)){
            arr1.push(...val);
            bStop = false
        }else{
            arr1.push(val)
        }
    })
    if(bStop){
        return arr1;
    }
    return fn(arr1)
}
```    
   
```
function flatten(arr){
     while(arr.some(item => Array.isArray(item))){
           arr =  [].concat.apply([],arr);
     }
      return arr;
}
```   

```
let arr1 = arr.toString().split(',').map((val)=>{
            return parseInt(val)
        })
        console.log(arr1)
```

### 14. 把数字转换成中文    
   
```

```
