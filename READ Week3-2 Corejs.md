---
# 3주차 두 번째 강의 CoreJavaScript 실습 예제 요점 설명입니다. 
---

---
# 예제 1-21 설명
---

- arr1은 [undefined, 1]로 초기화되었고, arr2는 빈 배열이다.
- 그 후에 arr2[1] = 1을 사용하여 arr2의 두 번째 요소에 값을 할당한다.
- forEach 메서드를 사용하여 배열의 각 요소와 해당 인덱스를 출력한다.
- arr1에서는 첫 번째 요소가 undefined이므로 (undefined, 0)이 출력되고, 두 번째 요소는 1이므로 (1, 1)이 출력된다. 
- arr2에서는 두 번째 요소만 존재하고 그 값이 1이므로 (1, 1)이 출력된다.
- map 메서드를 사용하여 각 요소에 인덱스를 더한 새로운 배열을 생성한다. 
- arr1에서는 첫 번째 요소가 undefined이므로 undefined + 0은 NaN이 된다.
- 두 번째 요소는 1이므로 1 + 1은 2가 된다.
- 따라서 새로운 배열은 [NaN, 2]가 된다.
- arr2에서는 두 번째 요소만 존재하고 그 값이 1이므로 1 + 1은 2가 된다. 
- 따라서 새로운 배열은 [empty, 2]가 된다.
- filter 메서드를 사용하여 각 요소가 거짓인 요소를 제거한 새로운 배열을 생성한다.
- arr1에서는 첫 번째 요소가 거짓 값인 undefined이므로 제거되지 않는다.
- 따라서 새로운 배열은 [undefined]가 된다.
- arr2에서는 요소가 모두 참 값인 1이므로 제거되는 요소가 없다. 
- 따라서 새로운 배열은 [ ]가 된다.
- reduce 메서드를 사용하여 배열의 각 요소에 대해 함수를 실행하고 그 결과를 누적한 값을 반환한다.
- arr1에서는 초기값이 빈 문자열('')이고, 각 요소는 undefined, 1이므로 누적 값은 'undefined011'이 된다.
- arr2에서는 초기값이 빈 문자열('')이고, 요소는 1이므로 누적 값은 '11'이 된다.
```
※ 결과적으로:

출력은

undefined 0
1 1
1 1
NaN 0
2 empty
undefined
[]
undefined011
11
```

---
# 예제 1-22 설명
---
```
typeof n // 변수 n의 타입을 출력한다. null의 타입이 object로 표시되는 것은 JavaScript의 버그로 판단된다.
n == undefined // null과 undefined를 비교한다. 두 값은 동등 연산자 ==를 사용하여 비교할 때 true로 평가된다. 이는 JavaScript의 동등 연산 규칙에 따라 null과 undefined는 서로 동일한 것으로 간주된다.
n == null // 마찬가지로 null과 null을 비교한다. 결과는 true
n === undefined // 동등 연산자 ===를 사용하여 null과 undefined를 비교한다. 이 때는 값뿐만 아니라 타입도 검사하므로 false가 된다.
n === null // null과 null을 동등 연산자 ===를 사용하여 비교한다. 결과는 true
```
