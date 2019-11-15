# 一、CSS 选择器    
  
## 1. 基础选择器   

标签选择器，类选择器，id 选择器，通配符选择器  
通配符选择器是可以选择页面上所有的标签


## 2. 复合选择器


# 二、CSS 文本属性  
  
## 1. 字体 font-family  
     
- 两种字体之间用逗号隔开
- 字体的名字是两个单词，就用引号括起来    

```
p {
    font-family: "Microsoft YaHei", Arial
}

```   

## 2. 字体大小 font-size  
  
   
## 3. 字体的粗细 font-weight   
   
取值是 normal（400），bold（700），number。可以通过 number 来进行设置具体加粗的程度。`font-weight: 700` 数字后面没有单位。实际开发中更常用数字的形式。     
html 里面的 strong 和 b 标签也可以实现加粗的效果。   

## 4. 字体风格 font-style   
   
取值有：normal，italic（斜体）   
  
## 5. 字体的复合写法     
   
`font: font-style font-weight font-size/line-height font-family`   
font-size 和 font-family 必须有，不能省略，其他可以省略。

## 6. css 文本属性   
   
css Text（文本）属性可定义文本的外观，比如文本的颜色，对齐文本，装饰文本，文本缩进，行间距。
    
#### 6.1 文本颜色   
   
`color: #000`   
   
#### 6.2 对齐文本   

text-align 属性用于设置元素内文本的水平对齐方式   
      
text-align 取值分别是：
         
- left （默认值）：左对齐   
- center：居中对齐   
- right：右对齐   
   
#### 6.3 装饰文本   
   
text-decoration 属性规定添加到文本的装饰，可以给文本添加下划线，删除线和上划线    
   
text-decoration 取值分别是：
  
- none （默认值），没有任何装饰线
- overline，上划线
- linethrough，中划线
- underline，下划线    
    
#### 6.4 文本缩进   
    
text-indent 用来给文本的首行进行缩进，通常是将段落的首行进行缩进   

`text-indent : 10px` 或者 `text-indent: 2em`   
  
em 是一个相对单位，就是当前元素（font-size）1 个文字的大小，如果当前元素没有设置大小，就按父元素文字的大小进行显示   
   
#### 6.5 行间距   
   
line-height 用于设置行间的距离，也就是行高，可以控制文字行与行之间的距离。行间距 = 文本高度 + 上间距 + 下间距。 如果把行间距改大了，时间上改变的是上下间距的距离，不改变文字本身的大小。    
    

## 三、CSS 引入方式  
   
#### 3.1 行内样式表（行内式）        
   
将 css 样式放在 style 标签中
   
#### 3.2 内部样式表（嵌入式）      
   

   
#### 3.3 外部样式表（链接式） 

