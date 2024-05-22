---
layout: single
title: "4장 4-10 실습 예제입니다."
---

```js
var obj1 = {
    name: 'obj1',
    func: function() {
      console.log(obj1.name);
    },
  };
  var obj2 = {
    name: 'obj2',
    func: obj1.func,
  };
  var callback2 = obj2.func();
  setTimeout(callback2, 1500);
  
  var obj3 = { name: 'obj3' };
  var callback3 = obj1.func.call(obj3);
  setTimeout(callback3, 2000);
```
