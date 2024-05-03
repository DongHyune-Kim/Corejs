---
# 3주차 첫 번째 강의 CoreJavaScript 실습 예제 요점 설명입니다. 
---

```
# 예제 1-7 설명

var a = 10; // 변수 a를 선언하고 값을 10으로 할당한다.
var b = a; // 변수 b를 선언하고 a의 값을 할당한다. 따라서 b도 10이 된다.
var obj1 = { c: 10, d: 'ddd' }; // 객체 obj1을 선언하고 속성 c에는 10을, 속성 d에는 문자열 'ddd'를 갖도록 초기화한다.
var obj2 = obj1; // 변수 obj2를 선언하고 obj1의 값을 할당합니다. 
이는 객체의 참조를 복사하는 것으로, obj1과 obj2는 같은 객체를 가리킨다. 즉, obj1과 obj2는 동일한 메모리 위치를 참조하게 된다.
```

```
# 예제 1-8 설명

var a = 10; // 변수 a를 선언하고 값을 10으로 초기화힌다.
var b = a; // 변수 b를 선언하고 a의 값을 할당한다. b는 10을 가리킨다.
var obj1 = { c: 10, d: 'ddd' }; // 객체 obj1을 선언하고 속성 c에는 10, 속성 d에는 문자열 'ddd'를 가진 객체를 생성한다.
var obj2 = obj1; // 변수 obj2를 선언하고 obj1의 값을 할당한다. 이는 객체의 참조를 복사하므로 obj1과 obj2는 동일한 객체를 가리킨다. 
b = 15; // b의 값을 15로 변경, a는 변경되지 않는다.
obj2.c = 20; // obj2가 참조하는 객체의 c 속성 값을 20으로 변경한다. obj1도 같은 객체를 참조하므로 obj1.c의 값도 변경된다.

※ 결과적으로:

a는 10이며, b는 15로 변경되었다.
obj1과 obj2는 동일한 객체를 가리키며, 해당 객체의 c 속성이 20으로 변경되었다.
```

```
# 예제 1-9 설명

var a = 10; // 변수 a를 선언하고 값을 10으로 초기화한다.
var b = a; // 변수 b를 선언하고 a의 값을 할당한다. b는 10을 가리킨다.
var obj1 = { c: 10, d: 'ddd' }; // 객체 obj1을 선언하고 속성 c에는 10, 속성 d에는 문자열 'ddd'를 가진 객체를 생성한다.
var obj2 = obj1; // 변수 obj2를 선언하고 obj1의 값을 할당한다. 이는 객체의 참조를 복사하므로 obj1과 obj2는 동일한 객체를 가리킨다.
b = 15; // b의 값을 15로 변경, a는 변경되지 않는다.
obj2 = { c: 20, d: 'ddd' }; // obj2가 새로운 객체를 참조한다. obj1과 obj2는 이제 서로 다른 객체를 가리킨다, obj1은 이전 객체를 계속 참조하지만, obj2는 { c: 20, d: 'ddd' } 객체를 가리킨다.

※ 결과적으로:

a는 10이며, b는 15로 변경되었다.
obj1은 여전히 이전 객체를 참조하며, obj2는 { c: 20, d: 'ddd' } 객체를 참조한다.
```

```
# 예제 1-10 설명

var user = { name: 'Jaenam', gender: 'male' }; // user 객체를 선언하고 이름 속성을 'Jaenam', 성별 속성을 'male'로 초기화한다.
var changeName = function(user, newName) { ... }; // changeName 함수를 선언한다. 이 함수는 user 객체와 새 이름 newName을 받아들인다.
var newUser = user; // newUser 변수를 선언하고 user 객체를 할당한다. 이 때, 참조만 복사되므로 user와 newUser는 동일한 객체를 가리킨다.
newUser.name = newName; // newUser의 이름을 newName으로 변경한다.
return newUser; // 변경된 newUser 객체를 반환한다.
var user2 = changeName(user, 'Jung'); // changeName 함수를 호출하여 user 객체의 이름을 'Jung'으로 변경한 후 반환된 새 객체를 user2에 할당한다.
if (user !== user2) { ... } // user와 user2가 서로 다른 객체인지 확인한다. 이 경우, 콘솔에 "유저 정보가 변경되었습니다."를 출력한다.
console.log(user.name, user2.name); // user와 user2의 이름을 출력한다. 변경된 이름이 출력된다.
console.log(user === user2); // user와 user2가 동일한 객체인지 확인한다. changeName 함수에서는 새 객체를 반환했기 때문에 false가 출력된다.

※ 결과적으로:

유저 정보가 변경되었다는 메시지가 출력된다.
user의 이름은 'Jung', user2의 이름도 'Jung'으로 변경되었다.
user와 user2는 서로 다른 객체이므로 false가 출력된다.
```

