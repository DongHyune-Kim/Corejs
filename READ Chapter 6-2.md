---
# Chapter 6-1 실습 예제 설명입니다.
---

```
var Constructor = function(name) {
    this.name = name;
  };
  Constructor.prototype.method1 = function() {};
  Constructor.prototype.property1 = 'Constructor Prototype Property';
  
  var instance = new Constructor('Instance');
  console.dir(Constructor);
  console.dir(instance);
```

```
- Constructor라는 생성자 함수와 그 프로토타입에 메서드와 속성을 추가하고, 이를 이용해 객체를 생성한 후 객체와 생성자의 구조를 확인

- var Constructor = function(name) : Constructor라는 이름의 생성자 함수를 정의

- this.name = name; : 생성자 함수 내부에서 this는 새로 생성된 객체를 가리키고. 객체의 name 속성을 전달된 name 매개변수 값으로 설정

- Constructor.prototype.method1 = function() : Constructor 생성자의 프로토타입에 method1이라는 빈 메서드를 추가

- Constructor.prototype.property1 = 'Constructor Prototype Property'; : Constructor 생성자의 프로토타입에 property1이라는 속성을 추가하고, 그 값을 'Constructor Prototype Property'로 설정

- var instance = new Constructor('Instance'); : Constructor를 이용해 새로운 객체를 생성하고, instance 변수에 할당 (name 매개변수에 'Instance'를 전달)

- console.dir(Constructor); : Constructor 함수 객체의 구조를 콘솔에 출력

- console.dir(instance); : instance 객체의 구조를 콘솔에 출력
```
