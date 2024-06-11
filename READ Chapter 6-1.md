---
# Chapter 6-1 실습 예제 설명입니다.
---
```
var Person = function(name) {
    this._name = name;
  };
  Person.prototype.getName = function() {
    return this._name;
  };
```
```
- Person이라는 객체를 정의하고, 그 객체에 대해 이름을 반환하는 메서드를 제공

- var Person = function(name) : Person이라는 변수에 익명 함수를 할당 (함수는 생성자 함수로 사용)

- this._name = name; : this는 새로 생성된 객체를 가리키고,  객체의 _name 속성을 전달된 name 매개변수 값으로 설정

- Person.prototype.getName = function() : Person 생성자의 프로토타입에 getName 메서드를 추가 (모든 Person 객체는 이 메서드를 상속받음)

- return this._name; : getName 메서드는 객체의 _name 속성 값을 반환
```
