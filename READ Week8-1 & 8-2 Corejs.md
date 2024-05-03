---
## 8주차 첫 번째 강의와 두 번째 강의 CoreJavaScript 실습 예제 요점 설명입니다. 
---

---
## 예제 3-14 설명
---
```
func 함수는 세 개의 매개변수 a, b, c를 받아서 this, a, b, c를 출력한다.
func(1, 2, 3);을 호출할 때 this는 기본적으로 전역 객체를 가리킨다. 따라서 첫 번째 출력 결과는 전역 객체와 각각의 매개변수 값을 출력한다.
func.call({ x: 1 }, 4, 5, 6);을 호출할 때 call 메서드를 사용하여 this로 전달할 객체를 { x: 1 }로 지정한다. 
이후 넘겨진 매개변수들은 각각 a, b, c에 전달된다. 
따라서 두 번째 출력 결과는 { x: 1 } 객체와 각각의 매개변수 값을 출력한다.
```
---
## 예제 3-15 설명
---
```
obj.method(2, 3);을 호출할 때 this는 obj 객체를 가리킨다. 따라서 첫 번째 출력 결과는 obj 객체의 a 속성인 1과 매개변수로 전달된 값인 2와 3을 출력한다.
obj.method.call({ a: 4 }, 5, 6);을 호출할 때 call 메서드를 사용하여 this로 전달할 객체를 { a: 4 }로 지정한다. 
따라서 두 번째 출력 결과는 { a: 4 } 객체의 a 속성인 4와 call 메서드로 전달된 매개변수인 5와 6을 출력한다.
```
---
## 예제 3-16 설명
---
```
func.apply({ x: 1 }, [4, 5, 6]); // 함수 func를 호출, 호출할 때 this 값을 { x: 1 }로 설정한다. 함수에서는 배열 [4, 5, 6]을 인수로 전달하고, 함수 내부에서는 this가 { x: 1 }이 되며, 인수 a, b, c는 각각 4, 5, 6으로 설정된다. 결과적으로 함수는 { x: 1 } 4 5 6을 출력한다.
obj.method.apply({ a: 4 }, [5, 6]); // obj 객체의 method 메서드를 호출, 호출할 때 this 값을 { a: 4 }로 설정한다. 함수에 배열 [5, 6]을 인수로 전달하고, 함수 내부에서는 this.a가 4로 되며, 인수 x, y는 각각 5, 6으로 설정된다.

이는 결과적으로 메서드는 4 5 6을 출력한다.
```
---
## 예제 3-17 설명
---
```
Array.prototype.push.call(obj, 'd'); // Array.prototype.push 메서드를 호출하면서 obj를 this로 설정한다. 이를 위해 call 메서드를 사용하였고, 'd' 값을 obj에 추가하였다.

obj는 아래와 같다.
{
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',
  length: 4
}

Array.prototype.slice.call(obj); // Array.prototype.slice 메서드를 호출하고 obj를 this로 설정한다. 이를 위해 call 메서드를 사용하였고, obj를 배열로 변환하여 반환한다.

반환된 배열 arr는 ['a', 'b', 'c', 'd'] 이며, obj 자체는 변경되지 않는다.
이는 배열 메서드가 호출된 객체를 직접 수정하지 않기 때문이다.

※ 결과적으로:

출력은

{
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',
  length: 4
}

['a', 'b', 'c', 'd']

```
---
## 예제 3-18 설명
---
```
function a() { ... } // a 함수는 가변 인수를 받아들이는 함수이다.
arguments 객체를 배열로 변환하기 위해 Array.prototype.slice.call(arguments)를 사용하였고, forEach 메서드를 사용하여 각 인수를 출력한다.
document.body.innerHTML = '<div>a</div><div>b</div><div>c</div>'; // 문서의 본문 내용을 변경하여 세 개의 <div> 요소를 추가한다.
var nodeList = document.querySelectorAll('div'); // querySelectorAll 메서드를 사용하여 모든 <div> 요소를 선택한다. 이때 반환된 것은 NodeList이다.
var nodeArr = Array.prototype.slice.call(nodeList); // NodeList를 배열로 변환하기 위해 Array.prototype.slice.call(nodeList)를 사용
nodeArr.forEach(function(node) { ... }); // 배열의 각 요소에 대해 순회하면서 각 요소를 출력한다.

※ 결과적으로:

함수 a를 호출하면 인수 1, 2, 3이 순서대로 출력되고, NodeList에서 선택된 각 <div> 요소에 대한 정보가 출력된다.
```
---
## 예제 3-19 설명
---
```
Array.prototype.push.call(str, ', pushed string'); // push 메서드를 사용하여 문자열 str에 문자열 ', pushed string'을 추가한다. 문자열은 불변이므로 실제로 문자열은 변경되지 않는다.
Array.prototype.concat.call(str, 'string'); // concat 메서드를 사용하여 문자열 str과 문자열 'string'을 연결한다. 이 결과는 문자열과 문자열 'string'이 포함된 배열이 된다.
Array.prototype.every.call(str, function(char) { ... }); // every 메서드를 사용하여 문자열 str의 각 문자가 조건을 충족하는지 확인한다.
Array.prototype.some.call(str, function(char) { ... }); // some 메서드를 사용하여 문자열 str의 어떤 문자가 조건을 충족하는지 확인한다.
var newArr = Array.prototype.map.call(str, function(char) { ... }); // map 메서드를 사용하여 문자열 str의 각 문자에 함수를 적용하여 새로운 배열을 생성한다. 여기서는 각 문자 뒤에 느낌표를 추가해준다.
var newStr = Array.prototype.reduce.apply(str, [ ... ]); // reduce 메서드를 사용하여 문자열 str을 함수를 적용하여 단일 값으로 줄인다. 이 경우 각 문자와 인덱스를 사용하여 새로운 문자열을 만든다.

※ 결과적으로:
newArr는 문자열의 각 문자 뒤에 느낌표가 추가된 배열을 나타내며, newStr은 각 문자 뒤에 해당 인덱스가 추가된 새로운 문자열을 나타낸다.
```
---
## 예제 3-20 설명
---
```
Array.from(obj)는 유사 배열 객체나 반복 가능한 객체를 배열로 변환하는 메서드를 나타냅니다. obj는 유사 배열 객체이며, length 속성과 숫자 형식의 key를 가지고 있다.
Array.from(obj)를 호출하여 obj를 배열로 변환하면 arr에는 obj의 속성들이 배열로 복사된다. 이로 인해 [ 'a', 'b', 'c' ]가 출력된다.
```


