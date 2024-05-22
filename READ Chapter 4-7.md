---
# Chapter 4-7 실습 예제 설명입니다.
---

```
var obj = {
    vals: [1, 2, 3],
    logValues: function(v, i) {
      console.log(this, v, i);
    },
  };
  obj.logValues(1, 2); 
  [4, 5, 6].forEach(obj.logValues); 
```

```
- obj 객체의 logValues 메서드를 호출, this는 obj 객체를 매개변수 v는 1, i는 2를 나타낸다.
```

```
결과 : { vals: [1, 2, 3], logValues: [Function: logValues] } 1 2 출력
```

```
- 출력된 this는 obj 객체를 의미한다.


- forEach 메서드는 배열의 각 요소에 대해 콜백 함수를 호출한다.

- obj.logValues 메서드를 콜백으로 전달하지만, this 바인딩이 obj로 유지되지 않는다.

- forEach 내부에서 호출된 obj.logValues 함수의 this는 기본적으로 undefined (엄격) 또는 window (비엄격) 객체가 된다.

- v는 배열의 요소, i는 배열의 인덱스를 의미한다.
```

```
결과 (비엄격 모드의 경우): 
      Window 4 0
      Window 5 1
      Window 6 2
```

```
결과 (엄격 모드의 경우): 
      undefined 4 0
      undefined 5 1
      undefined 6 2
```

```
- this는 각각 window 객체(비엄격) 또는 undefined(엄격)를 가리키며, v와 i는 각각 배열의 요소와 인덱스를 의미한다.

- 만약 forEach 내부에서도 this가 obj를 가리키게 하려면, bind 메서드를 사용하여 this를 명시적으로 바인딩할 수 있다.

- [4, 5, 6].forEach(obj.logValues.bind(obj)); → 이렇게 하면 this가 항상 obj를 가리킨다.
```

```
결과: 
      { vals: [1, 2, 3], logValues: [Function: logValues] } 4 0
      { vals: [1, 2, 3], logValues: [Function: logValues] } 5 1
      { vals: [1, 2, 3], logValues: [Function: logValues] } 6 2

// logValues 함수의 this가 항상 obj를 가리킨다.
```
