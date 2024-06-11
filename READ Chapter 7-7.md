---
# Chapter 7-7 실습 예제 설명입니다.
---

```
var Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
};
Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};
var rect = new Rectangle(3, 4);
console.log(rect.getArea()); // 12

var Square = function(width) {
  Rectangle.call(this, width, width);
};
Square.prototype = new Rectangle();

var sq = new Square(5);
console.log(sq.getArea()); // 25
```

```
- 사각형과 정사각형의 면적을 계산, Rectangle과 Square 객체를 생성하고 상속을 구현

- Rectangle 생성자 함수
   - width와 height를 매개변수로 받아서 객체의 너비와 높이를 설정

- Rectangle 프로토타입 메서드 getArea
   - getArea 메서드는 Rectangle 객체의 프로토타입에 정의, 사각형의 면적(너비 × 높이)을 반환

- Rectangle 객체 생성
   - new Rectangle(3, 4);를 통해 너비가 3이고 높이가 4인 Rectangle 객체를 생성

- Rectangle 객체의 면적 계산
   - rect.getArea()를 호출하여 Rectangle 객체의 면적을 계산하고 출력

- Square 생성자 함수
   - Rectangle.call(this, width, width);를 사용하여 Rectangle의 생성자 함수를 호출하면서 Square 객체의 너비와 높이를 설정

- Square 프로토타입 설정
   - Square.prototype을 Rectangle 객체로 설정하여 Square 객체가 Rectangle 객체를 상속

- Square 객체 생성
   - new Square(5);를 통해 너비와 높이가 5인 정사각형을 생성

- Square 객체의 면적 계산
   - sq.getArea()를 호출하여 Square 객체의 면적을 계산하고 출력
```
