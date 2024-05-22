---
# Chapter 4-13 실습 예제 설명입니다.
---

```
var coffeeList = '';

var addEspresso = function(name) {
  coffeeList = name;
  console.log(coffeeList);
  setTimeout(addAmericano, 500, '아메리카노');
};
var addAmericano = function(name) {
  coffeeList += ', ' + name;
  console.log(coffeeList);
  setTimeout(addMocha, 500, '카페모카');
};
var addMocha = function(name) {
  coffeeList += ', ' + name;
  console.log(coffeeList);
  setTimeout(addLatte, 500, '카페라떼');
};
var addLatte = function(name) {
  coffeeList += ', ' + name;
  console.log(coffeeList);
};

setTimeout(addEspresso, 500, '에스프레소');
```

```
- coffeeList 변수는 빈 문자열로 초기화하며, 커피 리스트를 저장하는 데 사용된다.

- addEspresso 함수는 name 매개변수를 받아 coffeeList 변수에 저장한다.

- 그 후 coffeeList를 콘솔에 출력하고, 500밀리초(0.5초) 후에 addAmericano 함수를 호출한다. (addAmericano 함수에는 '아메리카노'라는 인수를 전달한다.)

- addAmericano 함수는 name 매개변수를 받아 coffeeList에 추가한다.

- 그 후 업데이트된 coffeeList를 콘솔에 출력하고, 500밀리초(0.5초) 후에 addMocha 함수를 호출한다. (addMocha 함수에는 '카페모카'라는 인수를 전달한다.)

- addMocha 함수는 name 매개변수를 받아 coffeeList에 추가한다.

- 그 후 업데이트된 coffeeList를 콘솔에 출력하고, 500밀리초(0.5초) 후에 addLatte 함수를 호출한다. (addLatte 함수에는 '카페라떼'라는 인수를 전달한다.)

- addLatte 함수는 name 매개변수를 받아 coffeeList에 추가한다.

- 그 후 최종 업데이트된 coffeeList를 콘솔에 출력한다.

- setTimeout 함수는 500밀리초(0.5초) 후에 addEspresso 함수를 호출한다. (addEspresso 함수에는 '에스프레소'라는 인수를 전달한다.)
```

```
결과 : 각각 500밀리초 간격으로 coffeeList가 업데이트되고 출력된다.
	 
      에스프레소
      에스프레소, 아메리카노
      에스프레소, 아메리카노, 카페모카
      에스프레소, 아메리카노, 카페모카, 카페라떼
```
