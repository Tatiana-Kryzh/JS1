//задание 3 объекты

let circle = {
    radius: 10,
    color: 'red',
    calculateCircumference() {
        console.log(2 * 3.14 *circle.radius);
    }
}

circle.calculateCircumference()

//задание 4 объекты

let message = {
    text: '',
    getMessage(string) {
        message.text = string;
    },
    showMessage(){
        alert(message.text);
    }
};

message.getMessage('hi');
//message.showMessage();

//задание 5 объекты

let rectangle = {
    width: 10,
    height: 20,
    getArea(){
        console.log(rectangle.width * rectangle.height)
    }
};

rectangle.getArea();

//задание 6 объекты

let obj = {
    //name: 'Ivan',
};

function isEmpty(){
    let arr = Object.keys(obj);
    console.log(arr);
    if (arr.length > 0){
        console.log(false)
    } else {console.log(true)}
};

isEmpty()

//задача 5 объекты продолжение

let taskArr = [ 'Tony', 'Stark',  1 , 45, 2, 5, 34, 9, 11];
let [val1, val2, ...rest] = taskArr;
console.log(val1, val2);

function sum() {
    let sum = 0;
    for (let index = 0; index < rest.length; index++) {
        sum += rest[index];
    }
    return sum;
}

console.log(sum());

//дата и время

let bDay = new Date(1995, 5, 15, 9, 55);
let toDay = new Date();
console.log(bDay, toDay);
let xTime = toDay - bDay;
console.log(xTime);