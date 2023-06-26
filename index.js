let text = "";
let buttons = document.querySelectorAll('.num');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        text = text + e.target.innerHTML;
        document.querySelector('#texbox').value = text;
    })
})

let operators = document.querySelectorAll('.oper');
Array.from(operators).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') 
        {
            text = eval(text);
        }
        else if(e.target.innerHTML == 'AC')
        {
            text="";
        }
        else if(e.target.innerHTML=='C')
        {
            let l=text.length;
            text=text.substring(0,l-1);
        }
        else 
        {
            text = text + e.target.innerHTML;
        }
        document.querySelector('#texbox').value=text;
    })
})

