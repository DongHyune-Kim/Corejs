---
# Chapter 6-7 실습 예제 설명입니다.
---

```
var arr = [1, 2];
arr.push(3);
arr.hasOwnProperty(2); // true
```

```
- 배열 arr에 대해 다양한 메서드를 사용하여 조작한 후, hasOwnProperty 메서드를 사용해 특정 인덱스가 배열의 고유 속성인지 확인

- var arr = [1, 2]; : arr라는 이름의 [1, 2] 요소를 가지는 배열을 생성 

- arr.push(3); : push 메서드를 사용하여 3을 배열의 끝에 추가 (arr → [1, 2, 3])

- arr.hasOwnProperty(2);: hasOwnProperty 메서드를 사용하여 배열 arr가 인덱스 2에 대한 고유 속성을 가지고 있는지 확인 (인덱스 2에 3이라는 값을 가짐, 결과 = true)
```
