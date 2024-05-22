---
layout: single
title: "4장 세 번째 실습 예제입니다."
---

```js
var newArr = [10, 20, 30].map(function(currentValue, index) {
    console.log(currentValue, index);
    return currentValue + 5;
  });
  console.log(newArr);
```
