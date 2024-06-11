---
# Chapter 7-8 실습 예제 설명입니다.
---

```
var extendClass1 = function(SuperClass, SubClass, subMethods) {
  SubClass.prototype = new SuperClass();
  for (var prop in SubClass.prototype) {
    if (SubClass.prototype.hasOwnProperty(prop)) {
      delete SubClass.prototype[prop];
    }
  }
  if (subMethods) {
    for (var method in subMethods) {
      SubClass.prototype[method] = subMethods[method];
    }
  }
  Object.freeze(SubClass.prototype);
  return SubClass;
};

var Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
};
Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};
var Square = extendClass1(Rectangle, function(width) {
  Rectangle.call(this, width, width);
});
var sq = new Square(5);
console.log(sq.getArea()); // 25
```

```
- extendClass1 함수를 정의하고 사용 (함수는 주어진 수퍼클래스를 서브클래스로 확장)

- extendClass1 함수
  - SuperClass : 수퍼클래스로 사용될 함수나 클래스
  - SubClass : 서브클래스로 사용될 함수나 클래스
  - subMethods: 서브클래스에 추가할 메서드들을 담은 객체
  - SubClass.prototype = new SuperClass();: 서브클래스의 프로토타입을 수퍼클래스의 인스턴스로 설정하여 상속을 구현
  - for...in 루프를 사용하여 서브클래스의 프로토타입에서 직접 상속받은 속성들을 제거
  - subMethods 객체에서 각 메서드를 가져와서 서브클래스의 프로토타입에 추가
  - Object.freeze(SubClass.prototype);: 서브클래스의 프로토타입을 불변하게 만든다.
  - SubClass를 반환하여 체이닝이 가능

- ectangle 생성자 함수 및 메서드
  - Rectangle 생성자 함수는 너비와 높이를 받아서 객체의 속성으로 설정
  - getArea 메서드는 사각형의 면적을 반환

- Square 생성 및 확장
  - Square 생성자 함수는 extendClass1 함수를 사용하여 Rectangle을 확장 (너비만을 받아서 정사각형을 만들도록 구현)
  - Rectangle.call(this, width, width);를 통해 Rectangle의 생성자를 호출하여 정사각형을 초기화

- Square 객체 생성 및 사용
  - new Square(5);를 통해 너비가 5인 정사각형을 생성
  - sq.getArea()를 호출하여 정사각형의 면적을 계산하고 출력
```
