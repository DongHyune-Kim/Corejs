---
# Chapter 6-8 실습 예제 설명입니다.
---

```
var arr = [1, 2];
Array.prototype.toString.call(arr); // 1,2
Object.prototype.toString.call(arr); // [object Array]
arr.toString(); // 1,2

arr.toString = function() {
  return this.join('_');
};
arr.toString(); // 1_2
```

```
- 배열 arr의 toString 메서드를 다양한 방법으로 호출하여 결과를 확인하고, 배열의 toString 메서드를 재정의하여 다른 출력을 생성

- var arr = [1, 2]; : arr라는 이름의 [1, 2] 요소를 가지는 배열 생성

- Array.prototype.toString.call(arr); : Array.prototype.toString 메서드를 배열 arr에 대해 호출, 기본 배열의 toString 메서드는 배열의 모든 요소를 쉼표로 구분된 문자열로 변환 (결과 = "1,2")

- Object.prototype.toString.call(arr); : Object.prototype.toString 메서드를 배열 arr에 대해 호출 (이 메서드는 객체의 내부 클래스(내부 [[Class]] 값)를 반환, 배열의 경우 결과 = "[object Array]")

- arr.toString();: arr 배열의 toString 메서드를 호출 (메서드는 Array.prototype.toString 메서드를 상, 속받아 배열의 모든 요소를 쉼표로 구분된 문자열로 변환, 결과 = "1,2")

- arr.toString 메서드를 재정의, 새로운 toString 메서드는 join('_') 메서드를 호출하여 배열의 모든 요소를 언더스코어('_')로 구분된 문자열로 변환

- 재정의된 arr.toString() 메서드를 호출합니다. 이 메서드는 배열의 모든 요소를 언더스코어('_')로 구분된 문자열로 변환 (결과 = "1_2")
```
