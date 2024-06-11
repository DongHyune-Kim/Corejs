---
# Chapter 6-6 실습 예제 설명입니다.
---

```
var Person = function(name) {
    this.name = name;
  };
  Person.prototype.getName = function() {
    return this.name;
  };
  
  var iu = new Person('지금');
  iu.getName = function() {
    return '바로 ' + this.name;
  };
  console.log(iu.getName()); // 바로 지금
```

```
- Person 생성자 함수와 그 프로토타입에 정의된 메서드를 보여주고, 특정 인스턴스에 대해 메서드를 재정의

- Person 생성자 함수는 name이라는 매개변수를 받아 this.name 속성으로 설정

- Person.prototype.getName 메서드는 this.name 속성을 반환하도록 정의 (이 메서드는 Person의 모든 인스턴스에서 사용)

- iu 객체를 Person 생성자 함수로 생성 (iu 객체의 name 속성 = "지금")

- iu 객체에 대해 getName 메서드를 재정의

- 새로운 getName 메서드는 this.name 앞에 "바로 "를 추가하여 반환 (메서드는 iu 객체에만 적용되며, Person의 다른 인스턴스에는 영향을 미치지 않는다.)

- console.log(iu.getName());는 iu 객체의 재정의된 getName 메서드를 호출하고 그 결과를 콘솔에 출력 (출력 결과 : "바로 지금")
```
