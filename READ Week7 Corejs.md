---
# 7주차 강의 CoreJavaScript 실습 예제 요점 설명입니다. 
---

---
# 예제 3-9 설명
---
```
console.log(this); // outer 메서드 내부에서 호출되므로, this는 obj1 객체를 가리킨다. 따라서 첫 번째 console.log 구문은 obj1 객체를 출력
var innerFunc = function() { console.log(this); }; // innerFunc은 함수로 정의했기 때문에 함수 내부에서 this는 호출 방식에 따라 다르게 결정된다. 여기서는 일반적인 함수 호출 방식으로 호출되었으므로, this는 전역 객체인 window를 가리킨다.
innerFunc(); // innerFunc 함수를 호출, 이때 호출 방식은 일반적인 함수 호출이므로, this는 전역 객체인 window를 가리킨다. 따라서 두 번째 console.log 구문은 window 객체를 출력
var obj2 = { innerMethod: innerFunc }; // obj2 객체를 정의하고, 그 안에 innerMethod라는 속성을 포함시킨다. 이 속성은 앞서 선언된 innerFunc 함수를 가리킨다.
obj2.innerMethod();: obj2 객체의 innerMethod 메서드를 호출합니다. 이때 호출되는 메서드는 obj2 객체에 속해 있으므로, this는 obj2 객체를 가리킵니다. 하지만 innerFunc 함수는 이미 선언된 상태로서 this가 동적으로 바뀌지 않는다. 따라서 일반적인 함수 호출로서의 동작을 보이며, this는 전역 객체인 window를 가리킨다. 
세 번째 console.log 구문은 window 객체를 출력.

※ 결론적으로:

첫 번째와 두 번째 console.log 구문은 obj1 객체와 window 객체를 각각 출력하고, 세 번째 console.log 구문은 또 다시 window 객체를 출력한다.
```
---
# 예제 3-10 설명
---
```
첫 번째 함수 innerFunc1은 일반적인 함수 선언 방식으로 정의되어 있다. 이 함수 내부에서의 this는 실행 컨텍스트에 따라 결정, 여기서는 일반적인 함수 호출 방식으로 호출되었으므로, innerFunc1 내부에서의 this는 전역 객체인 Window 객체를 가리킨다. 그래서 첫 번째 console.log 구문은 Window 객체를 출력하게 된다.
두 번째 함수 innerFunc2는 outer 메서드 내부에서 선언된 변수 self를 활용하여 this를 보존한다. 
self 변수는 outer 메서드 내부에서 this를 참조하는데 사용된다. 이렇게 하면 innerFunc2 내부에서의 this는 outer 메서드를 소유한 obj 객체를 가리키게 되는 것이다. 
따라서 두 번째 console.log 구문은 obj 객체를 출력다.
```
---
# 예제 3-11 설명
---
```
console.log(this); // 첫 번째 console.log 구문은 outer 메서드가 속한 obj 객체를 가리키는 this를 출력한다.
			   outer 메서드가 obj 객체에 속해 있으므로, 이 console.log 구문에서의 this는 obj 객체를 가리킨다.
var innerFunc = () => { console.log(this); }; // innerFunc라는 변수에 화살표 함수가 할당된다. 화살표 함수는 자신이 선언된 곳의 외부 스코프의 this를 유지한다.
따라서 innerFunc 함수 내부에서의 this는 outer 메서드의 this와 같은 값을 가진다. 이 경우에는 obj 객체를 가리키는 것으로 해석할 수 있다.
innerFunc(); // innerFunc 함수가 호출된다. 호출된 innerFunc 함수 내부에서의 this는 외부 스코프인 outer 메서드의 this와 동일하게 obj 객체를 가리킨다.
		   따라서 두 번째 console.log 구문에서도 obj 객체가 출력된다.


※ 결론적으로:

출력은

{ outer: [Function: outer] }
{ outer: [Function: outer] }
```
---
# 예제 3-12 설명
---
```
setTimeout 함수 내부의 콜백 함수와 forEach 메소드 내부의 콜백 함수는 일반적인 함수 선언으로 정의되었으므로, this는 실행 컨텍스트에 따라 다르게 동작한다. 
여기서는 기본적으로 this는 전역 객체인 window를 참조한다.
addEventListener 함수 내부의 콜백 함수는 이벤트 핸들러로 정의되었고, this는 이벤트를 발생시킨 HTML 요소를 가리킨다.

※ 결론적으로:

각각의 출력값에 적용하게 된다면
setTimeout 내의 콜백 함수에서의 this는 전역 객체인 window를
forEach 내의 콜백 함수에서의 this는 전역 객체인 window를
addEventListener 내의 콜백 함수에서의 this에서는 이벤트를 발생시킨 HTML 요소를 가리킨다.
```

---
# 예제 3-13 설명
---
```
Cat 함수는 두 개의 매개변수 name과 age를 받아서 새로운 객체를 생성한다.
this.bark는 모든 객체가 공유하는 속성으로, 모든 객체가 야옹으로 초기화된다.
this.name과 this.age는 각각 개별 객체의 이름과 나이를 저장한다.
new 키워드를 사용하여 Cat 함수를 호출하여 두 개의 객체 choco와 nabi를 생성합니다.
생성된 객체들은 각각의 이름과 나이를 가지며, bark 속성은 모두 야옹으로 설정된다.
console.log(choco, nabi);를 실행하면 choco와 nabi 객체의 정보가 콘솔에 출력된다.

※ 결론적으로:

출력은

Cat { bark: '야옹', name: '초코', age: 7 }
Cat { bark: '야옹', name: '나비', age: 5 }
```
