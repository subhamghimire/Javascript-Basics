//hello
// console.log("hello!")

/*
let age = prompt ("What is your age?")

document.getElementById('para').innerHTML = age;

function returnName(){
    let yourname = prompt("Type your name")
    console.log("Hello "+yourname)
}
returnName()

let sum = function(a,b) {
    return console.log(a + b)
    
}
sum(2,5)


let num = 0

while (num < 20) {  //while loop
    num += 2;
    console.log(num)
}
 */
/*
let Fruits = 'apple\nbanana\ngrapes'  //new line
console.log(Fruits)

let name = 'subhamghimire,shekhar,nepal'
console.log(name.indexOf('m'))
console.log(name.slice(3,7))
console.log(name.replace('sub','she'))
console.log(name.toUpperCase(name))

console.log(name.split(',')) //split by comma
console.log(name.split(''))//split by character
*/
 /*
let name = ['subham','shekhar','nepal']

console.log(name[0]) //access values at index 

//array common methods
console.log('to string', name.toString())
console.log(name.join('*'))
//push , pop , append,shift,unshift etc stuffs

console.log(name.push('hetauda'),name)

name[4] = 'new city'//same as push
console.log(name) 

console.log(name.pop())//remove last element from list
console.log(name.shift()) //remove first element from list
console.log(name.unshift('ktm')) //add element to first of an array

//sort
let numbers = [1,3,66,7,2,3,4,89,55,0]
console.log(numbers.sort(function(a,b){return a-b}))//sorted in ascending order
console.log(numbers.sort(function(a,b){return b-a}))//sorted in descending order

//store in an empty array 
let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
    emptyArray.push(num)
}
console.log(emptyArray);

*/
/*
//object in js
let info = {
    firstName : 'Subham',
    lastName : 'Ghimire',
    birthYear : 1999,
    friends : ['James','Mark','bob','Mary'],
    job : 'developer',
    isMarried : false,
    calcAge : function() {
        this.age = 2019 - this.birthYear;
    }
 };

    //var age = console.log(info.calcAge());
info.calcAge()
console.log(info);

*/
//6 --> weekend Saturday
// switch(2){
//     case 6:
//         text = 'weekend'
//         break;
//     default:
//         text = 'weekday'
// }
// console.log(text)
