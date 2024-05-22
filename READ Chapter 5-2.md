---
# Chapter 5-2 실습 예제 설명입니다.
---

```
var outer = function() {
    var a = 1;
    var inner = function() {
      return ++a;
    };
    return inner();
  };
  var outer2 = outer();
  console.log(outer2);
```

```
- outer 함수를 정의하고, outer 함수 내에서 a 변수가 1로 초기화된다.

- inner 함수가 outer 함수 내에서 정의된다. inner 함수는 a 변수를 증가시키고 그 값을 반환한다.

- outer 함수는 inner 함수를 호출하고 그 결과를 반환한다.

- outer 함수를 호출하고, 그 반환 값을 outer2 변수에 저장한다.

- outer 함수가 호출되면, 내부의 a 변수가 1로 초기화된다.

- inner 함수가 정의되고 바로 호출된다.

- inner 함수가 호출되면서 a 변수를 1 증가시킨다. 따라서 a는 2가 된다.

- inner 함수는 증가된 a의 값인 2를 반환다.

- outer 함수는 inner 함수의 반환 값인 2를 반환한다.

- outer2 변수에 저장된 값을 콘솔에 출력한다. (값은 2가된다.)
```

```
결과 : inner 함수는 outer 함수 내에서 호출되며, outer 함수는 inner 함수의 결과를 반환한다.
       outer 함수의 호출 결과는 outer2 변수에 저장되고, 콘솔에 출력된다.
	
       2
```
