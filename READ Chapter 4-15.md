---
# Chapter 4-15 실습 예제 설명입니다.
---

```
var addCoffee = function(name) {
    return function(prevName) {
      return new Promise(function(resolve) {
        setTimeout(function() {
          var newName = prevName ? prevName + ', ' + name : name;
          console.log(newName);
          resolve(newName);
        }, 500);
      });
    };
  };
  addCoffee('에스프레소')()
    .then(addCoffee('아메리카노'))
    .then(addCoffee('카페모카'))
    .then(addCoffee('카페라떼'));
```

```
- addCoffee는 커피 이름(name)을 받아서 내부에 prevName을 매개변수로 받는 함수를 반환한다. (내부 함수는 새로운 Promise를 생성한다.)

- Promise 내부에서 500밀리초(0.5초) 후에 prevName이 있으면 prevName + ', ' + name으로, 없으면 name으로 newName을 설정한다.

- newName을 콘솔에 출력하고, resolve(newName)을 호출하여 newName을 다음 단계로 전달한다.

- addCoffee('에스프레소')()는 첫 번째 addCoffee 함수를 호출하여 '에스프레소'를 처리한다.

- 첫 번째 호출의 결과로 반환된 Promise가 해결되면, addCoffee('아메리카노')가 호출되어 다음 커피 이름을 처리한다.

- 이러한 과정을 반복하여 각각의 커피 이름을 500밀리초(0.5초) 간격으로 처리한다.
```

```
결과 : 
        500밀리초 후 : '에스프레소' 출력
       1000밀리초 후 : '에스프레소, 아메리카노' 출력
       1500밀리초 후 : '에스프레소, 아메리카노, 카페모카' 출력
       2000밀리초 후 : '에스프레소, 아메리카노, 카페모카, 카페라떼' 출력
```
