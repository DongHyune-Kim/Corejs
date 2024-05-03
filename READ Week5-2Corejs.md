---
# 5주차 두 번째, 세 번째 강의 CoreJavaScript 실습 예제 요점 설명입니다. 
---

```
var outer = function() { // outer 함수 내부에서 inner 함수를 호출.
var inner = function() { // inner 함수 내부에서는 a를 출력하기 전에 지역 변수 a를 선언하고, 그 후에 a를 출력한다. 이때, 지역 변수 a가 존재하므로 해당 변수의 값이 출력된다. 하지만 이 값은 선언 전에 접근한 것이므로 undefined가 출력된다.
outer 함수에서도 마찬가지로 변수 a의 값을 출력한다. 이때는 전역 변수 a의 값인 1이 출력된다.
마지막으로 전역 변수 a의 값인 1이 출력된다.

결과적으로:
출력은

undefined
1
1
```
