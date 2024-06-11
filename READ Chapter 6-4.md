---
# Chapter 6-4 실습 예제 설명입니다.
---

```
var NewConstructor = function() {
    console.log('this is new constuctor!');
  };
  var dataTypes = [
    1, // Number & false
    'test', // String & false
    true, // Boolean & false
    {}, // NewConstructor & false
    [], // NewConstructor & false
    function() {}, // NewConstructor & false
    /test/, // NewConstructor & false
    new Number(), // NewConstructor & false
    new String(), // NewConstructor & false
    new Boolean(), // NewConstructor & false
    new Object(), // NewConstructor & false
    new Array(), // NewConstructor & false
    new Function(), // NewConstructor & false
    new RegExp(), // NewConstructor & false
    new Date(), // NewConstructor & false
    new Error(), // NewConstructor & false
  ];
  
  dataTypes.forEach(function(d) {
    d.constructor = NewConstructor;
    console.log(d.constructor.name, '&', d instanceof NewConstructor);
  });
```

```
- 다양한 데이터 타입의 배열을 생성, 각 요소의 생성자(constructor) 함수를 NewConstructor로 설정한 후, 각 요소가 NewConstructor의 인스턴스인지 확인

- dataTypes 배열에는 다양한 데이터 타입의 값들이 포함

- forEach 메서드를 사용하여 배열의 각 요소에 대해 작업을 수행

- d.constructor = NewConstructor; : d 객체의 constructor 속성을 NewConstructor로 설정 (d의 실제 생성자를 변경하지 않는다.)

- console.log(d.constructor.name, '&', d instanceof NewConstructor); : d.constructor.name: NewConstructor의 이름을 출력

- d instanceof NewConstructor : 항상 false, instanceof 연산자는 객체의 실제 프로토타입 체인을 검사하기 때문

- constructor 속성을 변경해도 객체의 실제 프로토타입 체인에는 영향을 주지 않는다.

- instanceof 연산자의 결과는 여전히 객체의 원래 생성자에 의해 결정

- d instanceof NewConstructor = 항상 false
```
