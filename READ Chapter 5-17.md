---
# Chapter 5-17 실습 예제 설명입니다.
---

```
var curry3 = function(func) {
    return function(a) {
      return function(b) {
        return func(a, b);
      };
    };
  };
  
  var getMaxWith10 = curry3(Math.max)(10);
  console.log(getMaxWith10(8)); // 10
  console.log(getMaxWith10(25)); // 25
  
  var getMinWith10 = curry3(Math.min)(10);
  console.log(getMinWith10(8)); // 8
  console.log(getMinWith10(25)); // 10
```

```
- curry3 함수 : 하나의 함수를 받아서 두 개의 인수를 고정하는 새로운 함수를 반환한다.

- 반환된 함수는 또 다른 함수를 반환하며, 이 함수는 마지막 인수를 받아서 원래 함수 func를 호출한다.

- curry3 함수를 사용하여 Math.max와 Math.min 함수를 커링한다.

- getMaxWith10, getMinWith10 : 각각 10을 첫 번째 인수로 갖는 새로운 함수이다.

- 이렇게 생성된 함수들은 첫 번째 인수가 10으로 고정된 상태에서 두 번째 인수를 받아서 원래 함수를 호출한다.
```

```
결과 : 코드는 커링(currying) 기법을 사용하여 일부 인수를 고정한 후에 함수를 호출하는 방법을 설명한다.
       해당 코드는 curry3 함수를 사용하여 3개의 인수를 갖는 함수를 커링한다.

       getMaxWith10(8) : 10과 8을 비교하여 더 큰 값을 반환한다. (따라서 10이 출력된다.)
       getMaxWith10(25) : 10과 25를 비교하여 더 큰 값을 반환한다. (따라서 25가 출력된다.)
       getMinWith10(8) : 10과 8을 비교하여 더 작은 값을 반환한다. (따라서 8이 출력된다.)
       getMinWith10(25)는 : 10과 25를 비교하여 더 작은 값을 반환한다. (따라서 10이 출력된다.)
```
