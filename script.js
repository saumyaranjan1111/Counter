let count = 0;
let buttons = document.querySelectorAll('.buttons button');
buttons.forEach(function(button){
    button.addEventListener('click', (e) => {
        const type = e.target.classList;
        if(type.contains('dec'))
        {
            count--;
        }
        else if(type.contains('inc'))
        {
            count++;
        }
        else if(type.contains('reset'))
        {
            count = 0;
        }
        let counter = document.querySelector('.count');
        counter.textContent = count;
    })
})
// console.log(document.querySelectorAll('.buttons button'))