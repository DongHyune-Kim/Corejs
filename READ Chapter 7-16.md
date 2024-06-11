---
# Chapter 7-16 실습 예제 설명입니다.
---

```
var Rectangle = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
};
var Square = class extends Rectangle {
  constructor(width) {
    super(width, width);
  }
  getArea() {
    console.log('size is :', super.getArea());
  }
};
```

```
- ES6 클래스를 사용하여 상속을 구현, Rectangle 클래스를 정의하고, 이를 상속하는 Square 클래스를 정의

- Rectangle 클래스를 정의
  - Rectangle 클래스는 두 개의 매개변수 width와 height를 받아 생성자를 통해 속성을 초기화
  - getArea 메서드는 사각형의 넓이를 계산하여 반환

- Square 클래스를 정의
  - Square 클래스는 Rectangle 클래스를 extends 키워드를 사용하여 상속
  - constructor에서는 width 하나의 매개변수를 받아서, 이를 두 번 전달하여 정사각형의 width와 height를 같은 값으로 설정, super(width, width)를 통해 부모 클래스 Rectangle의 생성자를 호출
  - getArea 메서드는 부모 클래스의 getArea 메서드를 호출하여 계산된 넓이를 콘솔에 출력, super.getArea()를 사용하여 부모 클래스의 메서드를 호출

  - ctangle 클래스의 인스턴스를 생성하고 getArea 메서드를 호출하면 12가 출력
  - Square 클래스의 인스턴스를 생성하고 getArea 메서드를 호출하면 size is : 25가 출력
```
