---
# Chapter 7-10 실습 예제 설명입니다.
---

```
var Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
};
Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};
var Square = function(width) {
  Rectangle.call(this, width, width);
};
Square.prototype = Object.create(Rectangle.prototype);
Object.freeze(Square.prototype);

var sq = new Square(5);
console.log(sq.getArea()); // 25
```

```
- 사각형과 정사각형의 면적을 계산, 직접적인 프로토타입 상속을 통해 Rectangle과 Square을 정의

- Rectangle 생성자 함수
   - width와 height를 매개변수로 받아서 객체의 너비와 높이를 설정

- Rectangle 프로토타입 메서드 getArea
   - getArea 메서드는 Rectangle 객체의 프로토타입에 정의, 사각형의 면적(너비 × 높이)을 반환

- Square 생성자 함수
   - Rectangle.call(this, width, width);를 통해 Rectangle의 생성자를 호출하여 정사각형을 초기화

- 프로토타입 상속
   - Object.create(Rectangle.prototype)를 사용하여 Rectangle의 프로토타입을 상속받는다.
   - Object.freeze(Square.prototype)를 사용하여 Square의 프로토타입을 불변하게 만든다. (이는 새로운 속성이나 메서드를 추가하지 못하게 한다.)

- Square 객체 생성
   - new Square(5);를 통해 너비가 5인 정사각형을 생성

- Square 객체의 면적 계산
   - sq.getArea()를 호출하여 Square 객체의 면적을 계산하고 출력
```
