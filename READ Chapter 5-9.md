---
# Chapter 5-9 실습 예제 설명입니다.
---

```
var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

var alertFruitBuilder = function(fruit) {
  return function() {
    alert('your choice is ' + fruit);
  };
};
fruits.forEach(function(fruit) {
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', alertFruitBuilder(fruit));
  $ul.appendChild($li);
});
document.body.appendChild($ul);
```

```
- fruits 배열에는 'apple', 'banana', 'peach' 세 가지 과일 이름이 포함된다.

- document.createElement 메서드를 사용하여 새로운 ul 요소를 생성한다.

- 변수 $ul에 생성된 ul 요소를 저장한다.

- alertFruitBuilder 함수는 인자로 받은 과일 이름을 클로저로 캡처하여, 해당 과일 이름을 알림으로 표시하는 함수를 반환한다.

- fruits 배열의 각 요소에 대해 forEach 메서드를 사용하여 콜백 함수를 실행한다.

- 각 반복에서 새로운 li (list item) 요소를 생성하고, 해당하는 과일 이름을 설정한다.

- addEventListener 메서드를 사용하여 각 li 요소에 클릭 이벤트 리스너를 추가한다.
  ( 이때 alertFruitBuilder(fruit)를 호출하여 각 과일에 대한 고유한 클릭 핸들러 함수를 생성한다. )

- 생성된 li 요소를 ul 요소의 자식으로 추가한다.

- document.body.appendChild 메서드를 사용하여 생성된 ul 요소를 문서의 body 요소에 추가한다.
  ( ul 요소와 그 자식 요소들 ( li 요소들 )이 HTML 문서에 표시된다. )
```

```
결과 : alertFruitBuilder 함수는 과일 이름을 인자로 받아, 해당 과일 이름을 알림으로 표시하는 함수(클로저)를 반환하며, forEach 루프 내에서 각 과일에 대해 <li> 요소를 생성하고, alertFruitBuilder를 호출하여 반환된 클릭 핸들러 함수를 addEventListener를 통해 각 li 요소에 추가한다.
       이를 통해 각 li 요소를 클릭할 때마다 해당 과일 이름을 알림으로 표시하는 고유한 함수가 실행된다.
```
