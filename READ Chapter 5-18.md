---
# Chapter 5-18 실습 예제 설명입니다.
---

```
var curry5 = function(func) {
    return function(a) {
      return function(b) {
        return function(c) {
          return function(d) {
            return function(e) {
              return func(a, b, c, d, e);
            };
          };
        };
      };
    };
  };
  var getMax = curry5(Math.max);
  console.log(getMax(1)(2)(3)(4)(5));
```

```
- curry5 함수 : 하나의 함수를 받아서 다섯 개의 인수를 고정하는 새로운 함수를 반환한다.

- 반환된 함수는 다시 네 개의 인수를 고정하는 새로운 함수를 반환하며, 다섯 번째 인수까지 고정한 다음 원래 함수를 호출한다.

- curry5 함수를 사용하여 Math.max 함수를 커링한다.

- getMax 함수 : 다섯 개의 인수를 받아서 최대값을 반환하는 함수를 의미한다.

- getMax(1)(2)(3)(4)(5)는 1, 2, 3, 4, 5 중에서 최대값을 반환한다.
```

```
결과 : 코드는 5개의 인수를 갖는 함수를 커링하는 curry5 함수를 정의하고, 이를 사용하여 Math.max 함수를 커링한다.
       그 다음 커링된 함수를 사용하여 5개의 숫자 중 최대값을 찾는다.

       getMax(1)(2)(3)(4)(5) : 다섯 개의 인수를 받아서 최대값을 반환한다.
       Math.max(1, 2, 3, 4, 5)와 동일한 결과를 반환하므로, 5가 출력된다.
```
