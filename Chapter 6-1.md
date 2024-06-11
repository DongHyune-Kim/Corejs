---
layout: single
title: "6장 6-1 실습 예제입니다."
---
#  Example 6-1
```js
var Person = function(name) {
    this._name = name;
  };
  Person.prototype.getName = function() {
    return this._name;
  };
```
