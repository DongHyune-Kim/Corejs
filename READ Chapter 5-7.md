---
# Chapter 5-7 실습 예제 설명입니다.
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
  $li.addEventListener('click', alertFruit);
  $ul.appendChild($li);
});
document.body.appendChild($ul);
alertFruit(fruits[1]);
```

```
- fruits 배열에는 'apple', 'banana', 'peach' 세 가지 과일 이름이 포함된다.

- document.createElement 메서드를 사용하여 새로운 ul 요소를 생성한다.

- 변수 $ul에 생성된 ul 요소를 저장한다.

- alertFruit 함수는 인자로 받은 과일을 알림으로 표시한다.

- fruits 배열의 각 요소에 대해 forEach 메서드를 사용하여 콜백 함수를 실행한다.

- 각 반복에서 새로운 li (list item) 요소를 생성하고, 해당하는 과일 이름을 설정한다.

- addEventListener 메서드를 사용하여 각 li 요소에 클릭 이벤트 리스너를 추가한다. (클릭 시 alertFruit 함수를 호출.)

- 생성된 li 요소를 ul 요소의 자식으로 추가한다.

- document.body.appendChild 메서드를 사용하여 생성된 <ul> 요소를 문서의 <body> 요소에 추가한다.
 ( ul 요소와 그 자식 요소들 ( li 요소들 )이 HTML 문서에 표시된다. )

- alertFruit 함수를 호출하여 fruits 배열의 두 번째 요소를 알림으로 표시한다.
```

```
결과 : 코드는 과일 목록을 생성하고 클릭 이벤트를 통해 과일을 선택할 수 있게 한다.
       선택한 과일은 알림으로 표시되며, 코드 마지막에서 alertFruit(fruits[1])를 호출하여 배열의 두 번째 과일인 'banana'를 선택한 것처럼 알림이 표시된다.
```
