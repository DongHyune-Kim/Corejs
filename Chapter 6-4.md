---
layout: single
title: "6장 6-4 실습 예제입니다."
---
#  Example 6-4
```js
var NewConstructor = function() {
    console.log('this is new constuctor!');
  };
  var dataTypes = [
    1, // Number & false
    'test', // String & false
    true, // Boolean & false
    {}, // NewConstructor & false
    [], // NewConstructor & false
    function() {}, // NewConstructor & false
    /test/, // NewConstructor & false
    new Number(), // NewConstructor & false
    new String(), // NewConstructor & false
    new Boolean(), // NewConstructor & false
    new Object(), // NewConstructor & false
    new Array(), // NewConstructor & false
    new Function(), // NewConstructor & false
    new RegExp(), // NewConstructor & false
    new Date(), // NewConstructor & false
    new Error(), // NewConstructor & false
  ];
  
  dataTypes.forEach(function(d) {
    d.constructor = NewConstructor;
    console.log(d.constructor.name, '&', d instanceof NewConstructor);
  });
```
