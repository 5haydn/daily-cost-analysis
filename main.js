if (typeof require !== 'undefined') XLSX = require('xlsx');
var R = require('ramda');
var util = require('./util.js');

// 读取xlsx文件
var workbook = XLSX.readFile('target3.xlsx');
// console.log(workbook);


// 文件转化为 js 对象
var obj = util.read(workbook);


let items = obj['工作表1'];
console.log(items.length);

var sum = 0;
let calc = function (cata){
    

    let condition = n => n.__EMPTY_4 === cata;
    let r1 = R.filter(condition, items);
    
    const costKey = '11483.8';
    let r2 = R.map(n=>n[costKey],r1)

   let r3 = R.sum(r2);
    console.log(cata + ':\t' + r1.length + ' \t共计：' + r3 + '\t ' + (new Number(r3*100/11483)).toFixed(0) + '%');
    sum += r3;
}

calc('工作');
calc('工位');
calc('滴滴');
calc('汽车');
calc('社交');

calc('星巴克');
calc('饭');


calc('烟');
calc('书');
calc('生活');
console.log('---------------');
console.log( '总计:' + Number(sum).toFixed(0) + ' ' + (new Number(sum*100/11483)).toFixed(2) + '%');


