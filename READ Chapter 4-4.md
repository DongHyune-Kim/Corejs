---
# Chapter 4-4 실습 예제 설명입니다.
---

```
var newArr2 = [10, 20, 30].map(function(index, currentValue) {
    console.log(index, currentValue);
    return currentValue + 5;
  });
  console.log(newArr2);
```

```
- 코드는 인자의 방향을 임의로 바꾸어 사용한 예제이다.

- map 메서드의 콜백 함수는 currentValue: 현재 처리 중인 요소의 값, index: 현재 처리 중인 요소의 인덱스, array: 현재 처리 중인 배열을 매개변수로 받는다.

- 해당 코드에서는 map 메서드의 콜백 함수 매개변수의 순서가 잘못되었기 때문에 index 변수에는 currentValue가, currentValue 변수에는 index가 할당된다.

- 코드를 수정 : 수정된 코드는 올바르게 각 요소의 값과 인덱스를 콘솔에 출력하고, 변환된 새로운 배열을 반환한다.

- 수정된 코드:
var newArr2 = [10, 20, 30].map(function(currentValue, index) {
    console.log(currentValue, index);
    return currentValue + 5;
});
console.log(newArr2);
```

```
결과 : 코드는 배열의 각 요소를 변환하고, 변환 과정에서 요소의 값과 인덱스를 출력한 후, 변환된 새로운 배열을 출력한다.
	
	10 0
	20 1
	30 2
	[15, 25, 35]
```
