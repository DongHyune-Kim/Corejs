---
layout: single
title: "4장  4-5 실습 예제입니다."
---

```js
Array.prototype.map = function(callback, thisArg) {
    var mappedArr = [];
    for (var i = 0; i < this.length; i++) {
      var mappedValue = callback.call(thisArg || window, this[i], i, this);
      mappedArr[i] = mappedValue;
    }
    return mappedArr;
  };
  ```
