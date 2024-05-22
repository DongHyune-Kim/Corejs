---
# Chapter 4-17 실습 예제 설명입니다.
---

```
var addCoffee = function(name) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(name);
      }, 500);
    });
  };
  var coffeeMaker = async function() {
    var coffeeList = '';
    var _addCoffee = async function(name) {
      coffeeList += (coffeeList ? ',' : '') + (await addCoffee(name));
    };
    await _addCoffee('에스프레소');
    console.log(coffeeList);
    await _addCoffee('아메리카노');
    console.log(coffeeList);
    await _addCoffee('카페모카');
    console.log(coffeeList);
    await _addCoffee('카페라떼');
    console.log(coffeeList);
  };
  coffeeMaker();
```

```
- addCoffee 함수는 커피 이름(name)을 받아 새로운 Promise를 반환한다.

- setTimeout을 사용하여 500밀리초(0.5초) 후에 resolve(name)을 호출하여 name을 반환한다.

- coffeeMaker 함수는 async 함수로 정의되어 비동기 작업을 await 키워드로 처리한다.

- coffeeList는 빈 문자열로 초기화되며, 커피 이름을 누적하는 데 사용된다.

- _addCoffee 내부 함수는 name을 받아 addCoffee 함수가 반환하는 Promise가 해결될 때까지 기다린다. await addCoffee(name)이 완료되면, coffeeList에 이름을 추가한다.

- await _addCoffee('에스프레소'), await _addCoffee('아메리카노'), await _addCoffee('카페모카'), await _addCoffee('카페라떼')를 차례로 호출하여 각 커피 이름을 순차적으로 추가하고, 각 단계마다 coffeeList를 콘솔에 출력한다.
```

```
결과 : 각 단계에서 addCoffee 함수가 비동기적으로 실행되고, 500밀리초(0.5초) 후에 다음 단계로 진행된다.
       async와 await 키워드를 사용하여 코드가 동기적으로 실행되는 것처럼 작성되어 가독성을 높인다.

      에스프레소
      에스프레소, 아메리카노
      에스프레소, 아메리카노, 카페모카
      에스프레소, 아메리카노, 카페모카, 카페라떼
```
