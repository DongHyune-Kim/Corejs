---
# Chapter 5-16 실습 예제 설명입니다.
---

```
var debounce = function(eventName, func, wait) {
    var timeoutId = null;
    return function(event) {
      var self = this;
      console.log(eventName, 'event 발생');
      clearTimeout(timeoutId);
      timeoutId = setTimeout(func.bind(self, event), wait);
    };
  };
  
  var moveHandler = function(e) {
    console.log('move event 처리');
  };
  var wheelHandler = function(e) {
    console.log('wheel event 처리');
  };
  document.body.addEventListener('mousemove', debounce('move', moveHandler, 500));
  document.body.addEventListener(
    'mousewheel',
    debounce('wheel', wheelHandler, 700)
  );
```

```
- debounce 함수는 세 개의 인수를 받는다:

- eventName : 디버깅 또는 로그 용도로 사용되는 이벤트 이름
- func : 디바운싱을 적용할 실제 이벤트 핸들러 함수
- wait : 디바운싱 시간(ms)

- 반환된 함수는 이벤트가 발생할 때 호출된다.

- eventName 이벤트가 발생했음을 콘솔에 출력한다.

- 이전에 설정된 타이머(timeoutId)를 초기화(clearTimeout)한다.

- 새로운 타이머를 설정하여 wait 시간이 지난 후 func를 호출한다. ( func : this와 event 인수로 호출한다. )

- moveHandler와 wheelHandler : 실제로 처리할 이벤트 핸들러 함수를 의미한다.

- 각각 콘솔에 "move event 처리"와 "wheel event 처리"를 출력한다.

- mousemove 이벤트에 대해 디바운스된 핸들러를 등록한다. 

- moveHandler는 500ms(0.5초) 동안 디바운싱된다.

- mousewheel 이벤트에 대해 디바운스된 핸들러를 등록한다.

- wheelHandler는 700ms(0.7초) 동안 디바운싱된다.
```

```
결과 : 코드는 이벤트 디바운싱(debouncing)을 구현한 것으로 디바운싱은 특정 이벤트가 반복적으로 발생할 때, 마지막 이벤트가 발생한 후 일정 시간이 지나면 단 한 번만 처리되도록 하는 기술이다.
       이를 통해 이벤트에서 성능 최적화를 할 수 있다.
```
