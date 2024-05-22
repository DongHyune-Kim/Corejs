---
layout: single
title: "4장 4-2 실습 예제입니다."
---

```js
var count = 0;
var cbFunc = function() {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};
var timer = setInterval(cbFunc, 300);
```