```
# 예제 1-11 설명

var user = { name: 'Jaenam', gender: 'male' }; // user 객체를 선언하고 이름 속성을 'Jaenam', 성별 속성을 'male'로 초기화한다.
var changeName = function(user, newName) { ... }; // changeName 함수를 선언한다. 이 함수는 user 객체와 새 이름 newName을 받아들인다.
return { name: newName, gender: user.gender }; // 새로운 객체를 생성하여 새 이름과 원래 성별을 유지
var user2 = changeName(user, 'Jung'); // changeName 함수를 호출하여 새로운 객체를 user2에 할당
if (user !== user2) { ... } // user와 user2가 서로 다른 객체인지 확인한다. 이 경우, 콘솔에 "유저 정보가 변경되었습니다."를 출력
console.log(user.name, user2.name); // user와 user2의 이름을 출력한다. 변경된 이름이 출력된다.
console.log(user === user2); // user와 user2가 동일한 객체인지 확인한다. 이번에는 새로운 객체가 반환되었으므로 false가 출력된다.

※ 결과적으로:

유저 정보가 변경되었다는 메시지가 출력된다.
user의 이름은 여전히 'Jaenam'이고, user2의 이름은 'Jung'입니다.
user와 user2는 서로 다른 객체이므로 false가 출력됩니다.
```

```
# 예제 1-12 설명

var copyObject = function(target) { ... }; // copyObject 함수를 선언한다. 이 함수는 target 객체를 받아들인다.
var result = {}; // 빈 객체 result를 생성, 이 객체는 target의 복사본이 될 것이다.
for (var prop in target) { ... } // target 객체의 각 속성을 반복하면서 속성 이름을 가져온다.
result[prop] = target[prop]; // target 객체의 각 속성을 result 객체에 복사
return result; // 복사된 객체 result를 반환

※ 결과적으로:

함수는 주어진 객체의 모든 속성을 반복하면서 각 속성의 값을 새로운 객체에 복사하여 반환한다.
이를 통해 target 객체와 동일한 속성을 가진 새로운 객체를 만들 수 있다.
```

```
# 예제 1-13 설명

var copyObject = function(target) { ... }; // copyObject 함수는 주어진 target 객체를 복사하여 새로운 객체를 반환, 함수 내부에서는 for...in 루프를 사용하여 target의 속성을 반복하고, 각 속성을 새로운 객체에 복사한다.
var user = { name: 'Jaenam', gender: 'male' }; // user 객체를 선언하고 이름 속성을 'Jaenam', 성별 속성을 'male'로 초기화한다.
var user2 = copyObject(user); // copyObject 함수를 사용하여 user 객체를 복사하여 user2에 할당한다.
user2.name = 'Jung'; // user2 객체의 이름 속성을 'Jung'으로 변경
if (user !== user2) { ... } // user와 user2가 서로 다른 객체인지 확인한다. 이 경우, 콘솔에 "유저 정보가 변경되었습니다."를 출력한다.
console.log(user.name, user2.name); // user와 user2의 이름을 출력한다. user의 이름은 여전히 'Jaenam'이고, user2의 이름은 'Jung'으로 변경되었다.
console.log(user === user2); // user와 user2가 동일한 객체인지 확인한다. copyObject 함수에 의해 새로운 객체가 생성되었으므로 false가 출력된다.

※ 결과적으로:

유저 정보가 변경되었다는 메시지가 출력된다.
user의 이름은 'Jaenam'이고, user2의 이름은 'Jung'으로 변경되었다.
user와 user2는 서로 다른 객체이므로 false가 출력된다.
```

