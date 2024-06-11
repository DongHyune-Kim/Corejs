---
# Chapter 7-4 실습 예제 설명입니다.
---

```
var Grade = function() {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length;
};
Grade.prototype = ['a', 'b', 'c', 'd'];
var g = new Grade(100, 80);

g.push(90);
console.log(g); // Grade { 0: 100, 1: 80, 2: 90, length: 3 }

delete g.length;
g.push(70);
console.log(g); // Grade { 0: 100, 1: 80, 2: 90, ___ 4: 70, length: 5 }
```

```
- Grade 생성자 함수가 정의되고, 이를 통해 생성된 객체가 배열처럼 동작하게 만드는 동시에, 프로토타입을 배열로 설정하여 Grade 객체가 해당 배열의 메서드와 속성을 상속받는 코드

- Grade 생성자 함수 정의
   - arguments 객체를 배열로 변환하여 args 변수에 저장
   - for 루프를 통해 전달된 인수들을 this 객체의 속성으로 설정
   - this.length = args.length;를 통해 this 객체에 length 속성을 설정

- Grade.prototype을 배열로 설정
   - Grade.prototype을 ['a', 'b', 'c', 'd'] 배열로 설정, 이로 인해 Grade 객체는 배열의 메서드와 속성을 상속받는다.

- 새로운 Grade 객체 생성
   - var g = new Grade(100, 80);를 통해 g라는 새로운 Grade 객체를 생성
   - g 객체는 Grade 생성자를 통해 초기화되며, 전달된 인수 [100, 80]을 사용
   - g 객체는 Grade의 인스턴스이며 배열의 메서드를 사용 가능

- push 메서드 사용
   - g.push(90);는 배열의 push 메서드를 사용하여 g 객체에 새로운 요소 90을 추가
   - g.length = 3이 되며, g 객체 = { 0: 100, 1: 80, 2: 90, length: 3 }

- length 속성 삭제
   - delete g.length;를 통해 g 객체의 length 속성을 삭제

- push 메서드 사용
   - g.push(70);는 배열의 push 메서드를 사용하여 70을 g 객체에 추가
   - length 속성이 없기 때문에, g.push는 프로토타입 체인에서 length 속성을 찾아간다.
   - 프로토타입 ['a', 'b', 'c', 'd']의 length 속성 = 4, g.push는 인덱스 4에 70을 추가하고 length 속성을 5로 업데이트
   - g 객체 = { 0: 100, 1: 80, 2: 90, 4: 70, length: 5 }
```
