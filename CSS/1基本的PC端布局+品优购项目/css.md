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
   
`font: font-style font-weight font-size/linr-hright font-family`   
font-size 和 font-family 必须有，不能省略，其他可以省略。
   
