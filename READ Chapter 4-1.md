---
# Chapter 4-1 실습 예제 설명입니다.
---
```
var count = 0;
var timer = setInterval(function() {
  console.log(count);
  if (++count > 4) clearInterval(timer);
}, 300);
```

```
- count라는 변수를 선언하고 초기 값을 0으로 설정한다.

- setInterval 함수는 일정 시간 간격(300밀리초)마다 주어진 함수(function() { ... })를 반복적으로 실행한다.

- setInterval은 반복을 멈출 때 사용할 수 있는 타이머 ID를 반환한다. (이때  ID를 timer 변수에 저장한다.)

- count 변수의 현재 값을 콘솔에 출력한다. (출력은 300밀리초마다 실행)

- count 변수를 1 증가시킨 후, 그 값이 4보다 큰지 확인한다.

- 만약 count가 4보다 크다면, clearInterval(timer)을 호출하여 setInterval에 의해 설정된 반복을 멈춘다.

- ++count는 count를 1 증가시킨 후 그 값을 반환한다.

- 처음 count는 0이기 때문에 해당 줄이 처음 실행될 때 count는 1이 된다.
```

```
결과 : 코드는 300밀리초(0.3초)마다 count 값을 출력하다가, count가 5가 되는 순간 반복을 멈춘다.
```
