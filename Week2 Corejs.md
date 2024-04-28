---
Title: "2주차 CoreJavaScript 실습 예제입니다."
---

# Example 1-1 변수 선언
```js
var a; // 변수 a 선언
```
# Example 1-2 변수 선언과 할당
```js
var a; // 변수 a 선언
a = 'abc'; // 변수 a에 데이터 할당

var a = 'abc'; // 변수 선언과 할당을 한 문장으로 표현
```
# Example 1-3 불변성
```js
var a = 'abc'; // 변수 a 선언하고 변수 a에 데이터 할당
a = a + 'def'; 

var b = 5; // 변수 b를 5라고 선언, 이는 b에 해당하는 메모리 영역과 5에 해당하는 데이터 영역이 필요, b가 5에 해당하는 주소를 가르킨다.
var c = 5; // 변수 C가 5를 가르킴, 이때 5를 새로 만들지 않고 JavaScript가 데이터 영역에서 5를 전부 조사하고 5가 있으면 있는 것을 그대로 활용
b = 7; // 7은 메모리 데이터 영역에 새로 할당하고, b는 5가 아닌 7을 가리킨다.
```
# Example 1-4 참조형 데이터의 할당
```js
var obj1 = {
  a: 1, // a : property or key, 1 : value
  b: 'bbb', // b : property or key, bbb : value
};
```
# Example 1-5 참조형 데이터의 프로퍼티 재할당
```js
var obj1 = {
  a: 1, // a : property or key, 1 : value
  b: 'bbb', // b : property or key, bbb : value
};
obj1.a = 2; // obj1에 가서 a라는 곳에 2를 쓰고 싶다는 것을 의미
```
# Example 1-6 중첩된 참조형 데이터(객체)의 프로퍼티 할당
```js
var obj = {
  x: 3, // x : identifier, 3 : value
  arr: [3, 4, 5], // arr : identifier, 3, 4, 5는 primitive data를 의미 (3은 x와 arr에서 공동으로 하나를 가질 수 있다.)
};
```
