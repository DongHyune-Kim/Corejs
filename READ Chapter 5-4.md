---
# Chapter 5-4 실습 예제 설명입니다.
---

```
(function() {
    var a = 0;
    var intervalId = null;
    var inner = function() {
      if (++a >= 10) {
        clearInterval(intervalId);
      }
      console.log(a);
    };
    intervalId = setInterval(inner, 1000);
  })();

  (function() {
    var count = 0;
    var button = document.createElement('button');
    button.innerText = 'click';
    button.addEventListener('click', function() {
      console.log(++count, 'times clicked');
    });
    document.body.appendChild(button);
  })();
```

```
- 첫 번째 함수가 즉시 실행된다.

- a 변수를 0으로 초기화하고, intervalId 변수를 null로 초기화한다.

- inner 함수는 a 변수를 1씩 증가시키고, a가 10 이상이 되면 clearInterval을 사용하여 타이머를 중지한다.

- 이후 증가된 a의 값을 콘솔에 출력한다.

- setInterval을 사용하여 inner 함수를 1000밀리초(1초)마다 실행한다.

- 반환된 타이머 ID를 intervalId 변수에 저장한다.
```

```
결과 : a 변수는 1초마다 1씩 증가하고, a가 10이 되면 타이머가 중지되며 콘솔에 출력은 1부터 10까지 출력된다.
````

```
두 번째 (버튼 카운터)

- 함수가 즉시 실행된다.

- count 변수를 0으로 초기화하며, button 요소를 생성하고, 텍스트를 'click'으로 설정한다.

- button에 클릭 이벤트 리스너를 추가하여 클릭 시 count 변수를 1씩 증가시키고, 클릭 횟수를 콘솔에 출력한다.

- 생성된 버튼을 문서의 body에 추가한다.
```

```
결과 : 두 번째 함수가 실행되며, 버튼이 생성되어 문서의 body에 추가하고 버튼이 클릭될 때마다 count 변수가 1씩 증가하여 클릭 횟수가 콘솔에 출력된다.
```

```	
총 결과 : 첫 번째 함수는 일정 간격으로 숫자를 증가시키고 출력하는 타이머 기능을 구현하고, 두 번째 함수는 클릭 횟수를 기록하고 출력하는 버튼을 생성한다.
```
