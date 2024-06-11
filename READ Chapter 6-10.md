---
# Chapter 6-10 실습 예제 설명입니다.
---

```
var Grade = function() {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
      this[i] = args[i];
    }
    this.length = args.length;
  };
  var g = new Grade(100, 80);
```

```
- Grade라는 생성자 함수를 정의하여, 인스턴스를 배열처럼 동작 (주어진 인자를 배열처럼 객체에 저장하고 length 속성을 설정)

- var args = Array.prototype.slice.call(arguments); : arguments 객체를 배열로 변환하여 args 변수에 저장

- arguments 객체 : 함수 호출 시 전달된 모든 인수를 담고 있는 유사 배열 객체

- Array.prototype.slice.call(arguments)를 사용하면 arguments 객체를 배열로 변환 가능

- for (var i = 0; i < args.length; i++) { this[i] = args[i]; } : 전달된 인수들을 this 객체의 속성으로 설정

- this[i] = args[i]; : this 객체에 인덱스를 속성으로 사용하여 인수 값을 저장

- this.length = args.length; : this 객체에 length 속성을 설정하여 전달된 인수의 개수를 저장

- var g = new Grade(100, 80); : Grade 생성자를 사용하여 g라는 새로운 객체를 생성 (g 객체는 배열처럼 동작하지만, 실제로는 일반 객체이다.)

- g 객체는 Grade 생성자를 통해 초기화되며, 전달된 인수 [100, 80]을 사용 (g[0]은 100, g[1]은 80, g.length는 2)
```
