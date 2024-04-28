---
layout: single
title: "5주차 CoreJavaScript 첫 번째 강의 실습 예제입니다."
---

# Example 2-9 함수 선언문과 함수 표현식(1)-원본 코드
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
# Example 2-10 함수 선언문과 함수 표현식(2)-호이스팅을 마친 상태
```js 
 var sum = function sum(a, b) {
   // 함수 선언문은 전체를 호이스팅합니다.
   return a + b;
 };
 var multiply; // 변수는 선언부만 끌어올립니다.
 console.log(sum(1, 2));
 console.log(multiply(3, 4));
 
 multiply = function(a, b) {
   // 변수의 할당부는 원래 자리에 남겨둡니다.
   return a * b;
 };
``` 
# Example 2-11 함수 선언문의 위험성
```js 
 console.log(sum(3, 4));

 function sum(x, y) {
  return x + y;
 }

 var a = sum(1, 2);

 function sum(x, y) {
   return x + ' + ' + y + ' = ' + (x + y);
 }

 var c = sum(1, 2);
 console.log(c);
```
# Example 2-12 상대적으로 함수 표현식이 안전
```js 
 console.log(sum(3, 4)); // Uncaught Type Error: sum is not a function

 var sum = function(x, y) {
  return x + y;
 };

 var a = sum(1, 2);

 var sum = function(x, y) {
   return x + ' + ' + y + ' = ' + (x + y);
 };

 var c = sum(1, 2);
 console.log(c);
```
