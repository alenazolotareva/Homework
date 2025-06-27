//1
/*
const arr = [2, 4, 5, 2, 6, 11, 6, 7, 11];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);*/


//2
/*const num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(factorial);*/


//3
/*let year = 2000;
if (year % 4 === 0) {
    console.log (year + 'год - високосный');
}
else {
    console.log (year +  'год не високосный');
}*/


//4
/*const arr = ['red', 'blue', 'green', 'blue', 'black', 'red', 'blue'];
const counts = {};
for (i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (counts[item]) {
        counts[item] += 1;
} else {
    counts[item] = 1;
    }
}
console.log(counts);*/


//5
/*const cat = {
    breed: 'british',
    color: 'gray',
    name: 'Betty',
    age: 1,
}
const keys = Object.keys(cat).length;
console.log(keys);*/


//6
/*const users = [
    {name:'Ivan', age: 30},
    {name:'Maria', age: 25},
    {name:'Alex', age: 23},
    {name:'John', age: 35},
    {name:'Tom', age: 27},
    {name:'Jane', age: 44},
];
const filter =[];
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.age >= 30) {
        filter.push(user);
    }
}
console.log(filter);*/


//7
/*const num = [];
for (let i = 0; i < 10; i++) {
    const random = Math.floor(Math.random() * 101);
    num.push(random);
}
console.log(num);*/


//8
/*const str = "summer";
let word = "";
for (let i = str.length - 1; i >= 0; i--) {
     word += str[i];
}
console.log(word);*/








