---
# Chapter 4-8 실습 예제 설명입니다.
---

```
var obj1 = {
    name: 'obj1',
    func: function() {
      var self = this;
      return function() {
        console.log(self.name);
      };
    },
  };
  var callback = obj1.func();
  setTimeout(callback, 1000);
```

```
- obj1 객체에는 name 속성과 func 메서드가 들어있다.

- func 메서드 내부에서 self 변수를 this에 할당한다. (this : obj1 객체)

- func 메서드는 익명 함수를 반환한다.

- 익명 함수는 self를 사용하여 obj1 객체의 name 속성에 접근한다.

- obj1.func()를 호출하면 func 메서드가 실행되고, 익명 함수가 반환된다.

- 반환된 익명 함수는 callback 변수에 저장된다. (함수는 self 변수를 통해 obj1 객체의 name 속성을 기억한다.)

- setTimeout 함수를 사용하여 1초 후에 callback 함수를 실행한다.

- callback 함수가 실행될 때, self는 obj1 객체를 가리키고 있으므로 self.name은 'obj1'이 된다.
```

```
결과 : 1초 후에 callback 함수가 호출되면, 콘솔에 self.name 값인 'obj1'이 출력된다.
       코드는 self 변수를 사용하여 함수 내부에서의 this 키워드의 값이 변경되지 않도록 보존하는 방법을 나타낸다.
       (특히 익명 함수나 콜백 함수가 다른 컨텍스트에서 호출될 때 유용하다.)
```

```
실행 결과 : obj1
```
