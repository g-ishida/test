'use strict'
// https://gray-code.com/javascript/add-html-element/
{
    const fizz = document.getElementById('fizz');
    const buzz = document.getElementById('buzz');
    const button = document.getElementById('button');
    const number = document.getElementById('number');　

    button.addEventListener('click', () => {
        if (fizz.value === "" || buzz.value === "") { //空文字なら
            window.alert('空文字');
        } else if (isNaN(fizz.value) === true || isNaN(buzz.value) === true) {
            window.alert('文字列だよ');
        } else if (Math.ceil(fizz.value) - Math.floor(fizz.value) !== 0 || Math.ceil(buzz.value) - Math.floor(buzz.value) !== 0) { //小数なら
            window.alert('小数だよ');
        } else {　//エラーがないなら、数字を表示させる
            for (let i = 1; i < 100; i++) {
                let element = document.createElement('p');
                if (i % fizz.value === 0 && i % buzz.value === 0) {
                    element.textContent = 'FizzBuzz' + i;
                    number.appendChild(element);
                } else if (i % fizz.value === 0) {
                    element.textContent = 'Fizz' + i;
                    number.appendChild(element);
                } else if (i % buzz.value === 0) {
                    element.textContent = 'Buzz' + i;
                    number.appendChild(element);
                } else {
                    continue;
                }
            }
        } 

    });



}