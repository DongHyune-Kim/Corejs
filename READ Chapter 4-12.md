---
# Chapter 4-12 실습 예제 설명입니다.
---

```
setTimeout(
    function(name) {
      var coffeeList = name;
      console.log(coffeeList);
  
      setTimeout(
        function(name) {
          coffeeList += ', ' + name;
          console.log(coffeeList);
  
          setTimeout(
            function(name) {
              coffeeList += ', ' + name;
              console.log(coffeeList);
  
              setTimeout(
                function(name) {
                  coffeeList += ', ' + name;
                  console.log(coffeeList);
                },
                500,
                '카페라떼'
              );
            },
            500,
            '카페모카'
          );
        },
        500,
        '아메리카노'
      );
    },
    500,
    '에스프레소'
  );
```

```
- 함수는 500밀리초(0.5초) 후에 실행되며, ame 매개변수를 사용하여 커피의 이름을 받는다.

- coffeeList 변수에 첫 번째 커피의 이름을 할당하고, 그 값을 콘솔에 출력한다.

- 함수는 500밀리초(0.5초) 후에 실행되며, 두 번째 커피의 이름을 받는다.

- coffeeList 변수에 첫 번째 커피와 두 번째 커피를 추가하고, 그 값을 콘솔에서 출력한다.

- 함수는 500밀리초(0.5초) 후에 실행되며, 세 번째 커피의 이름을 받는다.

- coffeeList 변수에 첫 번째, 두 번째, 세 번째 커피를 추가하고, 그 값을 콘솔에 출력한다.

- 함수는 500밀리초(0.5초) 후에 실행되며, 네 번째 커피의 이름을 받는다.

- coffeeList 변수에 네 번째 커피를 추가하고, 그 값을 콘솔에 출력한다.
```

```
결과 : 각 setTimeout 함수가 순차적으로 호출되며, 각각의 내부 함수에서 coffeeList 변수가 누적되어 출력
	
      에스프레소
      에스프레소, 아메리카노
      에스프레소, 아메리카노, 카페모카
      에스프레소, 아메리카노, 카페모카, 카페라떼
```
