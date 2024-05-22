---
layout: single
title: "4장 4-6 실습 예제입니다."
---

```js
setTimeout(function() {
    console.log(this);
  }, 300); 
  
  [1, 2, 3, 4, 5].forEach(function(x) {
    console.log(this); 
  });
  
  document.body.innerHTML += '<button id="a">클릭</button>';
  document.body.querySelector('#a').addEventListener(
    'click',
    function(e) {
      console.log(this, e); 
    } 
  );
```
