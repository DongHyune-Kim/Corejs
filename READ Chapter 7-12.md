---
# Chapter 7-12 실습 예제 설명입니다.
---

```
var extendClass2 = (function() {
  var Bridge = function() {};
  return function(SuperClass, SubClass, subMethods) {
    Bridge.prototype = SuperClass.prototype;
    SubClass.prototype = new Bridge();
    SubClass.prototype.consturctor = SubClass;
    Bridge.prototype.constructor = SuperClass;
    if (subMethods) {
      for (var method in subMethods) {
        SubClass.prototype[method] = subMethods[method];
      }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
  };
})();
```

```
코드는 extendClass2라는 함수로 상속을 구현하는 또 다른 방법, 이 방법은 프로토타입 체인을 설정하고, 서브클래스에 추가 메서드를 정의할 수 있게 한다.

- Bridge = 빈 함수 (함수는 프로토타입 체인을 설정하는 데 사용)
- extendClass2 함수는 클로저를 사용하여 Bridge 함수를 캡슐화
- Bridge.prototype를 SuperClass.prototype으로 설정하여 서브클래스가 수퍼클래스의 프로토타입을 상속받게 한다.
- SubClass.prototype를 new Bridge()로 설정하여 서브클래스가 수퍼클래스의 프로토타입 체인을 유지
- SubClass.prototype.constructor를 SubClass로 설정하여 서브클래스의 인스턴스가 올바르게 생성되도록 한다.
- Bridge.prototype.constructor를 SuperClass로 설정하여 프로토타입 체인이 올바르게 설정
- subMethods 객체에 정의된 메서드를 SubClass.prototype에 추가
- SubClass.prototype을 동결하여 수정되지 않도록한다.
- 서브클래스(SubClass) 반환
```
