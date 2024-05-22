---
# Chapter 4-10 실습 예제 설명입니다.
---

```
var obj1 = {
    name: 'obj1',
    func: function() {
      console.log(obj1.name);
    },
  };
  var obj2 = {
    name: 'obj2',
    func: obj1.func,
  };
  var callback2 = obj2.func();
  setTimeout(callback2, 1500);
  
  var obj3 = { name: 'obj3' };
  var callback3 = obj1.func.call(obj3);
  setTimeout(callback3, 2000);
```

```
- 두 개의 객체 obj1과 obj2를 정의한다.

- obj1 객체는 name 속성과 func 함수를 가지고 있으며, obj2 객체는 name 속성과 obj1.func 함수를 참조하는 func 속성을 가지고 있다.

- obj2.func 함수를 실행하여 반환 값을 callback2 변수에 저장한다. (bj2.func는 반환 값이 없기 때문에 callback2는 undefined가 된다.)

- setTimeout 함수는 1500밀리초(1.5초) 후에 callback2를 실행하도록 설정한다. (callback2는 undefined이므로 아무 일도 일어나지 않는다.)

- obj3 객체를 정의하여 name 속성을 obj3로 설정한다.

- all 메서드를 사용하여 obj1.func 함수를 obj3 객체의 컨텍스트에서 호출한다.

- 함수는 obj3의 name 속성을 참조하여 obj1.name 대신 obj3.name을 출력할 것이다.

- obj1.func 함수는 obj1.name을 참조하고 있으므로, 결과적으로 undefined를 반환한다.

- setTimeout 함수는 2000밀리초(2초) 후에 callback3을 실행하도록 설정한다. (callback3는 undefined이므로 아무 일도 일어나지 않는다.)
```

```
결과 : 코드는 obj2.func()와 obj1.func.call(obj3)가 즉시 실행되며 반환 값을 callback2와 callback3에 저장한다.
       함수들은 반환 값을 지정하지 않으므로 undefined를 반환하게 되고, 그 결과 setTimeout은 아무런 함수도 실행하지 않는다.
```
