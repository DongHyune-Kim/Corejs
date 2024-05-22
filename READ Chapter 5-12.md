---
# Chapter 5-12 실습 예제 설명입니다.
---

```
var createCar = function() {
    var fuel = Math.ceil(Math.random() * 10 + 10); // 연료(L)
    var power = Math.ceil(Math.random() * 3 + 2); // 연비(km / L)
    var moved = 0; // 총 이동거리
    var publicMembers = {
      get moved() {
        return moved;
      },
      run: function() {
        var km = Math.ceil(Math.random() * 6);
        var wasteFuel = km / power;
        if (fuel < wasteFuel) {
          console.log('이동불가');
          return;
        }
        fuel -= wasteFuel;
        moved += km;
        console.log(km + 'km 이동 (총 ' + moved + 'km). 남은 연료: ' + fuel);
      },
    };
    Object.freeze(publicMembers);
    return publicMembers;
  };
  var car = createCar();
```

```
- fuel : 현재 연료량 (리터 단위)을 의미한다.

- Math.ceil(Math.random() * 10 + 10) → 10에서 20 사이의 임의의 정수를 생성한다.

- power : 연비 (킬로미터/리터)를 의미한다.

- Math.ceil(Math.random() * 3 + 2) → 2에서 5 사이의 임의의 정수를 생성한다.

- moved : 총 이동 거리(킬로미터 단위)를 나타내며, 초기값은 0이다.

- 객체에서 moved 속성을 읽을 때마다 moved 변수의 값을 반환한다.

- run : 자동차를 이동시키는 메서드를 의미한다.
        이동 거리 km는 1에서 6 사이의 임의의 정수로 설정한다.

- wasteFuel : 이동 거리 km를 연비 power로 나누어 계산한다.
              연료가 부족하면 "이동불가" 메시지를 출력하고 메서드를 종료한다.
              연료가 충분하면 연료를 소모하고, 총 이동 거리를 증가시킨다.

- 이동 거리와 남은 연료를 콘솔에 출력합니다.

- Object.freeze 메서드를 사용하여 publicMembers 객체를 동결(freeze)한다.

- 동결된 객체는 속성 추가, 삭제, 수정이 불가능

- 동결된 publicMembers 객체를 반환하여 외부에서 수정할 수 없도록 한다.
```

```
결과 : 코드는 자동차 객체를 생성하는 팩토리 함수 createCar를 정의하며, 반환된 객체의 불변성을 보장한다.
       이를 통해 반환된 객체의 속성과 메서드가 외부에서 수정되지 않도록 한다.
```
