---
# 3주차 세 번째 강의 CoreJavaScript 실습 예제 요점 설명입니다. 
---


---
# Example 바닐라 JS 디버그 Program
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


---
# Example 3-26.js 설명
---
```
func // 매개변수 a, b, c, d를 가지고 있는 함수를 선언한다. 이 함수는 호출될 때 this와 매개변수를 출력한다.
bindFunc // func 함수를 null에 바인딩하고, a와 b를 각각 4와 5로 고정한 새로운 함수를 생성한다.
bindFunc(6,7) // bindFunc를 호출, 바인딩된 함수에 매개변수 c와 d가 전달되고, 이 때 this는 null로 설정된다. 따라서 출력은 (null, 4, 5, 6, 7)
func.name // func 함수의 이름을 출력한다. 함수 선언식으로 선언되었으므로 이름은 'func'이다.
bindFunc.name // bindFunc 함수의 이름을 출력한다. 함수 바인딩을 통해 생성된 새로운 함수이므로 이름은 'bound func'이다.

※ 결과적으로:

출력은
(null, 4, 5, 6, 7)
func
bound func
```
---
# Example 5-8.js 설명
---
```
fruits // 과일 목록을 정의
$ul // HTML의 <ul> 요소를 생성
alertFruit // 정의한 과일을 받아서 해당 과일에 대한 경고창을 표시하는 함수를 선언한다.
fruits.forEach // fruits 배열을 순회하면서 각 과일에 대한 <li> 요소를 생성하고 스타일을 설정한다. 그리고 클릭 이벤트에 alertFruit 함수를 바인딩한 후, <ul> 요소에 추가한다.
document.body.appendChild($ul) // 생성된 <ul> 요소를 HTML 문서의 body에 추가합니다.

※ 결과적으로:

주요 동작은 과일 목록을 보여주고, 각 과일을 클릭하면 해당 과일에 대한 경고창이 나타난다.
클릭한 과일의 이름은 alertFruit 함수의 매개변수로 전달되어 경고창에 표시된다.
```
함수 내부에서 console.log()를 사용하여 this와 arguments를 출력할 수 있다.
