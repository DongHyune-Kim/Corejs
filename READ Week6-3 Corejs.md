---
# 6주차 세 번째 강의 CoreJavaScript 실습 예제 요점 설명입니다. 
---

---
# 예제 3-1 설명
---
```
코드는 JavaScript의 this와 window 객체를 출력하고 있다.

console.log(this); // 현재 실행 컨텍스트에서의 this를 출력한다. 일반적으로 브라우저 환경에서는 this는 window 객체를 가리킨다. 따라서 브라우저 환경에서 실행할 경우 window 객체와 유사한 정보를 출력할 것이다.
console.log(window); // 브라우저에서 전역 객체를 가리키는 window 객체를 출력한다. 브라우저 환경에서는 this와 window가 동일한 객체를 참조하므로 동일한 정보가 출력될 것이다.
console.log(this === window); // this와 window가 동일한 객체인지를 확인하는 비교 연산이다. 
					      위의 출력 결과에 따르면 this와 window가 동일한 객체를 참조하므로 비교 결과는 true가 된다.


※ 결론적으로:

출력은

true
```
---
# 예제 3-2 설명
---
```
이 코드는 Node.js 환경에서 실행된다. Node.js에서는 브라우저와 달리 global 객체가 전역 객체를 나타낸다.

console.log(this); // 현재 실행 컨텍스트에서의 this를 출력한다. Node.js 환경에서는 전역 스코프에서 실행되므로 this는 global 객체를 참조한다. 따라서 global 객체와 유사한 정보를 출력한다.
console.log(global); // Node.js에서 전역 객체를 나타내는 global 객체를 출력한다. Node.js에서는 모든 전역 변수와 함수가 이 global 객체의 속성이므로, 이 객체를 통해 전역 환경에 접근할 수 있다.
console.log(this === global); // this와 global이 동일한 객체인지를 확인하는 비교 연산, 위의 출력 결과에 따르면 this와 global이 동일한 객체를 참조하므로 비교 결과는 true가 된다.

※ 결론적으로:

출력은

true
```
---
# 에제 3-3 설명 
---
```
var a = 1; // 전역 스코프에 변수 a를 선언하고 값을 1로 할당힌다.
console.log(a); // 변수 a의 값을 출력한다. a에 할당된 값은 1이므로 콘솔에는 1이 출력된다.
console.log(window.a); // 브라우저 환경에서 전역 변수들은 모두 window 객체의 속성으로 취급된다. 따라서 window.a 역시 변수 a에 접근한 것과 동일하다. window.a 역시 1이므로 콘솔에는 1이 출력된다.
console.log(this.a); // 전역 스코프에서의 this는 전역 객체인 window를 가리킨다. 따라서 this.a 역시 변수 a에 접근한 것과 동일하며, 1이므로 콘솔에는 1이 출력된다.

※ 결론적으로:

출력은

1
```
---
# 에제 3-4 설명 
---
```
var a = 1; // 전역 스코프에 변수 a를 선언하고 값을 1로 할당
window.b = 2; // 전역 스코프에 변수 b를 window 객체의 속성으로 추가하고 값을 2로 할당
console.log(a, window.a, this.a); // 각각 전역 스코프의 a, window.a, this.a 값을 출력한다. 현재 스코프인 전역 스코프에서 a는 1로 할당되어 있으며, window.a 역시 1로 할당되어 있다. 전역 스코프에서의 this는 전역 객체인 window를 가리키므로 this.a 역시 1로 할당되어 있다.
console.log(b, window.b, this.b); // 각각 전역 스코프의 b, window.b, this.b 값을 출력한다. b는 전역 스코프에 변수로 선언되지 않았지만, 
이전에 window.b = 2; 코드로 window 객체의 속성으로 추가되었다. 따라서 b는 2로 할당되어 있으며, window.b 역시 2로 할당되어 있다. 
전역 스코프에서의 this.b 역시 2로 할당되어 있다.
window.a = 3; // window 객체의 속성인 a의 값을 3으로 변경한다.
b = 4; // 전역 스코프에 변수 b가 선언되어 있지 않으므로, 이는 전역 스코프의 window.b를 참조한다. 따라서 window.b의 값인 2를 4로 변경한다.
다시한번 console.log를 이용하여 전역 스코프의 a, window.a, this.a, b, window.b, this.b 값을 출력한다. 
a는 window.a와 this.a 모두 3으로 변경되었고, b는 window.b와 this.b 모두 4로 변경되었다.

※ 결론적으로:

출력은

1 1 1
2 2 2
3 3 3
4 4 4
```
---
# 에제 3-5 설명
---
```
var a = 1; // 변수 a를 선언하고 초기값으로 1을 할당
delete window.a; // window 객체의 속성 중 a를 삭제하려고 시도한다. 하지만 delete 연산자는 변수를 삭제할 수 없으므로 false가 반환된다. a는 1의 값을 가진다.
console.log(a, window.a, this.a); // 각각 a, window.a, this.a의 값을 출력한다. 세 값 모두 1이다.
var b = 2; // 변수 b를 선언하고 초기값으로 2를 할당
delete b; // 변수 b를 삭제하려고 시도한다. 하지만 변수를 삭제할 수 없으므로 false가 반환된다. b는 2의 값을 가진다.
console.log(b, window.b, this.b); // 각각 b, window.b, this.b의 값을 출력한다. 세 값 모두 2이다.
window.c = 3; // window 객체의 속성 중 c에 3을 할당한다.
delete window.c; // window 객체의 속성 중 c를 삭제하려고 시도한다. 성공적으로 삭제되어 true가 반환된다.
console.log(c, window.c, this.c); // 변수 c를 참조하려고 시도, 하지만 c는 선언되지 않았기 때문에 에러가 발생한다.
window.d = 4; // window 객체의 속성 중 d에 4를 할당
delete d; // window 객체의 속성 중 d를 삭제하려고 시도, 성공적으로 삭제되어 true가 반환된다.
console.log(d, window.d, this.d); // 변수 d를 참조하려고 시도, 하지만 d는 선언되지 않았기 때문에 에러가 발생합니다. 

※ 결론적으로:

출력은

1 1 1
2 2 2
Uncaught ReferenceError: c is not defined
Uncaught ReferenceError: d is not defined
```
---
# 에제 3-6 설명
---
```
func(1); // 함수 func를 호출하면서 인자로 1을 전달, 이때 함수 내에서 this는 전역 객체인 Window를 가리키며, 전달된 x는 1이다.
obj.method(2); // 객체 obj의 속성 method를 호출하면서 인자로 2를 전달한다. method는 func 함수를 가리키는데, 이때 함수 내에서 this는 obj를 가리킨다.
따라서 this는 { method: f } 객체를 가리키며, 전달된 x는 2이다.

※ 결론적으로:

출력은

Window {...} 1
{ method: f } 2
```
---
※ 에제 3-7 설명
---
```
obj.method(1); // 객체 obj의 속성 method를 호출하면서 인자로 1을 전달, 이때 함수 내에서 this는 obj를 가리킨다. 따라서 this는 { method: f } 객체를 가리키며, 전달된 x는 1이다.
obj ; // 객체 obj의 속성 method를 호출하면서 인자로 2를 전달한다. 이때도 마찬가지로 함수 내에서 this는 obj를 가리킨다. 
따라서 this는 { method: f } 객체를 가리키며, 전달된 x는 2이다.

※결론적으로:

출력은

{ method: f } 1
{ method: f } 2
```
---
# 에제 3-8 설명
---
```
obj.methodA(); // obj 객체의 methodA 메서드를 호출, 이때 this는 호출된 메서드가 속한 객체를 가리킨다. 따라서 { methodA: f, inner: {...} } 객체를 출력
obj['methodA'](); // 마찬가지로 obj 객체의 methodA 메서드를 호출한다. 객체 속성에 대한 점 표기법과 대괄호 표기법은 동일하게 작, 따라서 이 경우에도 { methodA: f, inner: {...} } 객체를 출력합니다.
obj.inner.methodB(); // obj 객체의 inner 속성 내부의 methodB 메서드를 호출, 이때 this는 호출된 메서드가 속한 객체를 가리킨다. 따라서 { methodB: f } 객체를 출력
obj.inner['methodB'](); // obj 객체의 inner 속성 내부의 methodB 메서드를 호출한다. 객체 속성에 대한 점 표기법과 대괄호 표기법은 동일하게 작동, 따라서 이 경우에도 { methodB: f } 객체를 출력
obj['inner'].methodB(); // obj 객체의 inner 속성 내부의 methodB 메서드를 호출한다. 객체 속성에 대한 점 표기법과 대괄호 표기법은 동일하게 작동,  따라서 이 경우에도 { methodB: f } 객체를 출력
obj['inner']['methodB'](); // obj 객체의 inner 속성 내부의 methodB 메서드를 호출한다. 객체 속성에 대한 점 표기법과 대괄호 표기법은 동일하게 작동. 따라서 이 경우에도 { methodB: f } 객체를 출력

※ 결론적으로:
출력은

{ methodA: f, inner: {...} }
{ methodA: f, inner: {...} }
{ methodB: f }
{ methodB: f }
{ methodB: f }
{ methodB: f }
```
