---
layout: single
title: "3주차 CoreJavaScript 세 번째 강의 실습 예제입니다."
---
# Example
``` js
newFunction();
{
    "version"; "0.2.0",
        "configurations";[
            {
                "name": "바닐라 JS 디버그 Program",
                "program": "${workspaceFolder}/3-26.js",
                "request": "launch",
                "skipFiles": [
                    "<node_internals>/**"
                ],
                "type": "pwa-node"
            },
            {
                "type": "chrome",
                "request": "launch",
                "name": "Launch Chrome with HTML and JS files",
                "file": "${workspaceFolder}/index.html",
                "skipFiles": [
                    "<node_internals>/**"
                ],
            },
        ];
}
```

- Configuration이 array 형태로 되어있고 array 안에는 Configuration이 두개 들어있습니다.
- 첫번째 Configuration은 JavaScript만 있을 때의 Configuration, 이름을 바닐라 JS 디버그 Program으로 해놓음
- 바닐라 JS : HTML 없이 JavaScript 파일을 수행시키고 싶을 경우의 JavaScript를 의미합니다.
- skipFiles : 3-26.js를 돌리기 위해 여러 라이브러리, 종속성이 있는데 이들을 돌리지 않기 위해 라이브러리를 제외시키는 옵션을 의미

# Example 3-26.js 
```js
var func = function (a, b, c, d) {
    console.log(this, a, b, c, d);
};
var bindFunc = func.bind(null, 4, 5);
bindFunc(6,7);
console.log(func.name); // func
console.log(bindFunc.name); // bound func
```
- 첫 번째 "바닐라 JS 디버그 Program"는 3-26.js를 디버그하는 Configuration입니다.

# Example 5-8.js
```js
var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

var alertFruit = function (fruit) {
    console.log("this: ", this);
    console.log("args: ", arguments);
    alert('your choice is ' + fruit);
};
fruits.forEach(function (fruit) {
    var $li = document.createElement('li');
    $li.innerText = fruit;
    $li.style.border = '2px solid #4CAF50' ;
    $li.style.cursor = 'pointer' ;
    var alertFruitBound = alertFruit.bind(null, fruit);
    $li.addEventListener('click', alertFruitBound);
    $ul.appendChild($li);
});
document.body.appendChild($ul);
```
- 두 번째 "Lucnch Chrome with HTML and JS files"는 5-8.js 파일을 디버그하는 Configuration입니다.