```
# 예제 1-14 설명

var copyObject = function(target) { ... }; // copyObject 함수는 주어진 target 객체를 얕은 복사하여 새로운 객체를 반환
var user = { name: 'Jaenam', urls: { ... } }; // user 객체를 선언하고, 중첩된 객체인 urls 속성을 가진다.
var user2 = copyObject(user); // copyObject 함수를 사용하여 user 객체를 복제하고 user2에 할당
user2.name = 'Jung'; // user2 객체의 이름 속성을 'Jung'으로 변경한다. 이 변경은 user 객체에 영향을 주지 않는다.
console.log(user.name === user2.name); // user와 user2의 이름이 동일한지 확인한다. false가 출력되며, user와 user2는 독립적인 객체이므로 이름이 다르다.
user.urls.portfolio = 'http://portfolio.com'; // user 객체의 urls 속성 중 portfolio 속성 값을 변경하다. 이 변경은 user2 객체에도 영향을 미친다.
console.log(user.urls.portfolio === user2.urls.portfolio); // user와 user2의 urls 객체의 portfolio 속성이 동일한지 확인한다. true가 출력, copyObject 함수는 얕은 복사를 수행하기 때문에 urls 객체는 동일한 참조를 가지고 있다.
user2.urls.blog = ''; // user2 객체의 urls 속성 중 blog 속성 값을 빈 문자열로 변경한다. 이 변경은 user 객체에도 영향을 미친다.
console.log(user.urls.blog === user2.urls.blog); // user와 user2의 urls 객체의 blog 속성이 동일한지 확인한다. true가 출력, copyObject 함수는 얕은 복사를 수행하기 때문에 urls 객체는 동일한 참조를 가지고 있다.

※ 결과적으로:

user와 user2의 이름은 서로 다르다.
user와 user2의 urls 객체는 동일한 참조를 가지고 있으므로 하나의 객체를 변경하면 다른 객체에도 영향을 준다.
```

```
# 예제 1-15 설명

var copyObject = function(target) { ... }; // copyObject 함수는 주어진 target 객체를 얕은 복사하여 새로운 객체를 반환한다.
var user = { name: 'Jaenam', urls: { ... } }; // user 객체를 선언하고, 중첩된 객체인 urls 속성을 가진다.
var user2 = copyObject(user); // copyObject 함수를 사용하여 user 객체를 복사하고 user2에 할당
user2.urls = copyObject(user.urls); // user2의 urls 속성에 대해 깊은 복사를 수행, 이렇게 하면 user와 user2가 서로 다른 urls 객체를 가리키게 된다.
user.urls.portfolio = 'http://portfolio.com'; // user 객체의 urls 속성 중 portfolio 속성 값을 변경한다. 이 변경은 user2 객체에 영향을 미치지 않는다.
console.log(user.urls.portfolio === user2.urls.portfolio); // user와 user2의 urls 객체의 portfolio 속성이 동일한지 확인, false가 출력, user와 user2는 서로 다른 urls 객체를 가리키고 있기 때문에 해당 속성의 값도 다르다.
user2.urls.blog = ''; // user2 객체의 urls 속성 중 blog 속성 값을 빈 문자열로 변경한다. 이 변경은 user 객체에 영향을 미치지 않는다.
console.log(user.urls.blog === user2.urls.blog); // user와 user2의 urls 객체의 blog 속성이 동일한지 확인, false가 출력, user와 user2는 서로 다른 urls 객체를 가리키고 있기 때문에 해당 속성의 값도 다르다.

※ 결과적으로:

user와 user2의 urls 객체는 서로 다른 객체이므로 해당 속성의 값이 변경되어도 영향을 주지 않는다.
```

```
# 에제 1-16 설명

var copyObjectDeep = function(target) { 
var result = {}; // 새로운 객체를 생성합니다.
if (typeof target === 'object' && target !== null) { // 주어진 대상이 객체이고 null이 아닌 경우에만 복사를 시도합니다.
for (var prop in target) { // 객체의 각 속성을 반복하면서 복사를 수행합니다.
result[prop] = copyObjectDeep(target[prop]); // 속성의 값을 재귀적으로 복사합니다.
  } else {
    result = target; // 주어진 대상이 객체가 아니거나 null인 경우에는 복사 대상 자체를 반환합니다.
  }
  return result;  // 복사된 객체를 반환합니다.

※ 결과적으로:

코드는 주어진 객체를 깊은 복사하여 새로운 객체를 생성하는 함수를 정의함.
함수는 재귀적으로 모든 객체와 중첩된 객체의 속성을 복사한다.
```

