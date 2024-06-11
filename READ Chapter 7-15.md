---
# Chapter 7-15 실습 예제 설명입니다.
---

```
var ES5 = function(name) {
  this.name = name;
};
ES5.staticMethod = function() {
  return this.name + ' staticMethod';
};
ES5.prototype.method = function() {
  return this.name + ' method';
};
var es5Instance = new ES5('es5');
console.log(ES5.staticMethod()); // es5 staticMethod
console.log(es5Instance.method()); // es5 method

var ES6 = class {
  constructor(name) {
    this.name = name;
  }
  static staticMethod() {
    return this.name + ' staticMethod';
  }
  method() {
    return this.name + ' method';
  }
};
var es6Instance = new ES6('es6');
console.log(ES6.staticMethod()); // es6 staticMethod
console.log(es6Instance.method()); // es6 method
```

```
- ES5와 ES6의 클래스 정의 방법을 비교하며, 각각의 인스턴스와 정적 메서드를 사용
- S5라는 생성자 함수를 정의, 인스턴스를 생성할 때 name 속성을 초기화

- ES5 생성자 함수에 정적 메서드를 추가 (정적 메서드는 인스턴스가 아닌 생성자 함수 자체에 속함)
- ES5 생성자 함수의 프로토타입에 인스턴스 메서드를 추가, 인스턴스 메서드는 생성된 인스턴스에서 호출 가능

- es5Instance라는 이름의 ES5 클래스 인스턴스를 생성

- 정적 메서드와 인스턴스 메서드를 호출

- 첫 번째 호출에서 오류가 발생 → ES5.staticMethod()가 this.name을 참조할 때, this가 ES5 클래스 자체를 가리키기 때문에 오류가 발생
- ES5 클래스에는 name 속성이 없으므로 undefined가 반환
  → 해결방법 → ES5.name = 'es5';을 설정하거나 ES5.staticMethod()를 올바르게 호출


- ES6 클래스 구문을 사용하여 ES6 클래스를 정의
- constructor는 생성자 메서드로, 인스턴스를 초기화 (static staticMethod = 정적 메서드, method = 인스턴스 메서드)

- es6Instance라는 이름의 ES6 클래스 인스턴스를 생성

- 정적 메서드와 인스턴스 메서드를 호출

- 첫 번째 호출은 오류를 발생 → ES6.staticMethod()가 this.name을 참조할 때, this가 ES6 클래스 자체를 가리키므로 name 속성이 없기 때문
- ES6 클래스의 이름을 name 속성으로 사용하고자 하면 ES6 클래스 자체에 name 속성을 설정

- 오류 수정 : 두 코드 모두에서 정적 메서드를 올바르게 호출하기 위해 클래스 자체에 name 속성을 추가 (이는 각 클래스의 정적 메서드 호출이 제대로 동작하게 함)
```
 
