---
# Chapter 5-13 실습 예제 설명입니다.
---

```
var add = function() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  };
  var addPartial = add.bind(null, 1, 2, 3, 4, 5);
  console.log(addPartial(6, 7, 8, 9, 10)); // 55
```

```
- add 함수 : 임의의 개수의 인자를 받아서 모든 인자의 합을 반환한다.

- arguments 객체를 사용하여 전달된 모든 인자를 순회하면서 합계를 계산한다.

- result 변수 : 인수들의 합계를 저장한다.

- for 루프를 통해 모든 인수를 더한 후 result를 반환한다.

- add.bind(null, 1, 2, 3, 4, 5) : add 함수의 this를 null로 설정하고, 다섯 개의 인수로 1, 2, 3, 4, 5를 부분 적용한 새로운 함수를 생성한다.

- addPartial : 새로운 함수로, 나머지 인수를 추가로 받을 수 있다.

- addPartial을 호출하면 6, 7, 8, 9, 10을 추가 인수로 전달한다.

- 부분 적용된 인수 1, 2, 3, 4, 5와 새로운 인수 6, 7, 8, 9, 10이 합쳐져서 add 함수에 전달된다.
```

```
결과 : 1+2+3+4+5+6+7+8+9+10을 수행한 결과 값인 55가 콘솔에 출력된다.
```
