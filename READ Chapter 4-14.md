---
# Chapter 4-14 실습 예제 설명입니다.
---

```
new Promise(function(resolve) {
    setTimeout(function() {
      var name = '에스프레소';
      console.log(name);
      resolve(name);
    }, 500);
  })
    .then(function(prevName) {
      return new Promise(function(resolve) {
        setTimeout(function() {
          var name = prevName + ', 아메리카노';
          console.log(name);
          resolve(name);
        }, 500);
      });
    })
    .then(function(prevName) {
      return new Promise(function(resolve) {
        setTimeout(function() {
          var name = prevName + ', 카페모카';
          console.log(name);
          resolve(name);
        }, 500);
      });
    })
    .then(function(prevName) {
      return new Promise(function(resolve) {
        setTimeout(function() {
          var name = prevName + ', 카페라떼';
          console.log(name);
          resolve(name);
        }, 500);
      });
    });
```

```
- 새로운 Promise가 생성되고, 500밀리초(0.5초) 후에 실행될 콜백 함수를 setTimeout을 사용하여 정의한다.

- 500밀리초(0.5초) 후, '에스프레소'를 name 변수에 할당하고, 콘솔에 출력한다.

- resolve(name)을 호출하여 '에스프레소'를 다음 블록으로 전달한다.

- 이전 Promise에서 전달된 prevName ('에스프레소')을 받아 새로운 Promise를 생성한다.

- 500밀리초(0.5초) 후, prevName에 ', 아메리카노'를 추가하여 새로운 name을 만들고, 콘솔에 출력한다.

- resolve(name)을 호출하여 '에스프레소, 아메리카노'를 다음 블록으로 전달한다.

- 이전 Promise에서 전달된 prevName ('에스프레소, 아메리카노')을 받아 새로운 Promise를 생성한다.

- 500밀리초(0.5초) 후, prevName에 ', 카페모카'를 추가하여 새로운 name을 만들고, 콘솔에 출력한다.

- resolve(name)을 호출하여 '에스프레소, 아메리카노, 카페모카'를 다음 블록으로 전달한다.

- 이전 Promise에서 전달된 prevName ('에스프레소, 아메리카노, 카페모카')을 받아 새로운 Promise를 생성한다.

- 500밀리초(0.5초) 후, prevName에 ', 카페라떼'를 추가하여 새로운 name을 만들고, 콘솔에 출력한다.

- resolve(name)을 호출하여 '에스프레소, 아메리카노, 카페모카, 카페라떼'를 다음 블록으로 전달한다.
```

```
결과 : 각 단계에서 이전 단계의 결과를 받아서 새로운 커피 이름을 추가하고, 이를 콘솔에 출력한 후 다음 Promise로 전달한다.
	 
      500밀리초 후 : '에스프레소' 출력
      1000밀리초 후 : '에스프레소, 아메리카노' 출력
      1500밀리초 후 : '에스프레소, 아메리카노, 카페모카' 출력
      2000밀리초 후 : '에스프레소, 아메리카노, 카페모카, 카페라떼' 출력
```
