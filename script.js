//задание 1

let newArr = ["hi", "thanks", "bye"];
let arr1 = [];
for (let i = 0; i < newArr[0].length; i++) {
    arr1 = i;
    document.write(arr1 + "<br>")
    console.log(arr1)
};
let arr2 = [];
for (let i = 0; i < newArr[1].length; i++) {
    arr2 = i;
    document.write(arr2)
    console.log(arr2)
};
let arr3 = [];
for (let i = 0; i < newArr[2].length; i++) {
    arr3 = i;
    document.write(arr3)
    console.log(arr3)
};

//задание 3

let arr = [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21];
let result = arr.filter(item => {
    return item <10;
});
console.log(result);

//калькулятор

let sum = 0;
while (true) {
    let value = [];
    value = +prompt("Введите число", '');
    if (value===15) break;
    console.log(value);
    sum += value;
}
alert('Сумма' + sum);