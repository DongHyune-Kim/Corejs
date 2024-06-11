---
# Chapter 7-13 실습 예제 설명입니다.
---

```
var extendClass3 = function(SuperClass, SubClass, subMethods) {
  SubClass.prototype = Object.create(SuperClass.prototype);
  SubClass.prototype.constructor = SubClass;
  if (subMethods) {
    for (var method in subMethods) {
      SubClass.prototype[method] = subMethods[method];
    }
  }
  Object.freeze(SubClass.prototype);
  return SubClass;
};
```

```
extendClass3 함수는 상속을 구현하는 또 다른 방법이다.
이 방법은 ES5에서 제공하는 Object.create 메서드를 사용하여 서브클래스가 수퍼클래스의 프로토타입을 상속받도록한다.
이 방법은 프로토타입 체인을 설정하고, 서브클래스에 추가 메서드를 정의

- Object.create(SuperClass.prototype)를 사용하여 SuperClass의 프로토타입을 상속받는 새로운 객체를 생성
- SubClass.prototype에 이 객체를 할당하여 SubClass가 SuperClass의 프로퍼티와 메서드를 상속받도록 한다.
- 서브클래스의 constructor 프로퍼티를 SubClass로 설정하여 프로토타입 체인을 유지
- subMethods 객체에 정의된 메서드를 SubClass.prototype에 추가
- SubClass.prototype을 동결하여 수정되지 않도록 한다.
- 서브클래스 반환
```
