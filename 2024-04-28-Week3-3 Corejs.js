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

 // Example 3-26.js 
var func = function (a, b, c, d) {
    console.log(this, a, b, c, d);
};
var bindFunc = func.bind(null, 4, 5);
bindFunc(6,7);
console.log(func.name); // func
console.log(bindFunc.name); // bound func

// Example 5-8.js
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