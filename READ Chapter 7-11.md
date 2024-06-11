---
# Chapter 7-11 실습 예제 설명입니다.
---

```
var extendClass1 = function(SuperClass, SubClass, subMethods) {
  SubClass.prototype = new SuperClass();
  for (var prop in SubClass.prototype) {
    if (SubClass.prototype.hasOwnProperty(prop)) {
      delete SubClass.prototype[prop];
    }
  }
  SubClass.prototype.consturctor = SubClass;
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
프로토타입 상속을 사용하여 Rectangle과 Square을 정의하고, Square이 Rectangle을 상속받도록 구현, 정사각형 객체를 생성하여 면적을 계산
extendClass1 함수는 수퍼클래스(SuperClass)와 서브클래스(SubClass) 간의 상속 관계를 설정하고, 서브클래스(SubClass)에 추가 메서드(subMethods)를 정의

- SubClass의 프로토타입을 SuperClass의 인스턴스로 설정하여 SubClass가 SuperClass의 프로퍼티와 메서드를 상속받도록 한다.

- SubClass.prototype에 직접 정의된(상속받은 것이 아닌) 프로퍼티를 삭제 (이는 상속받은 프로퍼티와의 충돌을 방지)

- 서브클래스의 constructor 프로퍼티를 SubClass로 설정하여 프로토타입 체인을 유지

- subMethods 객체에 정의된 메서드를 가져와 SubClass.prototype에 추가

- SubClass.prototype을 동결하여 수정되지 않도록 한다.

- SubClass 반환
```
