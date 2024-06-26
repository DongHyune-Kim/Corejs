---
# Chapter 5-6 실습 예제 설명입니다.
---

```
var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul'); // (공통 코드)

fruits.forEach(function(fruit) {
  // (A)
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', function() {
    // (B)
    alert('your choice is ' + fruit);
  });
  $ul.appendChild($li);
});
document.body.appendChild($ul);
```

```
- ruits 배열에는 'apple', 'banana', 'peach' 세 가지 과일 이름이 포함되어 있다.

- document.createElement 메서드를 사용하여 새로운 ul 요소를 생성한다.

- 변수 $ul에 생성된 ul 요소를 저장한다.

- fruits 배열의 각 요소에 대해 forEach 메서드를 사용하여 콜백 함수를 실행한다.

- document.createElement('li')를 사용하여 새로운 li (list item) 요소를 생성하고, 이를 $li 변수에 저장한다.

- $li.innerText = fruit로 각 li 요소의 텍스트 콘텐츠를 현재 과일 이름으로 설정한다.

- addEventListener 메서드를 사용하여 각 li 요소에 클릭 이벤트 리스너를 추가한다.

- 클릭 이벤트가 발생하면 익명 함수가 실행되고, alert를 사용하여 선택한 과일 이름을 알림으로 표시한다.

- 생성된 li 요소를 ul 요소의 자식으로 추가한다.

- document.body.appendChild 메서드를 사용하여 생성된 ul 요소를 문서의 body 요소에 추가한다. 
  ( ul 요소와 그 자식 요소들 ( li 요소들 )이 HTML 문서에 표시된다. )
```

```
결과 : 페이지에 'apple', 'banana', 'peach'를 항목으로 포함하는 목록이 표시된다.
       각 항목을 클릭하면 해당 과일 이름을 포함한 알림 창이 표시된다.
```
