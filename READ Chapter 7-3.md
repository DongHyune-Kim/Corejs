---
# Chapter 7-1 실습 예제 설명입니다.
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

g.push(90);
console.log(g); // Grade { 0: 100, 1: 80, 2: 90, length: 3 }
```

```
delete g.length;
g.push(70);
console.log(g); // Grade { 0: 70, 1: 80, 2: 90, length: 1 }
```

```
- Grade 생성자 함수를 사용하여 객체를 배열처럼 동작하게 하고, 그 객체에 배열 메서드를 사용하여 다양한 조작을 수행

- Grade 생성자 함수 정의
  - 전달된 인수들을 배열로 변환하여 args 변수에 저장
  - for 루프를 통해 인수들을 this 객체의 속성으로 설정
  - this.length = args.length;는 this 객체에 length 속성을 설정하여 인수의 개수를 저장

- Grade.prototype 설정
  - Grade.prototype을 빈 배열로 설정하여 Grade 객체가 배열의 메서드와 속성을 상속받도록 한다.

- 새로운 Grade 객체 생성
  - var g = new Grade(100, 80); → g라는 새로운 Grade 객체를 생성
  - g 객체는 Grade 생성자를 통해 초기화되며, 전달된 인수 [100, 80]을 사용
  - g 객체는 Grade의 인스턴스이며 배열의 메서드를 사용 가능

- push 메서드 사용
  - g.push(90);는 배열의 push 메서드를 사용하여 g 객체에 새로운 요소 90을 추가
  - g.length가 3이 되며, g 객체 = { 0: 100, 1: 80, 2: 90, length: 3 }

- length 속성 삭제
  - delete g.length;를 통해 g 객체의 length 속성을 삭제

- push 메서드 사용
  - g.push(70);를 통해 70을 g 객체에 추가
  - length 속성이 없기 때문에, g.push는 배열의 첫 번째 인덱스(0)부터 시작하여 요소를 추가
  - g 객체 = { 0: 70, 1: 80, 2: 90, length: 1 }, 이는 g.push가 length 속성을 새로 설정하면서, 기존의 0 인덱스 값을 덮어쓴 것으로 판단된다.
```
