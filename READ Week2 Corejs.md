---
# 2주차 CoreJavaScript 실습 예제 요점 설명입니다.
---


---
# 예제 1-1 설명
---
```
JavaScript에서는 변수를 선언할 때 “var a;”로 표시할 수 있다.
a는 식별자, 변수명, variable a, a variable, 변수 a와 같이 다양하게 표시된다.

```
---
# 예제 1-2 설명
---
```
a는 identifier를 의미하고, ’abc’는 data에 해당한다.
일반적으로 사용하는 모양 → identifier = data (둘다 메모리에 할당)
이는 메모리에서 identifier에 해당하는 메모리와 data에 해당하는 메모리가 잡히기 때문에 identifier에 해당하는 메모리 속에 data를 가리키는 주소가 써지게 됩니다.
```
---
# 예제 1-3 설명
---
```
문자열 값도 한 번 만든 값을 바꿀 수 없고, 숫자 값도 다른 값으로 변경이 불가능변경은 새로 만드는 동작을 통해서만 이루어진다. (이것이 불변값의 성질입니다.)
한 번 만들어진 값은 가비지 컬렉팅을 당하지 않는 한 영원히 변하지 않는다.
```
---
# 예제 1-4 설명
---
```
상수 or 변수 = 데이터 ← 일반 언어의 원칙obj1이라는 변수에 object를 넣어준다.
a와 b는 identifier를 의미합니다. (Object에서는 Property or key라고 부릅니다.)
1과 ‘bbb’는 데이터를 의미합니다. (value라고 부릅니다.)
해당 코드는 a에는 1을 넣고, b에는 ‘bbb’라는 것을 넣어주겠다는 것을 의미합니다.
```
---
# 예제 1-5 설명
---
```
obj1이라는 객체를 정의, 그 안에 a와 b라는 두 개의 속성을 가지고 있다.
a와 b는 identifier를 의미한다. (Object에서는 Property or key라고 부릅니다.)
1과 ‘bbb’는 데이터를 의미한다. (value라고 부릅니다.)
obj1 객체의 a 속성을 수정하여 obj1.a의 값을 2로 변경한다.
따라서 코드 실행 후 obj1.a의 값은 2가 된다.
```

---
# 예제 1-6 설명
---
```
obj 객체를 정의하고, 그 안에는 x와 arr 두 개의 속성을 가지고 있다.
x 속성은 숫자 3을 가지고 있다.
arr 속성은 배열 [3, 4, 4]를 가지고 있다. 
따라서 obj 객체의 두 속성 x와 arr은 각각 숫자와 배열의 값을 가진다.
```
