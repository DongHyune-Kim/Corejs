---
layout: single
title: "4장  4-4 실습 예제입니다."
---

```js
var newArr2 = [10, 20, 30].map(function(index, currentValue) {
    console.log(index, currentValue);
    return currentValue + 5;
  });
  console.log(newArr2);
```