```
# 예제 1-17 설명

var copyObjectDeep = function(target) { // copyObject 함수는 주어진 target 객체를 얕은 복사하여 새로운 객체를 반환한다.
var result = {};  // 새로운 객체를 생성합니다.
if (typeof target === 'object' && target !== null) { // 대상이 객체이고 null이 아닌 경우에만 복사를 시도합니다.
for (var prop in target) {  // 대상 객체의 각 속성을 반복하면서 복사를 수행합니다.
result[prop] = copyObjectDeep(target[prop]); // 대상 객체의 속성 값이 객체인 경우에는 재귀적으로 copyObjectDeep 함수를 호출하여 깊은 복사를 수행
    }
  } else {   // 대상이 객체가 아니거나 null인 경우에는 대상 자체를 복사하여 반환합니다.
      result = target;
  }
  return result; // 깊은 복사가 완료된 객체를 반환합니다.
};

// 원본 객체입니다.
var obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 2],
  },
};
var obj2 = copyObjectDeep(obj); // copyObjectDeep 함수를 사용하여 obj 객체를 복사합니다.

// obj2 객체의 속성을 변경합니다.
obj2.a = 3;        // obj2의 a 속성을 3으로 변경
obj2.b.c = 4;      // obj2의 b 객체의 c 속성을 4로 변경

// obj 객체의 b 객체의 d 배열의 두 번째 요소를 변경
obj.b.d[1] = 3;

// 변경된 obj와 obj2 객체를 출력합니다.
console.log(obj);   // { a: 1, b: { c: null, d: [ 1, 3 ] } }
console.log(obj2);  // { a: 3, b: { c: 4, d: [ 1, 2 ] } }
```

```
# 예제 1-18 설명

var copyObjectViaJSON = function(target) { // copyObjectViaJSON 함수를 정의한다. 이 함수는 주어진 target 객체를 복제하는 역할을 수행
return JSON.parse(JSON.stringify(target)); // 내부에서는 JSON.stringify()를 사용하여 객체를 JSON 문자열로 변환, 다시 JSON.parse()를 사용하여 이를 JSON 객체로 변환하여 복제된 객체를 생성한다.

var obj = { // obj라는 객체를 선언하고 초기화한다. 이 객체는 다양한 종류의 속성을 가지고 있다.

  a: 1, // a는 단순한 숫자 속성
  b: { // b는 객체 속성
    c: null, // c는 null 값을 가진 속성
    d: [1, 2], // d는 배열을 가진 속성
    func1: function() { // func1이라는 함수 속성
      console.log(3);
    },
  },
  func2: function() { // func2: 함수 속성
    console.log(4);
  },
};

var obj2 = copyObjectViaJSON(obj); // copyObjectViaJSON 함수를 사용하여 obj 객체를 복사하여 obj2에 할당

// obj2의 일부 속성을 변경
obj2.a = 3; // a는 3으로 변경
obj2.b.c = 4; // b.c는 4로 변경
obj.b.d[1] = 3; // b.d[1]은 배열 d의 두 번째 요소를 3으로 변경

// 변경된 obj와 obj2 객체를 출력
console.log(obj); // { a: 1, b: { c: null, d: [ 1, 3 ] } }
console.log(obj2); // { a: 3, b: { c: 4, d: [ 1, 2 ] } }
```

```
# 예제 1-19 설명

var a; // 변수 a 생성
console.log(a); // (1) undefined. 값을 대입하지 않은 변수에 접근

var obj = { a: 1 }; // obj를 생성, 이 객체는 a라는 속성을 가지고 있고, 이 속성의 값은 1
console.log(obj.a); // 1
console.log(obj.b); // (2) 존재하지 않는 프로퍼티에 접근
console.log(b); // c.f) ReferenceError: b is not defined

var func = function() {};
var c = func(); // (3) 반환(return)값이 없으면 undefined를 반환한 것으로 간주.
console.log(c); // undefined

※ 결과적으로:

처음 선언한 변수 a는 값을 대입하지 않아서 undefined가 된다.
객체 obj의 속성 a는 값이 1로 설정되어 있고, obj.b는 해당 속성이 존재하지 않아서 undefined가 된다. 
변수 b는 선언되지 않았기 때문에 ReferenceError가 발생한다. 
함수 func를 호출하면 반환값이 없으므로 undefined가 변수 c에 할당된다.
```

```
# 예제 1-20 설명

arr1은 빈 배열을 생성한 후에 length 속성을 3으로 설정한다.
arr2는 new Array(3)을 사용하여 길이가 3인 배열을 생성한다.
arr3은 배열의 각 요소에 undefined를 할당하여 길이가 3인 배열을 생성한다.

모든 배열은 길이가 3이고 각 요소가 비어있는(empty) 배열이다.
출력된 결과가 [empty x 3]로 나타난 이유는 배열이 비어있는 상태이기 때문이다.
배열의 각 요소가 비어있을 때는 undefined가 아닌 empty로 표시된다.

※ 결과적으로:

출력은
[empty x 3]
[empty x 3]
[undefined, undefined, undefined]
```
