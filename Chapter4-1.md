---
layout: single
title: "4장 4-1 실습 예제입니다."
---
#  Example 4-1
```js
var count = 0;
var timer = setInterval(function() {
  console.log(count);
  if (++count > 4) clearInterval(timer);
}, 300);
```
