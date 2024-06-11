---
layout: single
title: "6장 6-6 실습 예제입니다."
---
#  Example 6-6
```js
var Person = function(name) {
    this.name = name;
  };
  Person.prototype.getName = function() {
    return this.name;
  };
  
  var iu = new Person('지금');
  iu.getName = function() {
    return '바로 ' + this.name;
  };
  console.log(iu.getName()); // 바로 지금
  ```
