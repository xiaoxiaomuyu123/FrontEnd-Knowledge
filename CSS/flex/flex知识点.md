# flex 布局

## 一、flex 布局体验

### 1.1 传统布局与 flex 布局

1. 传统布局

    - 兼容性好
    - 布局繁琐
    - 在移动端不能有很好的布局

2. flex 布局

    - 操作方便，布局极为简单，在移动端应用广泛
    - PC 端浏览器支持情况较差
    - IE11 及更低版本不能很好的支持
    
如果是 PC 端，用传统布局；如果是移动端或者 PC 端不考虑兼容性问题，就用 flex 布局

## 二、flex 布局的原理

当设置父元素的 display：flex 时，子元素的 float，clear 和 vertical-align 都会失效

### 2.1 flex 原理

采用 flex 布局的元素，称为 flex 容器，简称容器，他的所有子元素自动成为容器的成员，简称项目。   
通过给父元素添加 display：flex 属性，而达到给子元素进行排列和布局的方式。


## 三、flex布局中父元素常见的属性

1. flex-direction: 用于设置主轴的方向。元素是跟着主轴排列的  
   
    - row：横轴为主轴，元素由左向右排列
    - row-reverse：横轴为主轴，元素由右向左排列
    - column：纵轴为主轴，元素由上到下排列
    - column-reverse： 纵轴为主轴，元素由下到上排列   
2. justify-content: 用于设置主轴上元素的排列方式

    - flex-start: 默认值，从主轴的头部开始。如果主轴是 row，也就是 x 轴，排列方式是从左向右
    - flex-end：从主轴的尾部开始。
    - center: 子元素连在一起居中对齐
    - space-around：平分剩余空间
    - space-between：先把两边的盒子靠在父元素的边框，再平分剩余的空间。
    
3. flex-wrap: 设置子元素是否可以换行，默认是不换行，如果主轴上装不开子元素，会缩小子元素的宽度，挤在第一行

    - nowrap： 默认值，不换行
    - wrap: 换行

4. align-items：设置侧轴上元素的排列方式，注意适用范围是在子元素是单行的时候使用

    - flex-start: 从侧轴的头部开始
    - flex-end：从侧轴的尾部开始
    - center：挤在一起，在侧轴上居中
    - stretch：拉伸（默认值）。使用情况是：当主轴是 x  轴，侧轴是 y 轴时，若子元素没有高度的时候，设置 stretch 会让元素沿着侧轴拉伸，子元素设置了高度就不起作用了。

5. align-content：设置侧轴上元素的排列方式，适用范围是多行，也就是子元素出现换行的情况，对于单行的情况不起作用。

    - flex-start
    - flex-end
    - center
    - space-around
    - space-between
    - stretch

6. flex-flow: 是 flex-direction 和 flex-wrap 的组合写法

## 四、flex 布局子元素项目的属性

1. flex：子项占据父元素剩余空间的份数。定义子项目分配剩余空间，用 flex 表示多少份数。
2. align-self：控制子项自己在侧轴上的移动方式。也就是在侧轴上的每个小盒子自己移动的方式。允许单个项目与其他项目有不一样的对齐方式，可能覆盖 align-items 属性。默认值是 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。
3. order：定义子项的排列顺序（前后顺序）,数值越小，越靠前，默认是零。


###  实现一个两列等高布局，讲讲思路 
