---
# Chapter 6-9 실습 예제 설명입니다.
---

```
Object.prototype.getEntries = function() {
    var res = [];
    for (var prop in this) {
      if (this.hasOwnProperty(prop)) {
        res.push([prop, this[prop]]);
      }
    }
    return res;
  };
  var data = [
    ['object', { a: 1, b: 2, c: 3 }], // [["a",1], ["b", 2], ["c",3]]
    ['number', 345], // []
    ['string', 'abc'], // [["0","a"], ["1","b"], ["2","c"]]
    ['boolean', false], // []
    ['func', function() {}], // []
    ['array', [1, 2, 3]], // [["0", 1], ["1", 2], ["2", 3]]
  ];
  data.forEach(function(datum) {
    console.log(datum[1].getEntries());
  });
```

```
- Object.prototype에 getEntries 메서드를 추가하여 객체의 고유 속성(key-value 쌍)을 배열로 반환하는 기능을 구현하고, 다양한 데이터 타입에 대해 이 메서드를 테스트

- Object.prototype.getEntries 메서드를 정의 (메서드는 객체의 고유 속성(key-value 쌍)을 배열로 반환)

- var res = []; : 결과를 저장할 빈 배열을 초기화

- for (var prop in this) : 객체의 모든 속성을 순회

- if (this.hasOwnProperty(prop)) : 객체의 고유 속성인 경우에만 실행

- res.push([prop, this[prop]]); : 속성과 속성 값을 배열의 형태로 res 배열에 추가

- return res; : 결과 배열을 반환

- 다양한 데이터 타입을 포함하는 배열 data를 정의

- 각 요소는 배열로, 첫 번째 요소는 타입을 설명하는 문자열, 두 번째 요소는 해당 타입의 값을 가진다.

- data 배열의 각 요소에 대해 getEntries 메서드를 호출하고 결과를 콘솔에 출력

  - 객체 ({ a: 1, b: 2, c: 3 }):

  - 숫자 (345): → 객체가 아니므로 고유 속성이 없다.

  - 문자열 ('abc'): → 배열처럼 인덱싱 가능한 객체로 간주, 인덱스가 속성으로 포함

  - boolean (false): → 객체가 아니므로 고유 속성이 없다.

  - 함수 (function() {}): → 고유 속성이 없으므로 빈 배열을 반환

  - 배열 ([1, 2, 3]): → 인덱스를 고유 속성으로 포함
```
