---
layout: single
title: "6장 6-9 실습 예제입니다."
---
#  Example 6-9
```js
Object.prototype.getEntries = function() {
    var res = [];
    for (var prop in this) {
      if (this.hasOwnProperty(prop)) {
        res.push([prop, this[prop]]);
      }
    }
    return res;
  };
  var data = [
    ['object', { a: 1, b: 2, c: 3 }], // [["a",1], ["b", 2], ["c",3]]
    ['number', 345], // []
    ['string', 'abc'], // [["0","a"], ["1","b"], ["2","c"]]
    ['boolean', false], // []
    ['func', function() {}], // []
    ['array', [1, 2, 3]], // [["0", 1], ["1", 2], ["2", 3]]
  ];
  data.forEach(function(datum) {
    console.log(datum[1].getEntries());
  });
```
