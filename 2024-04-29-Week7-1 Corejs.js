// Example 3-9 내부함수에서의 this 
var obj1 = {
    outer: function() {
      console.log(this); // (1)
      var innerFunc = function() {
        console.log(this); // (2) (3)
      };
      innerFunc();
  
      var obj2 = {
        innerMethod: innerFunc,
      };
      obj2.innerMethod();
    },
  };
  obj1.outer();
  
  // Example 3-10 내부함수에서의 this를 우회하는 방법 
  var obj = {
    outer: function() {
      console.log(this); // (1) { outer: f }
      var innerFunc1 = function() {
        console.log(this); // (2) Window { ... }
      };
      innerFunc1();
  
      var self = this;
      var innerFunc2 = function() {
        console.log(self); // (3) { outer: f }
      };
      innerFunc2();
    },
  };
  obj.outer();
  
  // Example 3-11 this를 바인딩하지 않는 함수(화살표 함수) 
  var obj = {
    outer: function() {
      console.log(this); // (1) { outer: f }
      var innerFunc = () => {
        console.log(this); // (2) { outer: f }
      };
      innerFunc();
    },
  };
  obj.outer();
  
  // Example 3-12 콜백 함수 내부에서의 this 
  setTimeout(function() {
    console.log(this);
  }, 300); // (1)
  
  [1, 2, 3, 4, 5].forEach(function(x) {
    // (2)
    console.log(this, x);
  });
  
  document.body.innerHTML += '<button id="a">클릭</button>';
  document.body.querySelector('#a').addEventListener('click', function(e) {
    // (3)
    console.log(this, e);
  });
  
  // Example 3-13 생성자 함수 
  var Cat = function(name, age) {
    this.bark = '야옹';
    this.name = name;
    this.age = age;
  };
  var choco = new Cat('초코', 7);
  var nabi = new Cat('나비', 5);
  console.log(choco, nabi);
  
  /* 결과
  Cat { bark: '야옹', name: '초코', age: 7 }
  Cat { bark: '야옹', name: '나비', age: 5 }
  */
  