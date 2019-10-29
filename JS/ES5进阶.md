
# 二、BOM 浏览器对象模型

# 三、DOM 文档对象模型   

### 1.window.onload 和 window.addEventListener    

window.onload 是页面中所有的资源都加载完，包括图片视频音频都加载完以后才执行；document.addEventListener 是 DOM 渲染完就可以执行了，不用等图片视频音频加载完。    

### 1. 有了解过事件模型吗，DOM0级和DOM2级有什么区别，DOM的分级是什么



# 四、事件   

## 1.问题：什么是事件流？     

HTML中与javascript交互是通过事件驱动来实现的，例如鼠标点击事件onclick、页面的滚动事件onscroll等等，可以向文档或者文档中的元素添加事件侦听器来预订事件。事件流就是告诉我们这些事件是在什么时候被调用的。也就是说，事件流描述了页面接收事件的顺序。DOM2 级事件流包括：事件捕获阶段，处于目标阶段和事件冒泡阶段。DOM2级新增了指定事件处理程序的操作，addEventListener。第一个参数是要处理的事件名，第二个参数是绑定的回调函数，第三个参数是布尔值，true 表示在捕获阶段调用，flase 表示在冒泡阶段调用，默认是冒泡阶段。    
 
## 2. 问题：说一下事件委托     

事件委托指的是，不在事件的发生地（直接dom）上设置监听函数，而是在其父元素上设置监听函数，通过事件冒泡，父元素可以监听到子元素上事件的触发，通过判断事件发生元素DOM的类型，来做出不同的响应。   
好处：减少对内存的消耗     

## 3.  mouseover和mouseenter的区别    

mouseover：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程。对应的移除事件是mouseout    
 mouseenter：当鼠标移除元素本身（不包含元素的子元素）会触发事件，也就是不会冒泡，对应的移除事件是mouseleave     
 
## 4. 拖拽功能的实现    

## 5. js监听对象属性的改变


# 五、表单脚本


# 六、错误处理与调试    
 
### 1. 平时是怎么调试JS的    

一般用Chrome自带的控制台；
webstrom 的分步调试工具 debug

# 七、JSON   

json 是 js 的一个对象，同时也是一种数据格式。js中语法{属性名：属性值，属性名：属性值，属性名：属性值…….}   
JSON.stringify（）   
JSON.parse（）


# 八、cookie  localStorage  sessionStorage session

- cookie，locastorage，sessionStorage   
三者都保存在浏览器端，且是同源的，这里的同源是指一级域名相同。cookie 用来保存客户浏览器请求服务器页面的请求信息，适合用于用户登录的场景。HTML5的WebStorage提供了两种API：localStorage（本地存储）和sessionStorage（会话存储）。WebStorage的目的是克服由cookie所带来的一些限制，当数据需要被严格控制在客户端时，不需要持续的将数据发回服务器。他们的区别：
    
    - 生命周期   
    cookie：可以通过expires设置失效时间，不设置默认关闭浏览器即失效。   
    localStorage：除非手动清除，否则永久保存    
    sessionStorage：仅在当前会话时候生效，关闭页面即失效   
    
    - 存储大小  
    cookie:4KB左右   
    localStorage、sessionStorage:可以保存5M的信息   
    
    - http 请求   
    cookie:每次都会携带在http头中，过多使用cookie会带来性能问题   
    localStorage、sessionStorage:仅在客户端（即浏览器）中保存，不参与和服务器的通信   
    
- cookie 和 session    
HTTP是一种无状态的协议，为了分辨链接是谁发起的，就需要我们自己去解决这个问题。不然有些情况下即使是同一个网站我们每打开一个页面也都要登录一下。而Session和Cookie就是为解决这个问题而提出来的两个机制。    
session和cookie的作用有点类似，都是为了存储用户相关的信息。不同的是，cookie是存储在本地浏览器，而session存储在服务器。存储在服务器的数据会更加的安全，不容易被窃取。但存储在服务器也有一定的弊端，就是会占用服务器的资源。   
web开发发展至今，cookie和session的使用一般有两种存储方式：

    - 存储在服务端：   
    当浏览器 第一次发送请求时，服务器自动生成了一个HashTable和一个Session ID用来唯一标识这个HashTable，并将其通过响应发送到浏览器。当浏览器第二次发送请求，会将前一次服务器响应中的Session ID放在请求中一并发送到服务器上，服务器从请求中提取出Session ID，并和保存的所有Session ID进行对比，找到这个用户对应的HashTable。
    通过cookie存储一个session_id，然后具体的数据则是保存在session中。如果用户已经登录，则服务器会在cookie中保存一个session_id，下次再次请求的时候，会把该session_id携带上来，服务器根据session_id在session库中获取用户的session数据。就能知道该用户到底是谁，以及之前保存的一些状态信息。这种专业术语叫做server side session。
    
    - 将session数据加密，然后存储在cookie中。这种专业术语叫做client side session    
    
   
#### 1. cookie   

- 保存在浏览器端，记录了一些用户操作信息（包括用户登录信息）。
- 大小限制  
单个cookie保存的数据不能超过4kb。每个域可保存的cookie数量和浏览器相关。
- 应用场景    

  1. 判断用户是否登陆过网站，以便下次登录时能够实现自动登录（或者记住密码）。如果我们删除cookie，则每次登录必须从新填写登录的相关信息。
   2. 保存上次登录的时间等信息。
   3. 保存上次查看的页面
   4. 浏览计数   
   
