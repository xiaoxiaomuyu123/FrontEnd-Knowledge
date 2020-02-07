## 一、什么是 HTML，什么是 HTML5

- HTML 是不是一种编程语言，而是一种标记语言。这种标记语言是用标签来描述网页的

- 


#### 1. <!DOCTYPE>   

他是文档类型的声明标签，告诉浏览器使用哪个 html 版本来显示页面。<!DOCTYPE> 告诉浏览器使用 HTML5 这个版本来显示页面。

#### 2. `<html lang="en">`   

lang 表示当前页面显示的语言。en 表示英文网页，zn-CN 表示中文网页。

#### 3. `<meta charset="UTF-8">`   

告诉计算机以哪种编码的方式进行识别和存储这个网页的字符。常用的 charset 编码取值：

- GB2312: 简体中文
- BIG5：繁体中文
- GBK：国标，包含了简体中文和繁体中文
- UTF-8：万国码，包含了世界上几乎所有国家的字符编码。采取这种编码的网页，即使是访问外国网站也不会出现乱码的情况。


## 二、HTML元素标签、属性都是什么概念

### 1. 块元素

- `<h1></h1>` 6 级标题标签
- `<p></p>` p 标签：是块元素，表示一个段落
- `<img>` img 标签：src 属性标识来源，width height 可在标签内调节图片大小，alt 属性可在图片显示失败的时候告诉用户这张图片是什么，有利于 SEO，title 属性会在鼠标移动到图片上的时候有一个提示
- `<br />` 强制换行标签。p 标签是段落标签，段落标签也可以起到换行的作用，但是用 p 标签换行的时候会出现一个较大的缝隙，用 br 标签，就不会有较大的缝隙。
- ``
- ``
- ``
- ``
- ``

### 2. 行内元素

- `<a></a>` a 标签：是行内元素，里面可以是文字或图片  

    - href 属性值是超链接的地址。取值有五种情况：绝对地址；相对地址；“#”，“#” 代表空连接，来代替还没有开发好的网页；“xxxxx.zip”，表示下载链接，点击以后就会自动下载到本地；图片、音频、视频都可以做成链接。
             
    - target 表示超链接打开的方式。有两个属性值：_self 是默认值，表示在当前窗口打开；_blank 是在新窗口打开。   
      
    - 锚点链接：可以快速定位到页面中的某个位置。例如点击个人简介，直接跳转到本页面的个人简介部分。分两步完成：第一步，设置 a 标签：`<a href=“#personal”>个人简介</a>` ；第二步：设置本页面个人简介 div 的 id 值 `<div id="personal"><div>`
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``

### 3. 文本格式化标签   
   
用于对页面中的文字进行强调作用的标签

- 加粗效果  `<strong></strong>` 或者 `<b></b>`  推荐使用 strong 标签，语义更加强烈
- 倾斜效果 `<em></em>` 或者 `<i></i>` 推荐使用 em 标签，语义更加强烈
- 删除线效果 `<del></del>` 或者 `<s></s>` 推荐使用 del 标签
- 下划线效果 `<ins></ins>` 或者 `<u></u>` 推荐使用 ins 标签
        
### 4. 表格标签   
   
- `<table></table>` 表示整个表格
- `<th></th>` 表示表头单元格。他与普通的`<tr>` 标签的区别是：表头单元格里面的文字会加粗，并且会居中显示
- `<tr></tr>` 表示表格的一行
- `<td></td>` 表示表格的单元格    

```
<table>
    <tr><th>姓名</th> <th>性别</th> <th>年龄</th> </tr>
    <tr><td>Jame</td> <td>女</td> <td>17</td> </tr>
    <tr><td>Jucy</td> <td>女</td> <td>28</td> </tr>
    <tr><td>Tom</td> <td>男</td> <td>29</td> </tr>
</table>
```

- `<thead></thead>` 和 `<tbody></body>` 能够语义化的表示表格的表头和主体部分。注意 th 是表头单元格，thead 是表头区域。这样语更加明确

```
<table align="center" cellpadding="20" cellspacing="0" border="1">
    <thead>
        <tr> <th>排名</th> <th>关键词</th> <th>趋势</th> <th>今日搜索</th> <th>最近七日</th> <th>相关连接</th></tr>
    </thead>
    <tbody>
        <tr> <td>1</td> <td>鬼吹灯1</td> <td>趋势</td> <td>345</td> <td>123</td> <td><a href="#">百度</a>&nbsp;<a href="#">贴吧</a>&nbsp;<a href="#">图片</a></td></tr>
        <tr> <td>2</td> <td>鬼吹灯2</td> <td>趋势</td> <td>345</td> <td>123</td> <td><a href="#">百度</a>&nbsp;<a href="#">贴吧</a>&nbsp;<a href="#">图片</a></td></tr>
        <tr> <td>3</td> <td>鬼吹灯3</td> <td>趋势</td> <td>345</td> <td>123</td> <td><a href="#">百度</a>&nbsp;<a href="#">贴吧</a>&nbsp;<a href="#">图片</a></td></tr>
        <tr> <td>4</td> <td>鬼吹灯4</td> <td>趋势</td> <td>345</td> <td>123</td> <td><a href="#">百度</a>&nbsp;<a href="#">贴吧</a>&nbsp;<a href="#">图片</a></td></tr>
    </tbody>
</table>
```


表格属性一般使用css来设置，也可以用html的属性设置

### 5. 列表标签    
   
