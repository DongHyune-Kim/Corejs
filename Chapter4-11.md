---
layout: single
title: "4장 4-11 실습 예제입니다."
---

```js
var obj1 = {
    name: 'obj1',
    func: function() {
      console.log(this.name);
    },
  };
  setTimeout(obj1.func.bind(obj1), 1000);
  
  var obj2 = { name: 'obj2' };
  setTimeout(obj1.func.bind(obj2), 1500);
```
