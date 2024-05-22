---
# Chapter 5-15 실습 예제 설명입니다.
---

```
Object.defineProperty(window, '_', {
    value: 'EMPTY_SPACE',
    writable: false,
    configurable: false,
    enumerable: false,
  });
  
  var partial2 = function() {
    var originalPartialArgs = arguments;
    var func = originalPartialArgs[0];
    if (typeof func !== 'function') {
      throw new Error('첫 번째 인자가 함수가 아닙니다.');
    }
    return function() {
      var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
      var restArgs = Array.prototype.slice.call(arguments);
      for (var i = 0; i < partialArgs.length; i++) {
        if (partialArgs[i] === _) {
          partialArgs[i] = restArgs.shift();
        }
      }
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
  var addPartial = partial2(add, 1, 2, _, 4, 5, _, _, 8, 9);
  console.log(addPartial(3, 6, 7, 10)); // 55
  
  var dog = {
    name: '강아지',
    greet: partial2(function(prefix, suffix) {
      return prefix + this.name + suffix;
    }, '왈왈, '),
  };
  dog.greet(' 배고파요!'); // 왈왈, 강아지 배고파요!
```

```
- window._를 EMPTY_SPACE 값으로 정의하여 전역적으로 사용할 수 있게 한다.
  ( 이 값은 변경할 수 없고, 삭제할 수 없으며, 열거되지 않는다.)

- partial2 함수는 가변 인수를 받아 부분 적용된 함수를 반환한다.

- 첫 번째 인수는 함수 func여야 한다. 그렇지 않으면 오류를 발생시킨다.

- 반환된 함수는 partialArgs와 restArgs를 결합하여 원래 함수 func를 호출한다.

- partialArgs에서 '_'를 찾으면, 이를 restArgs에서 가져온 값으로 대체한다.

- add 함수 : 가변 인수를 받아 모든 인수들의 합을 반환한다.

- addPartial : add 함수에 1, 2, 4, 5, 8, 9를 부분 적용하고, '_'로 표시된 자리를 나중에 전달될 인수들로 대체할 수 있는 함수를 의미한다.
	       addPartial(3, 6, 7, 10)을 호출하면 '_' 자리에 3, 6, 7이 들어간다.

- 최종적으로 add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)를 호출하게 되며, 합은 55가 된다.

- dog 객체 : name 속성과 greet 메서드를 가진다.

- greet 메서드는 partial2 함수를 사용하여 부분 적용된 함수를 생성한다.

- dog.greet(' 배고파요!')를 호출하면 왈왈, 강아지 배고파요!가 출력된다.
```

```
결론 : 코드는 partial2 함수를 정의하여, '_'라는 특별한 토큰을 사용해 부분 적용된 함수를 생성하는 방법을 설명한다. (이때 토큰은 나중에 전달될 인수들로 대체된다.)
```	
