'use strict'
{
    const btn = document.getElementById('btn');
    const count = document.getElementById('count');

    let i = 0;

   btn.addEventListener('click', () => {
       i++;
       count.innerHTML = i + '回';

       window.alert('うんこまん');
   });
}