//задание1

/* function printMessage(n) {
    setInterval(() => alert('message'), n);
}

printMessage(4000); */

//задание2

/* function time(){
    alert('прошло 5 секунд');
}
setTimeout(time, 5000);

setTimeout(() => alert('прошло 5 секунд'), 5000); */

//задание3

function printNumder(from, to) {
    for (let i = 0; i < from; i++) {
    let x = from - i;
    if (x < to) {
        break
    } else {
        alert(x);
    };
};
};
setInterval(printNumder, 1000, 5, 2);
