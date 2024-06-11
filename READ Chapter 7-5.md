---
# Chapter 7-5 실습 예제 설명입니다.
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
  this.width = width;
};
Square.prototype.getArea = function() {
  return this.width * this.width;
};
var sq = new Square(5); 
console.log(sq.getArea()); // 25
```

```
- 두 개의 생성자 함수 Rectangle과 Square를 정의하고, 각 객체의 면적을 계산하는 메서드를 프로토타입에 추가 (두 생성자를 사용하여 객체를 생성하고 면적을 계산)

- Rectangle 생성자 함수
   - width와 height 매개변수를 받아 새로운 Rectangle 객체의 속성으로 설정

- Rectangle 프로토타입 메서드 getArea
   - getArea 메서드는 Rectangle 객체의 프로토타입에 정의되어 있으며, 객체의 면적(너비 × 높이)을 반환

- Rectangle 객체 생성
   - var rect = new Rectangle(3, 4);는 width가 3이고 height가 4인 Rectangle 객체를 생성

- Rectangle 객체의 면적 계산
   - rect.getArea();는 rect 객체의 면적을 계산하여 12를 반환

- Square 생성자 함수
   - width 매개변수를 받아 새로운 Square 객체의 속성으로 설정

- Square 프로토타입 메서드 getArea
   - getArea 메서드는 Square 객체의 프로토타입에 정의되어 있으며, 객체의 면적(너비 × 너비)을 반환

- Square 객체 생성
   - var sq = new Square(5);는 width가 5인 Square 객체를 생성

- Square 객체의 면적 계산
   - sq.getArea();는 sq 객체의 면적을 계산하여 25를 반환
```
