---
# Chapter 4-16 실습 예제 설명입니다.
---

```
var addCoffee = function(prevName, name) {
    setTimeout(function() {
      coffeeMaker.next(prevName ? prevName + ', ' + name : name);
    }, 500);
  };
  var coffeeGenerator = function*() {
    var espresso = yield addCoffee('', '에스프레소');
    console.log(espresso);
    var americano = yield addCoffee(espresso, '아메리카노');
    console.log(americano);
    var mocha = yield addCoffee(americano, '카페모카');
    console.log(mocha);
    var latte = yield addCoffee(mocha, '카페라떼');
    console.log(latte);
  };
  var coffeeMaker = coffeeGenerator();
  coffeeMaker.next();
```

```
- addCoffee 함수는 이전 커피 이름(prevName)과 현재 추가할 커피 이름(name)을 받아서 500밀리초(0.5초) 후에 실행된다.

- setTimeout 콜백에서, 이전 이름이 있으면 prevName + ', ' + name을, 없으면 name을 만들어 coffeeMaker.next에 전달한다.

- coffeeMaker.next는 제너레이터의 다음 yield 표현식을 실행하도록 한다.

- coffeeGenerator는 제너레이터 함수로, 각 단계에서 yield를 사용하여 addCoffee 함수를 호출한다.

- yield 표현식은 addCoffee 함수가 완료될 때까지 제너레이터의 실행을 일시 중지한다. 이후 next 메서드가 호출되면, yield는 next에 전달된 값을 반환한다.

- 각 단계에서 addCoffee 함수는 새로운 커피 이름을 누적하여 반환한다.

- coffeeMaker는 coffeeGenerator 제너레이터 함수의 인스턴스이다.

- coffeeMaker.next()는 제너레이터의 실행을 시작하고, 첫 번째 yield 표현식(addCoffee('', '에스프레소'))까지 실행한다.
```

```
결과 : 각 단계에서 커피 이름이 누적되어 콘솔에 출력된다.
       addCoffee 함수는 setTimeout을 사용하여 500밀리초 후에 제너레이터의 다음 yield를 호출하고, 이렇게 함으로써 비동기 작업을 순차적으로 처리할 수 있다.

      에스프레소
      에스프레소, 아메리카노
      에스프레소, 아메리카노, 카페모카
      에스프레소, 아메리카노, 카페모카, 카페라떼
```
