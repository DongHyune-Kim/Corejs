---
# Chapter 4-6 실습 예제 설명입니다.
---

```
setTimeout(function() {
    console.log(this);
  }, 300); 
  
  [1, 2, 3, 4, 5].forEach(function(x) {
    console.log(this); 
  });
  
  document.body.innerHTML += '<button id="a">클릭</button>';
  document.body.querySelector('#a').addEventListener(
    'click',
    function(e) {
      console.log(this, e); 
    } 
  );
```
```
- setTimeout 내부의 this는 기본적으로 window 객체(브라우저 환경)를 가리킨다.
- 300밀리초 (0.3초)후에 실행되는 함수는 this를 출력할 때 window 객체를 출력한다.
```

```
결과 : Window 객체가 출력된다.
```

```
- forEach의 콜백 함수 내부에서의 this는 기본적으로 undefined(엄격) 또는 window(비엄격) 객체이다.

- 해당 코드에서는 this가 지정되지 않았기 때문에 브라우저의 비엄격 모드에서는 window가 출력되고, 엄격 모드에서는 undefined가 출력됩니다.
```

```
결과 : 비엄격 모드에서 Window 객체가 5번 출력된다.
```

```
- 새로운 버튼을 HTML에 추가하고, 해당 버튼에 클릭 이벤트 리스너를 추가한다.

- 이벤트 리스너 내부의 this는 이벤트가 바인딩된 요소를 가리킨다. (this는 클릭된 버튼 요소(<button id="a">)를 가리킨다.)

- e : 이벤트 객체, 이벤트에 대한 다양한 정보를 담고 있다
```

```
결과 : 클릭 시 버튼 요소와 이벤트 객체가 출력된다.
```

```
최종 결과: 

1, 300밀리초 후에 window 객체 출력.
2, 배열의 각 요소에 대해 window 객체 출력 (비엄격 모드의 경우).
3, 버튼 클릭 시, 클릭된 버튼 요소와 이벤트 객체 출력.
```
