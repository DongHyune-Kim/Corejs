---
# Chapter 5-5 실습 예제 설명입니다.
---

```
var outer = (function() {
    var a = 1;
    var inner = function() {
      return ++a;
    };
    return inner;
  })();
  console.log(outer());
  console.log(outer());
  outer = null; 

  (function() {
    var a = 0;
    var intervalId = null;
    var inner = function() {
      if (++a >= 10) {
        clearInterval(intervalId);
        inner = null; 
      }
      console.log(a);
    };
    intervalId = setInterval(inner, 1000);
  })();
  
  (function() {
    var count = 0;
    var button = document.createElement('button');
    button.innerText = 'click';
  
    var clickHandler = function() {
      console.log(++count, 'times clicked');
      if (count >= 10) {
        button.removeEventListener('click', clickHandler);
        clickHandler = null; 
      }
    };
    button.addEventListener('click', clickHandler);
    document.body.appendChild(button);
  })();
```

```
- 실행 함수는 a 변수를 캡처하고 inner 함수를 반환한다.

- outer는 inner 함수를 참조하고, outer()를 호출하면 a 변수가 1씩 증가하여 반환된다.

- outer 변수에 null을 할당하여 inner 함수에 대한 참조를 끊어 클로저가 더 이상 참조되지 않도록 한다. (메모리 해제를 돕기 위함.)

- 실행 함수는 a 변수를 캡처하고 1초마다 실행되는 inner 함수를 정의한다.

- inner 함수는 a 변수를 증가시키고, a가 10이 되면 clearInterval을 호출하여 타이머를 멈춘다.

- inner 함수에 대한 참조를 null로 설정하여 함수에 대한 참조를 끊고 메모리를 해제한다.

- 실행 함수는 inner 함수에 대한 참조를 null로 설정하여 함수에 대한 참조를 끊고 메모리를 해제한다,

- 버튼 요소를 생성하고 clickHandler 함수에 클릭 이벤트 리스너를 추가한다.

- 버튼이 10번 클릭되면 clickHandler 함수는 이벤트 리스너를 제거하고 함수 참조를 끊어 메모리를 해제한다.
```

```
결과 : outer()를 호출하면 a는 2와 3을 출력하고, outer에 null을 할당하여 참조를 끊는다.
       inner 함수는 1초마다 실행되며, a는 1부터 10까지 출력되고 타이머가 멈추며 함수 참조를 끊는다.
       버튼 클릭 시 count는 1부터 10까지 증가하며 출력되고, 10번 클릭 후 이벤트 리스너가 제거되며 함수 참조를 끊는다.
```
