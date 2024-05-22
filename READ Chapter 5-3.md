---
# Chapter 5-1 실습 예제 설명입니다.
---

```
var outer = function() {
    var a = 1;
    var inner = function() {
      return ++a;
    };
    return inner;
  };
  var outer2 = outer();
  console.log(outer2()); 
  console.log(outer2());
```

```
- outer 함수가 호출된다.

- a 변수가 1로 초기화되고, inner 함수가 정의된다.

- outer 함수는 inner 함수를 반환한다.

- outer2 변수에 반환된 inner 함수가 저장된다.

- outer2( ) 첫 번째 호출 : inner 함수가 실행된다.
				a 변수가 2로 증가한다.
				따라서 2가 반환된다.
				console.log(outer2());는 2를 출력

- outer2() 두 번째 호출 : inner 함수가 다시 실행된다.
			       a 변수가 3으로 증가한다.
			       따라서 3이 반환됩니다.
			       console.log(outer2());는 3을 출력
```

```
결과 : 반환된 inner 함수는 outer 함수의 스코프 내에 있는 변수 a에 접근할 수 있으며, 그 값을 유지하고 변경할 수 있다. 
       각 호출마다 a의 값이 증가하여 다음 호출에 반영된다.

	     2
	     3
```
