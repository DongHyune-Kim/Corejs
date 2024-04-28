---
layout: single
title: "5주차 CoreJavaScript 두 번째, 세 번째 강의 실습 예제입니다."
---

# Example 2-13 스코프 체인
```js
var a = 1;
var outer = function() {
  var inner = function() {
    console.log(a);
    var a = 3;
  };
  inner();
  console.log(a);
};
outer();
console.log(a);
```
# Example 2-14
```js
var a = 1;
var outer = function() {
  var b = 2;
  var inner = function() {
    console.dir(inner);
  };
  inner();
};
outer();
```
# Example 2-15
```js
var a = 1;
var outer = function() {
  var b = 2;
  var inner = function() {
    console.log(b);
    console.dir(inner);
  };
  inner();
};
outer();
```
# Example 2-16
```js
var a = 1;
var outer = function() {
  var b = 2;
  var inner = function() {
    console.log(b);
    debugger;
  };
  inner();
};
outer();
```
