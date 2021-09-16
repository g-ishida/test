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
        } else if (!Number.isInteger(fizz.value) || !Number.isInteger(buzz.value)) { //小数なら
            window.alert('小数だよ');
        } else if (typeof fizz.value === "string" || typeof buzz.value === "string") { //文字列なら
            window.alert('文字列だよ');
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