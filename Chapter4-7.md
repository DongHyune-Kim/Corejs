---
layout: single
title: "4장 4-7 실습 예제입니다."
---

```js
var obj = {
    vals: [1, 2, 3],
    logValues: function(v, i) {
      console.log(this, v, i);
    },
  };
  obj.logValues(1, 2); 
  [4, 5, 6].forEach(obj.logValues); 
 ```
