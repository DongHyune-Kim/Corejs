---
# Chapter 7-1 실습 예제 설명입니다.
---

```
var Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
};
Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};
Rectangle.isRectangle = function(instance) {
  return (
    instance instanceof Rectangle && instance.width > 0 && instance.height > 0
  );
};

var rect1 = new Rectangle(3, 4);
console.log(rect1.getArea()); // 12 (O)
console.log(rect1.isRectangle(rect1)); // Error (X)
console.log(Rectangle.isRectangle(rect1)); // true
```

```
- Rectangle 생성자 함수와 그 프로토타입 메서드, 그리고 정적 메서드를 정의하여 직사각형 객체의 면적을 계산하고, 객체가 유효한 직사각형인지 확인하는 기능

- Rectangle 생성자 함수는 width와 height를 매개변수로 받아 객체의 width와 height 속성을 설정

- Rectangle.prototype.getArea 메서드는 직사각형의 면적을 계산하여 반환 (메서드는 모든 Rectangle 인스턴스에서 사용 가능)

- Rectangle.isRectangle 메서드는 특정 객체가 Rectangle의 인스턴스인지, 그리고 유효한 width와 height를 가지고 있는지 확인

- 메서드는 정적 메서드(static method)로, Rectangle 생성자 함수 자체에 직접 정의

- rect1 객체를 Rectangle 생성자 함수로 생성 (rect1 → width가 3이고, height가 4인 직사각형 객체)

- rect1.getArea() 메서드를 호출하여 rect1의 면적을 계산 (계산 결과 = 12)

- rect1.isRectangle(rect1)를 호출하려고 시도, isRectangle 메서드는 Rectangle 생성자 함수에 정적 메서드로 정의, rect1 인스턴스에서는 직접 사용할 수 없으므로 오류가 발생

- Rectangle.isRectangle(rect1)를 호출하여 rect1이 유효한 Rectangle 인스턴스인지 확인 (결과 = true)
```
