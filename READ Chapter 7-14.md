---
# Chapter 7-14 실습 예제 설명입니다.
---

```
var extendClass = function(SuperClass, SubClass, subMethods) {
  SubClass.prototype = Object.create(SuperClass.prototype);
  SubClass.prototype.constructor = SubClass;
  SubClass.prototype.super = function(propName) {
    // 추가된 부분 시작
    var self = this;
    if (!propName)
      return function() {
        SuperClass.apply(self, arguments);
      };
    var prop = SuperClass.prototype[propName];
    if (typeof prop !== 'function') return prop;
    return function() {
      return prop.apply(self, arguments);
    };
  }; // 추가된 부분 끝
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
var Square = extendClass(
  Rectangle,
  function(width) {
    this.super()(width, width); // super 사용 (1)
  },
  {
    getArea: function() {
      console.log('size is :', this.super('getArea')()); // super 사용 (2)
    },
  }
);
var sq = new Square(10);
sq.getArea(); // size is : 100
console.log(sq.super('getArea')()); // 100
```

```
코드는 extendClass 함수에 super 메서드를 추가하여 서브클래스에서 수퍼클래스의 메서드를 호출할 수 있게 한다.
super 메서드는 SuperClass의 생성자나 프로토타입 메서드를 호출하는 방법을 제공함

- SubClass.prototype를 SuperClass.prototype의 새로운 객체로 설정하여 상속을 구현
- SubClass.prototype.constructor를 SubClass로 설정하여 프로토타입 체인을 유지

- super 메서드는 수퍼클래스의 생성자나 메서드를 호출하는 역할을 수행
- propName이 없으면 수퍼클래스의 생성자를 호출하는 함수 반환
- propName이 있으면 수퍼클래스의 해당 메서드나 프로퍼티를 호출하는 함수 반환

- 서브클래스 메서드 추가, ubMethods 객체를 받아서 서브클래스의 프로토타입에 추가 (subMethods는 메서드 이름과 함수로 구성된 객체)
- if (subMethods): subMethods 객체가 제공된 경우에만 실행
- for (var method in subMethods): subMethods 객체의 모든 속성을 반복
- SubClass.prototype[method] = subMethods[method];: 각각의 메서드를 서브클래스의 프로토타입에 추가

- 프로토타입 동결, 이 부분에서는 서브클래스의 프로토타입을 동결하여 수정할 수 없게 한다.
- Object.freeze(SubClass.prototype); : 서브클래스의 프로토타입 객체를 동결 (프로토타입에 새로운 속성을 추가하거나 기존 속성을 수정 또는 삭제할 수 없음)

- 서브클래스 반환

- Rectangle 생성자 함수
  - idth와 height를 받아서 객체의 속성으로 설정
  - getArea 메서드는 사각형의 면적을 계산하여 반환

- Square 생성자 함수 및 확장
  - extendClass 함수를 사용하여 Square를 Rectangle로 확장
  - this.super()(width, width);를 통해 수퍼클래스의 생성자를 호출

- Square 메서드 재정의
  - getArea 메서드를 재정의하고, this.super('getArea')()를 통해 수퍼클래스의 getArea 메서드를 호출

- Square 객체 생성 및 사용
  - new Square(10);을 통해 너비와 높이가 10인 정사각형을 생성
  - sq.getArea();을 호출하여 면적을 계산하고 출력
  - sq.super('getArea')();를 호출하여 수퍼클래스의 getArea 메서드를 직접 호출
```
