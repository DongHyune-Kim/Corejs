---
layout: single
title: "5장 5-1 실습 예제입니다."
---

```
var outer = function() {
    var a = 1;
    var inner = function() {
      console.log(++a);
    };
    inner();
  };
  outer();
```
