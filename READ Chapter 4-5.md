---
# Chapter 4-5 실습 예제 설명입니다.
---

```
Array.prototype.map = function(callback, thisArg) {
    var mappedArr = [];
    for (var i = 0; i < this.length; i++) {
      var mappedValue = callback.call(thisArg || window, this[i], i, this);
      mappedArr[i] = mappedValue;
    }
    return mappedArr;
  };
```

```
- Array.prototype.map에 대한 사용자 정의 구현을 정의하고 callback과 thisArg 두 개의 매개변수를 받는다.

- 빈 배열 mappedArr를 생성한다. (이 배열은 변환된 결과를 저장)

- for 문을 사용하여 배열의 각 요소를 반복한다. (this.length : map 메서드가 호출된 배열의 길이를 의미)

- callback 함수를 호출하여 현재 요소를 변환, callback.call 메서드를 사용하여 thisArg를 this로 설정한다.
- 만약 thisArg가 제공되지 않았다면 기본값으로 window를 사용한다.

- callback 함수는 세 개의 인수(this[i] : 현재 요소의 값, i : 현재 요소의 인덱스, this: map 메서드가 호출된 배열 자체)를 받는다.

- 변환된 값을 mappedArr 배열의 현재 인덱스에 저장한다.

- 모든 요소가 변환된 후, 새 배열 mappedArr를 반환한다.
```

```
결과 : numbers 배열의 각 요소에 대해 callback 함수가 호출되고, callback 함수는 각 요소를 두 배로 변환, 그 결과는 newNumbers 배열에 저장된다.
	
	최종적으로 newNumbers 배열은 [2, 4, 6]
```
