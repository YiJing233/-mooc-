# mooc互评拉满代码

仅用于中国大学mooc的自评部分和互评部分的一段js代码

代码完全开放，欢迎使用完善

## 背景

相信大家都被mooc互评这个nt东西烦恼过，又要打分又要写评语，在题目多的情况下尤其繁琐枯燥

用自动化解决这个问题吧

### 原理（选读）

第一段js代码将每个textarea标签的value值都设置成‘思路清晰’

第二段代码首先筛选出class = s的所有标签，然后逐一将各个标签内的最后一个input标签施加模拟鼠标点选动作

## 使用方法

Chrome/Firefox/Edge：

打开网页的互评界面是这样的：

[![mooc1.png](https://raw.githubusercontent.com/YiJing233/-mooc-/master/src/mooc1.jpg)

按F12，打开开发者模式，点击console控制台

![mooc2.png](https://raw.githubusercontent.com/YiJing233/-mooc-/master/src/mooc2.PNG)

不要在意上面的红色警告文字，将mooc.js文件里的代码粘贴到最后的 `>` 行上按enter运行

![mooc3.png](https://raw.githubusercontent.com/YiJing233/-mooc-/master/src/mooc3.PNG)

这样，所有分数就都是最高分，点评部分也都自动填充了

tips：如果想换其他的填充文字，可以修改代码中`e.value = '思路清晰'`中的汉字

### 可能存在的问题

* 选取最高分的原理是选取最后一个，但如果最高分不在最后一个就没得办法了
* mooc网的标签和属性不一定永久固定，如有问题请issue
