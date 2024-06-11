---
layout: single
title: "6장 6-2 실습 예제입니다."
---
#  Example 6-2
```js
var Constructor = function(name) {
    this.name = name;
  };
  Constructor.prototype.method1 = function() {};
  Constructor.prototype.property1 = 'Constructor Prototype Property';
  
  var instance = new Constructor('Instance');
  console.dir(Constructor);
  console.dir(instance);
```
