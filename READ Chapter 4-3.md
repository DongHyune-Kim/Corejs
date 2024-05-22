---
# Chapter 4-3 실습 예제 설명입니다.
---

```
var newArr = [10, 20, 30].map(function(currentValue, index) {
    console.log(currentValue, index);
    return currentValue + 5;
  });
  console.log(newArr);
```

```
- [10, 20, 30] 배열을 map() 메서드를 사용하여 순회한다.

- map() 메서드는 배열의 각 요소에 대해 주어진 콜백 함수를 호출하고, 그 결과를 새로운 배열(newArr)에 저장한다.

- 콜백 함수는 두 개의 매개변수를 받는다. ( currentValue : 현재 처리 중인 요소의 값, index : 현재 처리 중인 요소의 인덱스. )

- 콜백 함수 내부에서 현재 요소의 값(currentValue)과 인덱스(index)를 콘솔에 출력한다.

- return currentValue + 5; → 현재 요소의 값에 5를 더한 값을 반환한다. ( newArr는 반환 값으로 배열의 해당 인덱스 위치에 저장 )

- map() 메서드가 반환한 새로운 배열 newArr을 콘솔에 출력한다.
```

```
결과 : 배열의 각 요소를 변환하고, 변환 과정에서 요소의 값과 인덱스를 출력한 후, 변환된 새로운 배열을 출력한다.
	
      10 0
      20 1
      30 2
      [15, 25, 35]
```
