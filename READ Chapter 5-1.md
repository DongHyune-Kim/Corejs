---
# Chapter 5-1 실습 예제 설명입니다.
---

```
var outer = function() {
    var a = 1;
    var inner = function() {
      console.log(++a);
    };
    inner();
  };
  outer();
```

```
- outer 함수를 정의하고, outer 함수 내에서 a 변수를 1로 초기화한다.

- inner 함수가 outer 함수 내에서 정의된다. inner 함수는 a 변수를 증가시키고, 그 값을 콘솔에 출력한다.

- inner 함수를 호출한다.

- 이후 outer 함수를 호출한다.

- outer 함수가 호출되면, 내부의 a 변수가 1로 초기화된다.

- inner 함수가 정의되고, 바로 호출된다.

- inner 함수가 호출되면 a 변수의 값을 1 증가시키고, 그 값을 콘솔에 출력한다.
```

```
결과 : inner 함수가 호출되면 a 변수의 값을 변경하고, 그 값을 출력한다.
	
	2
```
