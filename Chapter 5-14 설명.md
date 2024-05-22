---
# Chapter 5-14 실습 예제 설명입니다.
---

```
var partial = function() {
    var originalPartialArgs = arguments;
    var func = originalPartialArgs[0];
    if (typeof func !== 'function') {
      throw new Error('첫 번째 인자가 함수가 아닙니다.');
    }
    return function() {
      var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
      var restArgs = Array.prototype.slice.call(arguments);
      return func.apply(this, partialArgs.concat(restArgs));
    };
  };
  
  var add = function() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  };
  var addPartial = partial(add, 1, 2, 3, 4, 5);
  console.log(addPartial(6, 7, 8, 9, 10)); // 55
  
  var dog = {
    name: '강아지',
    greet: partial(function(prefix, suffix) {
      return prefix + this.name + suffix;
    }, '왈왈, '),
  };
  dog.greet('입니다!'); // 왈왈, 강아지입니다.
```

```
- partial 함수 : 가변 인수를 받아 부분 적용된 함수를 반환한다.

- originalPartialArgs : partial 함수에 전달된 모든 인수들을 담는다.

- 첫 번째 인수는 함수 func여야 하며, 그렇지 않으면 오류를 발생시킨다.

- 반환된 함수는 partialArgs (부분 적용된 인수들)와 restArgs (나머지 인수들)를 결합하여 원래 함수 func를 호출한다.

- apply를 사용하여 함수 호출 시 this를 유지하도록 한다.

- add 함수 : 가변 인수를 받아 모든 인수들의 합을 반환한다.

- addPartial : add 함수에 1, 2, 3, 4, 5를 부분 적용하여 생성된 함수이다.
	       addPartial을 호출할 때 추가 인수 6, 7, 8, 9, 10이 전달된다.
	       partial 함수는 원래 인수들과 추가 인수들을 결합하여 add 함수에 전달하고, 그 결과 55를 반환한다.

- dog 객체 : name 속성과 greet 메서드를 가진다.

- greet 메서드는 partial 함수를 사용하여 부분 적용된 함수를 생성한다.

- partial 함수의 반환된 함수는 prefix와 suffix를 받아서, prefix + this.name + suffix를 반환한다.

- dog.greet('입니다!')를 호출하면 왈왈, 강아지입니다!가 출력된다.
```

```
결과 : 코드는 함수의 부분 적용을 구현하는 partial 함수를 정의하고, 이를 사용하여 함수에 미리 일부 인수를 제공하는 방법을 나타낸다.
       또한, partial 함수를 사용하여 객체 메서드와 this 키워드의 동작을 설명한다.
```
	addPartial(6, 7, 8, 9, 10) → 55를 출력
	dog.greet('입니다!') → 왈왈, 강아지입니다!를 출력