- 无序列表： ul 和 li 搭配。ul 和 ol 标签里面只能放 li 标签，但是 li 标签可以嵌套其他标签。
- 有序列表： ol 和 li 搭配
- 自定义列表：     
```
<dl>
    <dt>关注我们</dt>
    <dd>新浪微博</dd>
    <dd>官方微信</dd>
    <dd>联系我们</dd>
</dl>
```    
       
- 合并单元格   
跨行合并 `rowspan='合并单元格的个数'`       
跨列合并 `colspan='合并单元格的个数'`     
     

### 6. 表单元素  
      
完整的表单由三部分组成：表单域，表单控件（表单元素），提示信息   
   
6.1 表单域   
`<form action="url 地址" method=“提交方法 name=“表单域名称”></form>`  表示表单域，会把它所包括的所有的表单信息提交给服务器。其中 action 是后台服务器的地址。           

6.2 表单元素（表单控件）         
      
- input 输入表单元素，input 是单标签元素  
    
    - 根据 type 属性的不同来指定不同的控件类型： 
          
        - text 定义单行的输入字段，用户可以输入文本，默认宽度是 20 个字符
        - password 密码框
        - radio 单选按钮，要注意不同的单选按钮要有相同的 name 属性值才能实现多选一.   
        `男 <input type="radio" name="sex"> 女<input type="radio" name="sex"> `
        - checkbox 复选框，多选框  
        - submit 定义成提交按钮，提交按钮会把表单的数据提交给服务器。通过 value 值可以更改提交按钮上面显示的文字，默认显示的是 “提交”
        - reset 重置按钮，清除表单域里面的所有数据。通过 value 值可以更改重置按钮上面显示的文字，默认显示的是 “重置”   
        - button 定义一个普通可点击的按钮，通过 value 值来定义按钮上面显示的文字
        - file 定义一个可以上传文件的按钮。点击之后就会出现本地计算机上面的硬盘显示。
          
    - 根据 name 来区分不同的表单控件，单选按钮和复选框必须有 name 值，并且 name 值相同。      
    - value 表示表单元素的值，也就是在表单框内的默认提示文字。类似于 ant-D 里面的 placeholder      
    `用户名：<input type="text" name="username" value="请输入用户名">`   
    `男 <input type="radio" name="sex" value="male"> 女<input type="radio" name="sex" value="female"> `  在提交表单的时候，会把选择的 male 和 female 发送到服务器。   
    要注意，name 和 value 两个属性是每个表单都必须有的，是给后台人员使用的。
    - checked 属性值是 checked，表示默认被选中。一般用于单选按钮或者复选框中的属性，应用场景是用户是否同意某某协议。
    
- label 标签   
   用于绑定一个表单元素，当点击 label 标签内的文本时，浏览器就会自动的将光标转到或者定位到对应的表单元素上，来提升用户体验。要实现上面的效果，label 标签的 for 属性的值必须要和 input 标签的 id 值一样。     
   
```
<label for="sex">男</label>
<input type="radio" name="sex" id="sex">
``` 
          
- select 下拉菜单表单元素，如果有 selected=“selected” 表示默认选中   
        
```
<select>
    <option selected="selected">选项一</option>
    <option>选项二</option>
    <option>选项三</option>
</select>
```
        
- textarea 文本域表单元素，支持用户在页面的文本框内写入多行文字   

        
          
            
                       
### 7. 特殊字符   
  
网页中的一些特殊字符是显示不出来的，比如空格。我们用一些别的特殊字符来代替：   
    
- 空格： &nbsp；
- 大于号： &gt   （greater than）
- 小于号： &lt   （lower than）      
    

## 三、文档类型是什么概念，起什么作用



## 四、meta标签都用来做什么的




## 五、Web语义化是什么，是为了解决什么问题




## 六、链接是什么概念，对应什么标签




## 七、常用标签都有哪些，都适合用在什么场景




## 八、表单标签都有哪些，对应着什么功能，都有哪些属性




## 九、ol, ul, li, dl, dd, dt等这些标签都适合用在什么地方，举个例子

## 十、script 标签的属性   
  
- script 标签的位置   
    
    - script 标签放在 head 里面  
    html 页面会按照从上到下的顺序，依次解析，先将 js 文件下载、解析、执行完毕之后，才去解析 body 里面的内容。导致呈现页面的时候会出现明显的延迟，而延迟期间浏览器的窗口将出现一片空白，用户体验不好。   
    
    -  script 标签放在 body 里面  
    在 html 解析过程中，如果遇到 script 标签，有 src 属性，需要下载外部的 js 文件，此时就会阻塞 html 解析过程，也就是说，遇到 script 标签，html 的解析过程会停止，先下载 js 文件，然后才继续进行 html 解析，用户体验也不好。   
    
    - 推荐 script 标签放在 body 的最后   
       
  
- 指定script标签的async属性

    - 如果async="async"，脚本相对于页面的其余部分异步地执行（当页面继续进行解析时，脚本将被执行），我的理解是，在 html 解析的过程中，如果 js 文件加载成功，就直接执行，不需要等到 html 解析完成以后再执行，而且谁先下载完就执行谁，并不是按照顺序执行。

    - 如果不使用async 且 defer="defer"：这个属性会让 js 文件立即下载，等到页面全部解析加载完以后再按照顺序执行，且会优先于 DOMContentLoaded 事件触发前执行。但在现实中，延迟脚本不一定会按照顺序执行，也不一定会在 DOMContentLoaded 事件之前执行，所以最好只有一个延迟脚本。

    - 如果脚本之间没有依赖关系，就使用async属性，如果脚本之间有依赖关系，就使用defer属性。如果同时使用async和defer属性，后者不起作用，浏览器行为由async属性决定。   
   

   
