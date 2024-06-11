---
# Chapter 7-2 실습 예제 설명입니다.
---

```
var Grade = function() {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length;
};
Grade.prototype = [];
var g = new Grade(100, 80);
```

```
- Grade 생성자 함수가 정의되고, 이를 통해 생성된 객체가 배열처럼 동작

- arguments 객체를 배열로 변환하여 args 변수에 저장

- arguments 객체는 함수 호출 시 전달된 모든 인수를 담고 있는 유사 배열 객체

- Array.prototype.slice.call(arguments)를 사용하면 arguments 객체를 배열로 변환 가능

- for 루프를 통해 전달된 인수들을 this 객체의 속성으로 설정

- this[i] = args[i];는 this 객체에 인덱스를 속성으로 사용하여 인수 값을 저장

- this.length = args.length;는 this 객체에 length 속성을 설정하여 전달된 인수의 개수를 저장

- Grade.prototype을 배열로 설정 (Grade.prototype을 배열로 설정) → Grade 객체가 배열의 메서드와 속성을 상속받게 된다.

- 새로운 Grade 객체 생성

  → var g = new Grade(100, 80);는 Grade 생성자를 사용하여 g라는 새로운 객체를 생성

  → g 객체는 Grade 생성자를 통해 초기화되며, 전달된 인수 [100, 80] 사용

  → g[0]은 100, g[1]은 80, g.length = 2
```
