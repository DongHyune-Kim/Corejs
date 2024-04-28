---
layout: single
title: "4주차 CoreJavaScript 두 번째 강의 실습 예제입니다."
---

# Example 2-8 함수를 정의하는 세 가지 방식
```js
function a() {
    /* ... */
  } // 함수 선언문. 함수명 a가 곧 변수명.
  a(); // 실행 OK.
  
  var b = function() {
    /* ... */
  }; // (익명) 함수 표현식. 변수명 b가 곧 함수명.
  b(); // 실행 OK.
  
  var c = function d() {
    /* ... */
  }; // 기명 함수 표현식. 변수명은 c, 함수명은 d.
  c(); // 실행 OK.
  d(); // 에러!
  ```

# Example 2-9 함수의 선언문과 함수 표현식(1)-원본 코드
```js
console.log(sum(1, 2));
console.log(multiply(3, 4));
  
function sum(a, b) {
// 함수 선언문 sum
 return a + b;
}
  
var multiply = function(a, b) {
 // 함수 표현식 multiply
 return a * b;
};
```
