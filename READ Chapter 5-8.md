---
# Chapter 5-8 실습 예제 설명입니다.
---

```
var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

var alertFruit = function(fruit) {
  alert('your choice is ' + fruit);
};
fruits.forEach(function(fruit) {
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', alertFruit.bind(null, fruit));
  $ul.appendChild($li);
});
document.body.appendChild($ul);
```

```
- fruits 배열에는 'apple', 'banana', 'peach' 세 가지 과일 이름이 포함된다.

- document.createElement 메서드를 사용하여 새로운 ul 요소를 생성한다.

- 변수 $ul에 생성된 ul 요소를 저장한다.

- alertFruit 함수는 인자로 받은 과일을 알림으로 표시한다.

- fruits 배열의 각 요소에 대해 forEach 메서드를 사용하여 콜백 함수를 실행한다.

- 각 반복에서 새로운 li (list item) 요소를 생성하고, 해당하는 과일 이름을 설정한다.

- addEventListener 메서드를 사용하여 각 li 요소에 클릭 이벤트 리스너를 추가한다.

- bind 메서드를 사용하여 클릭 시 alertFruit 함수를 호출하고, bind 메서드를 사용하여 함수를 생성할 때 첫 번째 인수로는 this에 바인딩될 값으로 null을, 두 번째 인수로는 fruit 값을 전달한다.

- 생성된 li 요소를 ul 요소의 자식으로 추가한다.

- ocument.body.appendChild 메서드를 사용하여 생성된 ul 요소를 문서의 body 요소에 추가한다.
  ( ul 요소와 그 자식 요소들 ( li 요소들 )이 HTML 문서에 표시된다. )
```

```
결과 : 코드는 과일 목록을 생성하고 클릭 이벤트를 통해 과일을 선택할 수 있도록 한다.
       선택한 과일은 알림으로 표시되며, 클로저를 사용하여 alertFruit 함수가 forEach 반복 내에서 각각의 과일에 대해 적절한 메시지를 표시할 수 있게 한다.
```
