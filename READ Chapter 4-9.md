---
# Chapter 4-9 실습 예제 설명입니다.
---

```
var obj1 = {
    name: 'obj1',
    func: function() {
      console.log(obj1.name);
    },
  };
  setTimeout(obj1.func, 1000);
```

```
- name 속성과 func 함수를 포함하여 obj1 객체가 생성된다.

- setTimeout 함수가 호출되어 1000밀리초(1초) 후에 obj1.func 함수를 실행하도록 설정한다.

- 1초 후, obj1.func 함수가 실행된다. (함수는 console.log(obj1.name)을 호출하여 obj1 객체의 name 속성 값을 콘솔에 출력한다.)
```

```
결과 : 1초 후, 콘솔에는 obj1이 출력됩니다. 해당 코드는 obj1 객체의 name 속성을 참조할 수 있다.
```
