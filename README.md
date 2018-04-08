今天用`JS`的 `xlsx` 库，读取4月份支出记录，进行分类统计。

分类统计使用了 `Ramda` .

其中：main.js 是主逻辑。

```
	|  文件   	  |    描述    |
---+-----------------+---------+
 1 | main.js         | 主逻辑   |
 2 | util.js         | 封装方法 |

```

util.js 封装了把 xlsx 转化成 json对象的方法，这个方法来自于[这个例子](https://github.com/SheetJS/js-xlsx/tree/master/demos/database) README 中的 `**mplementation details** (click to show)` .

结果如图:



### 致谢：

1、

玩 Ramda 真的有趣啊~~~  而且工作效率高！！   

感谢大师姐！

2、

缘起是在 一起学JS 网站上看到  [yangfan1992]() 推荐 4 months Node读写Excel文件探究实践](https://aotu.io/notes/2016/04/07/node-excel/) 

感谢这位同学 ！！！