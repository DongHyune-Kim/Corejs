---
# Chapter 6-5 실습 예제 설명입니다.
---

```
var Person = function(name) {
    this.name = name;
  };
  var p1 = new Person('사람1'); // Person { name: "사람1" } true
  var p1Proto = Object.getPrototypeOf(p1);
  var p2 = new Person.prototype.constructor('사람2'); // Person { name: "사람2" } true
  var p3 = new p1Proto.constructor('사람3'); // Person { name: "사람3" } true
  var p4 = new p1.__proto__.constructor('사람4'); // Person { name: "사람4" } true
  var p5 = new p1.constructor('사람5'); // Person { name: "사람5" } true
  
  [p1, p2, p3, p4, p5].forEach(function(p) {
    console.log(p, p instanceof Person);
  });
```

```
- Person 생성자 함수와 그 프로토타입을 활용하여 여러 인스턴스를 생성하는 방법

- 생성된 각 인스턴스는 모두 Person 생성자 함수로 만들어지며, instanceof Person 연산자는 모두 true를 반환

- Person 생성자 함수는 name이라는 매개변수를 받아 this.name 속성으로 설정

- p1 객체를 Person 생성자 함수로 생성 (p1의 name 속성 = "사람1")

- p1Proto 변수는 p1 객체의 프로토타입을 참조 (p1Proto == Person.prototype)

- Person.prototype.constructor는 Person 생성자 함수를 가리킨다.

- new Person.prototype.constructor('사람2')는 Person 생성자 함수를 호출하여 p2 객체를 생성 (p2의 name 속성 = "사람2")

- p1Proto.constructor는 Person 생성자 함수를 가리킨다.

- new p1Proto.constructor('사람3')는 Person 생성자 함수를 호출하여 p3 객체를 생성 (p3의 name 속성 = "사람3")

- p1.__proto__.constructor는 Person 생성자 함수를 가리킨다.

- new p1.__proto__.constructor('사람4')는 Person 생성자 함수를 호출하여 p4 객체를 생성 (p4의 name 속성 = "사람4")

- p1.constructor는 Person 생성자 함수를 가리킨다. 

- new p1.constructor('사람5')는 Person 생성자 함수를 호출하여 p5 객체를 생성 (p5의 name 속성 = "사람5")

- 마지막으로, 생성된 객체들이 Person의 인스턴스인지 확인

  →  각 객체와 instanceof Person의 결과를 출력

  →  모든 객체는 Person 생성자 함수로 생성 (instanceof Person → true를 반환)
```
