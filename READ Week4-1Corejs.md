---
# 4주차 첫 번째 강의 CoreJavaScript 실습 예제 요점 설명입니다. 
---

---
# 예제 2-1 설명
---
```
var a = 1; // 전역 스코프에 변수 a를 선언하고 1을 할당
function outer() { ... } // outer라는 함수를 선언
function inner() { ... } // inner라는 함수를 outer 함수 내에 선언
console.log(a); // inner 함수 내에서 변수 a를 출력한다. 이 시점에서 a는 호이스팅되어 선언되었지만 초기화되지 않았기 때문에 undefined가 출력된다.
var a = 3; // inner 함수 내에서 변수 a를 선언하고 3을 할당한다. 이 변수는 inner 함수 스코프에 있다.
inner(); // outer 함수 내에서 inner 함수를 호출, 이때 inner 함수가 실행되며, 위에서 설명한대로 console.log(a)가 undefined를 출력
console.log(a); // outer 함수 내에서 변수 a를 출력한다. 전역 스코프에 선언된 변수 a의 값인 1을 출력
outer(); // outer 함수를 호출, 이때 함수 내부의 동작은 위에서 설명한 것처럼 진행
console.log(a); // 전역 스코프에 있는 변수 a의 값을 출력, 이 값은 1

※ 결과적으로:

출력은

undefined
1
1
```
---
# 예제 2-2 설명
---
```
function a(x) { ... } // 함수 a를 정의, 이 함수는 매개변수 x를 받는다.
console.log(x); // 첫 번째 출력문, 이 때 x는 함수 a의 매개변수, 함수가 호출되면 인자로 전달된 값이 x에 할당된다. 따라서 1이 출력
var x; // 두 번째 줄에서 var 키워드를 사용하여 변수 x를 선언, 이 변수 선언은 호이스팅되어 함수의 맨 위로 옮겨진다. 
따라서 변수가 선언되기 전에 console.log(x)가 호출되었더라도 오류가 발생하지 않고 undefined가 출력
console.log(x); // 두 번째 출력문, 이 때 x는 이전에 선언된 변수이며, 변수 x는 호이스팅되어 이미 선언되어 있으므로 undefined가 출력
var x = 2; // 세 번째 줄에서는 변수 x를 다시 선언하고 2를 할당, 이때 변수 선언도 호이스팅되므로 이미 선언된 변수 x를 재할당한다.
console.log(x); // 세 번째 출력문, 이 때 x는 이미 선언되어 있고 2가 할당되었으므로 2가 출력된다.

※ 결과적으로:

출력은

1
undefined
2
```
---
# 예제 2-3 설명
---
```
unction a() { ... } // 함수 a를 정의
var x = 1; // 첫 번째 줄에서 변수 x를 선언하고 1을 할당
console.log(x); // 첫 번째 출력문, 이때 x는 이미 선언되어 있고 1이 할당되어 있으므로 출력 결과는 1이다.
var x; // 두 번째 줄에서는 변수 x를 다시 선언, 이미 변수 x가 선언되어 있으므로 이 줄은 무시된다.
console.log(x); // 두 번째 출력문. 이때 x는 이미 선언되어 있고 값이 할당되지 않았으므로 undefined가 출력된다.
var x = 2; // 세 번째 줄에서 변수 x를 다시 선언하고 2를 할당한다. 이미 변수 x가 선언되어 있으므로 이 줄은 무시된다.
console.log(x); // 세 번째 출력문, 이때 x는 이미 선언되어 있고 2가 할당되어 있으므로 출력 결과는 2가 나온다.

※ 결과적으로:

출력은

1
1
2
```
---
# 예제 2-4 설명
---
```
function a() { ... } // 함수 a를 정의
세 번의 var x; 줄에서 변수 x를 각각 세 번 선언한다. 이 때, 여러 번 변수를 선언해도 실제로는 첫 번째 선언만이 유효하며 나머지는 무시된다. 
이것을 변수 재선언이라고 부른다.
첫 번째 x = 1; 줄에서 변수 x에 1을 할당한다.
첫 번째 console.log(x); // 첫 번째 출력문, 변수 x에는 이미 1이 할당되어 있으므로 출력 결과는 1이 나온다.
두 번째 console.log(x); // 두 번째 출력문, 변수 x에는 여전히 1이 할당되어 있으므로 출력 결과는 1이 나온다.
x = 2; // 변수 x에 2를 할당한다. 이때, 변수 재할당이 발생
세 번째 console.log(x); // 세 번째 출력문, 변수 x에는 2가 할당되어 있으므로 출력 결과는 2가 나온다.

※ 결과적으로:

출력은

1
1
2
```
---
# 예제 2-5 설명
---
```
function a() { ... } // 함수 a를 정의
첫 번째 console.log(b); // 변수 b가 호이스팅되어 선언되었지만 초기화되지 않았으므로 undefined가 출력된다.
var b = 'bbb'; // 변수 b를 선언하고 'bbb'를 할당한다.
두 번째 console.log(b); // 이제 변수 b는 'bbb'로 초기화되어 있으므로 'bbb'가 출력된다.
function b() {} // 함수 b를 선언한다. 이것은 변수 b의 재할당이 아니라 함수 선언을 의미한다.
세 번째 console.log(b); // 함수 b가 변수 b보다 더 높은 우선순위를 가지므로 함수 b가 출력된다.

※ 결과적으로:

출력은

undefined
bbb
function b() {}
```
---
# 예제 2-6 설명
---
```
function a() { ... } // 함수 a를 정의
변수 b의 선언부와 함수 b의 선언부가 호이스팅된다. 변수 선언은 선언부만 끌어올리고, 함수 선언은 전체가 끌어올려진다.
첫 번째 console.log(b); // 변수 b가 호이스팅되어 선언되었지만 초기화되지 않았으므로 undefined가 출력된다.
b = 'bbb'; // 변수 b에 'bbb'를 할당한다. 이 할당은 변수의 초기화 부분이므로 원래 자리에 남겨둔다.
두 번째 console.log(b); // 이제 변수 b는 'bbb'로 초기화되어 있으므로 'bbb'가 출력된다.
세 번째 console.log(b); // 변수 b에는 여전히 'bbb'가 할당되어 있으므로 다시 한 번 'bbb'가 출력된다.

※ 결과적으로:

출력은

undefined
bbb
bbb
```
---
# 예제 2-7 설명
---
```
unction a() { ... } // 함수 a를 정의
var b; // 변수 b의 선언부가 호이스팅된다.
var b = function b() {}; // 함수 표현식을 사용하여 변수 b에 함수를 할당, 이때 함수의 이름은 b이다. 
함수 표현식의 경우, 함수 이름은 함수의 스코프 내에서만 유효하므로 외부에서 접근할 수 없다.
첫 번째 console.log(b); // 변수 b에는 함수가 할당되어 있으므로 해당 함수가 출력된다.
b = 'bbb'; // 변수 b에 'bbb'를 할당한다.
두 번째 console.log(b); // 변수 b에는 문자열 'bbb'가 할당되어 있으므로 'bbb'가 출력된다.
세 번째 console.log(b); // 변수 b에는 여전히 문자열 'bbb'가 할당되어 있으므로 다시 한 번 'bbb'가 출력된다.

※ 결과적으로:

출력은

ƒ b() {}
bbb
bbb
```