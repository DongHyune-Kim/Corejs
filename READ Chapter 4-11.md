---
# Chapter 4-11 실습 예제 설명입니다.
---

```
var obj1 = {
    name: 'obj1',
    func: function() {
      console.log(this.name);
    },
  };
  setTimeout(obj1.func.bind(obj1), 1000);
  
  var obj2 = { name: 'obj2' };
  setTimeout(obj1.func.bind(obj2), 1500);
```

```
- obj1 객체는 name 속성과 func 함수를 가진다.

- func 함수는 this.name을 콘솔에 출력한다. (this는 함수가 호출될 때의 컨텍스트(문맥)를 가리킨다.)

- setTimeout 함수는 1000밀리초(1초) 후에 obj1.func 함수를 호출하도록 설정한다.

- obj1.func.bind(obj1)는 bind 메서드를 사용하여 obj1.func 함수의 this를 obj1로 고정한다. 1초 후에 호출될 때 this는 항상 obj1을 가리킨다.

- 1초 후, 콘솔에는 obj1이 출력된다.

- obj2 객체는 name 속성을 obj2로 설정한다.

- setTimeout 함수는 1500밀리초(1.5초) 후에 obj1.func 함수를 호출하도록 설정한다.

- obj1.func.bind(obj2)는 bind 메서드를 사용하여 obj1.func 함수의 this를 obj2로 고정한다.  1.5초 후에 호출될 때 this는 항상 obj2를 가리킨다.

- 1.5초 후, 콘솔에는 obj2가 출력된다.
```

```
결과 : setTimeout을 사용하여 두 개의 타이머를 설정한다.
      첫 번째 타이머는 1초 후 obj1의 컨텍스트에서 func 함수를 호출한다. (this는 obj1을 가리키므로 obj1이 출력된다.)
      두 번째 타이머는 1.5초 후에 obj2의 컨텍스트에서 func 함수를 호출한다. (this는 obj2를 가리키므로 obj2가 출력된다.)

      코드는 bind 메서드를 사용하여 this 바인딩을 적절히 설정함으로써 원하는 컨텍스트에서 함수를 호출하는 방법을 나타낸다.
```
