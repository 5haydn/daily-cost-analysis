//TODO: 这篇文档格式，请参考：https://socket.io/get-started/chat/ 

### 一、项目说明

今天用`JS`的 `xlsx` 库，读取4月份支出记录，进行分类统计，分类统计使用了 `Ramda` .

#### 使用方法：

Make sure [Node.JS is installed](https://nodejs.org/). 确保 nodejs 已经安装了.

1、clone 项目到本地，进入项目文件夹

2、执行 `npm install`

3、执行 `node main.js`

### 二、项目文件介绍

其中：main.js 是主逻辑。

```
	|  文件   	  |    描述    |
---+-----------------+---------+
 1 | main.js         | 主逻辑   |
 2 | util.js         | 封装方法 |
 3 | package.json    | 依赖库   |

```

util.js 封装了把 xlsx 转化成 json对象的方法，这个方法来自于[这个例子](https://github.com/SheetJS/js-xlsx/tree/master/demos/database) README 中的 `**mplementation details** (click to show)` .

### 三、Show一下结果

结果如图:

![](https://github.com/5haydn/daily-cost-analysis/raw/master/result.png)

### 四、致谢：

1、

玩 Ramda 真的有趣啊~~~  而且工作效率高！！   

感谢大师姐！

2、

缘起是在 一起学JS [网站](http://xugaoyang.com)上看到  [yangfan1992]() 推荐 4 months [Node读写Excel文件探究实践](https://aotu.io/notes/2016/04/07/node-excel/) 

感谢这位同学 ！！！

### 五、感受

当然，整个项目，就是个play demo. But Trust me，还是相当high。

想起来当年我学了c语言，于是就用命令行的文本输出了一些交互对话，表达爱意。可是当时的女朋友说，就这个呀…….  于是，就没有以后了。  @陈扬帆 

我还现场学习了，如何抽函数到另外的文件里，当我用到 module.exports = {read, deep} 成功导出两个函数的时候，我简直觉得高级死了。

