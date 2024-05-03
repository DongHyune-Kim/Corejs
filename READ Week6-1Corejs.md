---
# 6주차 첫 번째 강의 CoreJavaScript 실습 예제 요점 설명입니다. 
---

---
# Example 1, 코드를 실행하고 어떤 결과가 나오는지 확인하기
---

```js
Console.log('Hi');
setTimeout(function cb1() {
    console.log('cb1');
}, 5000);
console.log('Bye');
```
- 지금은 모든 것이 깨끗하게 비워져 있습니다. 브라우저 콘솔도 깨끗하고 콜스택도 비어있는 상태입니다.
  
- console.log('Hi')가 콜스택에 추가되었습니다.
  
- console.log('Hi')가 실행됩니다.
  
- console.log('Hi')가 콜스택에서 제거됩니다.
  
- setTimeout(function cb1() { ... })가 콜스택에 추가되었습니다.
  
- setTimeout(function cb1() { ... })이 실행됩니다. 브라우저가 웹 API의 타이머를 생성합니다.
  
- setTimeout(function cb1() { ... })이 완료되고 콜스택에서 제거됩니다.
  
- console.log('Bye')가 콜스택에 추가되었습니다.
  
- console.log('Bye')이 실행됩니다.
  
- console.log('Bye')이 콜스택에서 제거됩니다.
  
- 최소한 5000ms가 지난 다음에 타이머가 완료되고 cb1 콜백을 콜백큐에 밀어넣습니다.
  
- 이벤트루프는 cb1을 콜백큐에서 가져다가 콜스택에 밀어넣습니다.
  
- cb1이 실행되고 console.log(‘cb1’)이 콜스택에 추가됩니다.
  
- console.log('cb1') 실행됩니다.
  
- console.log('cb1')이 콜스택에서 제거됩니다.
  
- cb1이 콜스택에서 제거됩니다.


---
# Example 2, 0초 후 callback function을 집어 넣는 코드
---
```
'Hi'가 콘솔에 출력된다.
setTimeout 함수가 호출되어 콜백 함수가 등록되지만, 지연 시간이 0으로 설정되어 있어 이는 즉시 실행되지 않고 이벤트 루프의 다음 틱에서 실행되도록 예약된다.
이후 'Bye'가 콘솔에 출력된다.
이벤트 루프의 다음 틱에서 등록된 콜백 함수가 실행되어 'callback'이 콘솔에 출력된다.

※ 결과적으로:

출력은

Hi
Bye
callback
```