- 缺点
  1. 大小受限。
  2. 用户可以操作（禁用）cookie，使功能受限。
  3. 安全性较低。
  4. 有些状态不可能保存在客户端。
  5. 每次访问都要传送cookie给服务器，浪费带宽。
  6. cookie数据有路径（path）的概念，可以限制cookie只属于某个路径下。   
  
#### 2. session    

- 当服务器收到请求需要创建session对象时，首先会检查客户端请求中是否包含sessionid。如果有sessionid，服务器将根据该id返回对应session对象。如果客户端请求中没有sessionid，服务器会创建新的session对象，并把sessionid在本次响应中返回给客户端。通常使用cookie方式存储sessionid到客户端，在交互中浏览器按照规则将sessionid发送给服务器。如果用户禁用cookie，则要使用URL重写，可以通过response.encodeURL(url) 进行实现；API对encodeURL的约束为，当浏览器支持Cookie时，url不做任何处理；当浏览器不支持Cookie的时候，将会重写URL将SessionID拼接到访问地址后。  

- session通过类似与Hashtable的数据结构来保存，能支持任何类型的对象。  

- session没有任何大小限制。  

- 应用场景   
  Session用于保存每个用户的专用信息，变量的值保存在服务器端，通过SessionID来区分不同的客户。
  1. 网上商城中的购物车。
  2. 保存用户登录信息。
  3. 将某些数据放入session中，供同一用户的不同页面使用。
  4. 防止用户非法登录。   
  
- 缺点   

  1. Session保存的东西越多，就越占用服务器内存，对于用户在线人数较多的网站，服务器的内存压力会比较大。
  2. 依赖于cookie（sessionID保存在cookie），如果禁用cookie，则要使用URL重写，不安全。
  3. 创建Session变量有很大的随意性，可随时调用，不需要开发者做精确地处理，所以，过度使用session变量将会导致代码不可读而且不好维护。   
  
#### 3. localStorage    

- 是html5新增的API。目的是解决cookies存储容量小（只有4k）的问题。localStorage主要是用来作为本地存储的；localStorage 中一般浏览器支持的容量大小是5M，针对不同的浏览器，localStorage容量大小会有所不同。  
- 同cookies相比，localStorage并且不会随着HTTP传输，这样可以节约带宽。
- 提供一种在cookie之外存储会话数据的路径。
- 提供一种存储大量可以跨会话存在的数据的机制。
- 应用场景：  
常用于长期登录（+判断用户是否已登录），适合长期保存在本地的数据。    
注意：localStorage存储的只能是字符串。
常用API：
  1. setItem(name, value)  
  为指定的 name 设置一个对应的值
  2. getItem(name)  
  根据指定的名字 name 获取对应的值
  3. key(index)  
  获得 index 位置处的值的名字
  4. removeItem(name)  
  删除由 name 指定的名值对儿
  5. clear()  
  清除所有的键值对      
  
#### 4. sessionStorage      

- sessionStorage也是html5新增加的web storage。也是本地存储，容量一般是5M。但是与localStorage不同的是，sessionStorage并不会持久化保存数据，而是仅仅维持一个会话时间。也就是该数据只保持到浏览器关闭。存储在sessionStorage中的数据可以跨越页面刷新而存在。
- API与localStorage类似。
- 应用场景  
  敏感数据的一次登录。如网上银行的登录。     
  
#### 5. localStorage和sessionStorage共同的特点    

- localStorage和sessionStorage都受到浏览器同源策略的限制。不同源的页面无法访问localStorage和sessionStorage。
- 优点
  1. 存储空间更大：cookie为4KB，而WebStorage是5MB。
  2. 节省网络流量：WebStorage不会传送到服务器，存储在本地的数据可以直接获取，也不会像cookie一样美词请求都会传送到服务器，所以减少了客户端和服务器端的交互，节省了网络流量。
  3. 对于那种只需要在用户浏览一组页面期间保存而关闭浏览器后就可以丢弃的数据，sessionStorage会非常方便。
  4. 快速显示：有的数据存储在WebStorage上，再加上浏览器本身的缓存。获取数据时可以从本地获取会比从服务器端获取快得多，所以速度更快。
  5. 安全性：WebStorage不会随着HTTP header发送到服务器端，所以安全性相对于cookie来说比较高一些，不会担心截获，但是仍然存在伪造问题；
  6. WebStorage提供了一些方法，数据操作比cookie方便。    
  
#### 6. cookie、localStorage以及sessionStorage跨域问题的解决    

-  cookie 

    - 在服务器端的响应头中的Set-Cookie字段，设置值domain为一级域名，则相应的二级域名可以访问次cookie。例如：`Set-Cookie: 'id=123;domain=baidu.com'`。
    - 两个网页一级域名相同，只是二级域名不同，浏览器允许通过设置document.domain共享 Cookie。     
    
- localStorage和sessionStorage   

    - 通过html5新增api——postMessage实现跨域。
    - **设置document.domain属性不能实现跨域。**


