---
# Chapter 7-9 실습 예제 설명입니다.
---

```
var extendClass2 = (function() {
  var Bridge = function() {};
  return function(SuperClass, SubClass, subMethods) {
    Bridge.prototype = SuperClass.prototype;
    SubClass.prototype = new Bridge();
    if (subMethods) {
      for (var method in subMethods) {
        SubClass.prototype[method] = subMethods[method];
      }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
  };
})();

var Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
};
Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};
var Square = extendClass2(Rectangle, function(width) {
  Rectangle.call(this, width, width);
});
var sq = new Square(5);
console.log(sq.getArea()); // 25
```

```
extendClass2 함수를 정의하고 사용 (함수는 extendClass1 함수와 비슷하지만, 좀 더 효율적으로 프로토타입 체인을 구성)

- extendClass2 함수
  - Bridge 함수는 빈 함수로, 수퍼클래스와 서브클래스 간의 프로토타입 체인을 구축하는 데 사용
  - extendClass2 함수는 클로저를 사용하여 Bridge 함수를 캡슐화
  - SuperClass의 프로토타입을 Bridge의 프로토타입으로 설정하여 서브클래스가 수퍼클래스의 메서드를 직접 상속
  - SubClass의 프로토타입을 Bridge의 인스턴스로 설정하여 서브클래스가 수퍼클래스의 인스턴스와의 관계를 끊고 독립적인 인스턴스를 생성
  - subMethods 객체에서 각 메서드를 가져와서 서브클래스의 프로토타입에 추가
  - Object.freeze(SubClass.prototype);를 통해 서브클래스의 프로토타입을 불변하게 만든다.
  - SubClass를 반환하여 체이닝이 가능

- ectangle 생성자 함수 및 메서드
  - Rectangle 생성자 함수는 너비와 높이를 받아서 객체의 속성으로 설정
  - getArea 메서드는 사각형의 면적을 반환

- Square 생성 및 확장
  - Square 생성자 함수는 extendClass2 함수를 사용하여 Rectangle을 확장 (너비만을 받아서 정사각형을 만들도록 구현)
  - Rectangle.call(this, width, width);를 통해 Rectangle의 생성자를 호출하여 정사각형을 초기화

- Square 객체 생성 및 사용
  - new Square(5);를 통해 너비가 5인 정사각형을 생성
  - sq.getArea()를 호출하여 정사각형의 면적을 계산하고 출력
