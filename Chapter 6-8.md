---
layout: single
title: "6장 6-8 실습 예제입니다."
---
#  Example 6-8
```js
var arr = [1, 2];
Array.prototype.toString.call(arr); // 1,2
Object.prototype.toString.call(arr); // [object Array]
arr.toString(); // 1,2

arr.toString = function() {
  return this.join('_');
};
arr.toString(); // 1_2
```
