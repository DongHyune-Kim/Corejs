---
layout: single
title: "5장 5-3 실습 예제입니다."
---

```
var outer = function() {
    var a = 1;
    var inner = function() {
      return ++a;
    };
    return inner;
  };
  var outer2 = outer();
  console.log(outer2()); 
  console.log(outer2());
```
