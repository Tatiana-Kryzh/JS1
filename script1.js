let ul = document.createElement('ul');
document.body.append(ul);
let form = document.forms[0];
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let li = document.createElement('li');
    let input1 = form.elements['input1'];
    let input2 = form.elements['input2'];
    let btnX = document.createElement('button');
    btnX.innerHTML = 'X';
    btnX.addEventListener('click', function(){
        let arr = document.querySelector('li');
        console.log(arr);
        li.remove();
    });
    li.innerHTML = input1.value + ' ' + input2.value + ' ';
    li.append(btnX);
    ul.prepend(li);
    form.reset(); 

})
