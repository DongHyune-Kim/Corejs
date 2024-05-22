---
layout: single
title: "5장 5-13 실습 예제입니다."
---

```js
var add = function() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  };
  var addPartial = add.bind(null, 1, 2, 3, 4, 5);
  console.log(addPartial(6, 7, 8, 9, 10)); // 55
```
