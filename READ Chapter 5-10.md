---
# Chapter 5-10 실습 예제 설명입니다.
---

```
var car = {
    fuel: Math.ceil(Math.random() * 10 + 10), 
    power: Math.ceil(Math.random() * 3 + 2), 
    moved: 0, 
    run: function() {
      var km = Math.ceil(Math.random() * 6);
      var wasteFuel = km / this.power;
      if (this.fuel < wasteFuel) {
        console.log('이동불가');
        return;
      }
      this.fuel -= wasteFuel;
      this.moved += km;
      console.log(km + 'km 이동 (총 ' + this.moved + 'km)');
    },
  };
```

```
- fuel : 현재 연료량 (리터 단위)을 의미한다.

- Math.ceil(Math.random() * 10 + 10) : 10에서 20 사이의 임의의 정수를 생성한다.

- power : 연비 (킬로미터/리터)를 의미한다.

- Math.ceil(Math.random() * 3 + 2) : 2에서 5 사이의 임의의 정수를 생성한다.

- moved : 총 이동 거리(킬로미터 단위)를 나타내며, 초기값은 0이다.

- run : 자동차를 이동시키는 메서드를 의미한다.

- var km = Math.ceil(Math.random() * 6); → 1에서 6 사이의 임의의 이동 거리를 생성한다.

- var wasteFuel = km / this.power; → 이동 거리 km에 따른 소모 연료를 계산한다.

- if (this.fuel < wasteFuel) 조건문을 사용하여 연료가 부족하면 '이동불가' 메시지를 출력하고 함수를 종료한다.

- 연료가 충분하면 this.fuel에서 wasteFuel을 차감하고, this.moved에 이동 거리 km를 더해준다.

- 마지막으로, 이동한 거리와 총 이동 거리를 콘솔에 출력한다.
```

```
결과 : 코드는 자동차 객체를 생성하여 자동차의 연료 상태와 이동 거리를 시뮬레이션하는 기능을 구현한다.
```
