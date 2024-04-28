// Example 1 3개의 Function이 돌고 있는 이 코드를 실행하고 어떤 결과가 나오는지 확인
Console.log('Hi');
setTimeout(function cb1() {
    console.log('cb1');
}, 5000);
console.log('Bye');

// Example 2 0초 후 callback function을 집어 넣는 코드
Console.log('Hi');
setTimeout(function() {
    console.log('callback');
}, 0);
console.log('Bye');