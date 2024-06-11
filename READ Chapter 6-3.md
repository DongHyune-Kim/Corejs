---
# Chapter 6-3 실습 예제 설명입니다.
---

```
var arr = [1, 2];
Array.prototype.constructor === Array; // true
arr.__proto__.constructor === Array; // true
arr.constructor === Array; // true

var arr2 = new arr.constructor(3, 4);
console.log(arr2); // [3, 4]
```

```
- 배열과 배열의 생성자 함수에 대해 조사하고, 배열 생성자를 통해 새로운 배열을 만듬

- var arr = [1, 2]; : arr이라는 [1, 2] 요소를 가진 배열을 생성

- Array.prototype.constructor === Array; : Array.prototype의 constructor 속성이 Array 생성자 함수를 가리키는지 확인 (결과 : true)

- arr.__proto__.constructor === Array; : arr 객체의 __proto__ 즉, arr의 프로토타입의 constructor 속성이 Array 생성자 함수를 가리키는지 확인 (결과 : true)

- arr.constructor === Array; : arr 객체의 constructor 속성이 Array 생성자 함수를 가리키는지 확인 (결과 : true)

- var arr2 = new arr.constructor(3, 4); : arr.constructor는 Array 생성자 함수, new arr.constructor(3, 4)는 Array 생성자 함수를 호출하여 [3, 4] 요소를 가진 새로운 배열을 생성

- console.log(arr2); : arr2 배열을 콘솔에 출력 (결과 : [3, 4])
```
