---
layout: single
title: "7장 7-12 실습 예제입니다."
---
#  Example 7-12
```js
var extendClass2 = (function() {
  var Bridge = function() {};
  return function(SuperClass, SubClass, subMethods) {
    Bridge.prototype = SuperClass.prototype;
    SubClass.prototype = new Bridge();
    SubClass.prototype.consturctor = SubClass;
    Bridge.prototype.constructor = SuperClass;
    if (subMethods) {
      for (var method in subMethods) {
        SubClass.prototype[method] = subMethods[method];
      }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
  };
})();
```
