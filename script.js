/**
 * Variables and datatypes
 */
/*
var firstName = 'Subham';
console.log(firstName);

var lastName = 'Ghimire';
var age = 20;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Developer';
console.log(job);
//Variables naming rules
var _3years = 3;
var subhamSujan = 'subham and sujan';
var if = 20;

/**
 * Variables mutation and type coercion
 */
/*
var firstName = 'subham';
var age = 20;

//Type coercion
console.log(firstName + ' '+ age);

var job, isMarried;
job = 'Developer';
isMarried = 'false';
console.log(firstName+ ' is '+ age+ ' years old '+job+
'. Is he married? '+ isMarried);

//Variable mutation
age = 'twenty';
job = 'Driver';

alert(firstName+ ' is '+ age+ ' years old '+job+
'. Is he married? '+ isMarried);

 var lastName = prompt('What is his last name?:)');
 console.log(firstName + ' '+lastName);
*/


/**
 * Basic Operators
 */
/*
var year, yearSubham, yearSujan;
now = 2019;
ageSubham = 20;
ageSujan = 23;

//Math Operators
yearSubham = now - 20;
yearSujan = now - 23;

console.log(yearSubham);

console.log(now + 2);

console.log(now * 2);

console.log(now / 2);

//Logical operators
var subhamOlder = ageSubham < ageSujan;
console.log(subhamOlder);

//typeof operator
console.log(typeof subhamOlder);
console.log(typeof ageSubham);
console.log(typeof 'sujan is older than subham');
var x;
console.log(typeof x);
 */

/**
 * Operator precedence
 */
/**
var now = 2019;
var yearSubham = 1999;
var fullAge = 18;


//Multiple operators
var isFullAge = now - yearSubham >= fullAge; //true
console.log(isFullAge);

var ageSubham = now - yearSubham;
var ageSujan = 23;
var average = (ageSubham + ageSujan) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;// 8 * 4 - 6// 32 - 6// 26
console.log(x, y);

// More operators

x *=2
console.log(x);
x += 10;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);
 */
/*
var massSubham, massSujan;
massSubham = 60;//kg
massSujan = 66;//kg

var heightSubham, heightSujan;
heightSubham = 1.66;//meters
heightSujan = 1.70;//meters

var bmiSubham = massSubham / (heightSubham * heightSubham);
var bmiSujan = massSujan / (heightSujan * heightSujan);

console.log(bmiSubham, bmiSujan);

var sujanHigher = bmiSujan > bmiSubham;
console.log('Is sujan\'s bmi higher than subham\'s bmi ? '+ sujanHigher);
*/



/**
 * IF / else statements
 */
/*
var firstName = 'Subham';
var civilStatus = 'single';

if (civilStatus == 'married') {
    console.log(firstName+ ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon:)');
}


var isMarried = true;
if (isMarried) {
    console.log(firstName+ ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon:)');
}



var massSubham, massSujan;
massSubham = 60;//kg
massSujan = 66;//kg

var heightSubham, heightSujan;
heightSubham = 1.66;//meters
heightSujan = 1.70;//meters

var bmiSubham = massSubham / (heightSubham * heightSubham);
var bmiSujan = massSujan / (heightSujan * heightSujan);

if(bmiSujan > bmiSubham) {
    console.log('Sujan\'s Bmi is higher than Subham\'s');
} else {
    console.log('Subham\'s Bmi is higher than Sujan\'s');
}

*/



/**
 * Boolean logic
 */
/*
var firstName = 'Subham';
var age = 18;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if(age >= 13 && age < 20 ) {
    console.log(firstName + ' is a teenager');
}else {
    console.log(firstName + ' is a man.');
}
*/


/**
 * The Ternary operator and switch statements
 */
/*
 var firstName = 'Subham';
 var age = 18;

 //ternary operator
 age >= 18 ? console.log(firstName + ' drinks beer') //condition(>=),if(?),else(:)
 :console.log(firstName + ' drinks juice');

 var drink = age >= 18 ? 'beer' : 'juice';
 console.log(drink);

 //if else in this case
 if (age >= 18) {
      var drink = 'beer';
  } else {
      var drink = 'juice';
  }


//Switch statements
var job = 'developer';
switch(job) {
    case 'teacher':
        console.log(firstName+' teaches how to code');
        break;
    case 'developer':
        console.log(firstName+' does web developing');
        break;
    case 'driver':
        console.log(firstName+ ' drives a taxi');
        break;
    default:
        console.log(firstName+' does nothing');
}



var age = 16;
switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    default:
        console.log(firstName + ' is a man.');

}

*/



/**
 * Truthy and Falsy values and equality operators
 */

/*

//falsy values: undefined, null, 0, '', NULL
//truthy values: Not falsy values


var height;

height = 20;
if (height || height === 0) {
    console.log('Variable is defined');
}else {
    console.log('Variable has not been defined');
}



//Equality operators
if (height === '20') {
    console.log('The == operator does type coercion');
}else {
    console.log('The === operator doesnot type coercion')
}

*/


/*

var avgJohn = (89 + 120 + 103) / 3;


var avgMike = (116 + 94 + 123) / 3;

/*
if (avgJohn > avgMike) {
    console.log('John wins the match which is '+avgJohn);
} else if (avgJohn == avgMike) {
    console.log('Match is draw');
}else {
    console.log('Mike wins the match which is '+avgMike);
}
*/

/*
var avgMary = (97 + 134 + 105) / 3;

/*
avgMary > avgJohn && avgMike ? console.log('Mary wins the match which is '+avgMary)
: console.log('Mary can\'t make change');
*/
/*
console.log(avgJohn, avgMike, avgMary);


if (avgJohn > avgMike && avgJohn > avgMary) {
    console.log('John wins the match which is '+avgJohn);
}else if (avgMike > avgJohn && avgMike > avgMary) {
    console.log('Mike wins the match which is '+avgMike);
}else if(avgMary > avgJohn && avgMary > avgMike) {
    console.log('Mary wins the match which is '+avgMary);
}else {
    console.log('There is a draw');
}

*/



/**
 * Functions
*/

/*
function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageSubham = calculateAge(1999);

var ageSubh = calculateAge(1998);

var ageSubhamGG = calculateAge(2001);

console.log(ageSubham, ageSubh, ageSubhamGG);



function yearsUntilrement(years, firstName)
{
    var age = calculateAge(years);
    var retirement = 65 - age;
    if (retirement > 0){
       console.log(firstName+' retires in '+retirement+' years.');
    } else {
        console.log(firstName+' is already retired.');
    }
    
}

yearsUntilrement(1999,'Subham');
yearsUntilrement(1990,'Mike');
yearsUntilrement(1950,'John');
*/


/**
 * Function statements and expressions
 */
/*
//Function declaration
//function whatUdo(job, firstName) {}


 //Function expression
 var whatUdo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches to code';
        case 'developer':
            return firstName + ' does web developing';
        case 'designer':
            return firstName + ' does designing job';
        default:
            return firstName + ' does nothing';
    }
 }

 console.log(whatUdo('teacher','John'));
 console.log(whatUdo('retired','Mark'));

*/


/**
 * Arrays
 */
/*
//Initialize new array
 var names = ['Subham','Mike','John'];
 var years = new Array(1999,1998,1978);

 console.log(names[0]);
 console.log(names.length);

 //Mutate array data
names[1] = 'Mary';

names[names.length] = 'Subh';
console.log(names);

//Different data types
var subhamInfo = ['Subham','Ghimire',1999,'developer',false];

subhamInfo.push('red');
subhamInfo.unshift('Mr.');
console.log(subhamInfo);

subhamInfo.pop()
subhamInfo.pop()
subhamInfo.shift()
console.log(subhamInfo);

console.log(subhamInfo.indexOf(1999));
console.log(subhamInfo.indexOf(19)); 

let isDesigner = subhamInfo.indexOf('designer') == -1 ? 'Subham is not a designer'
: ' Subham is a designer';
console.log(isDesigner);

*/
/*
function tipCalculator(bill)
{
    var percentage;
    if (bill < 50){
        percentage = 0.2;
    } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    return percentage * bill;
}


var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalAmount = [bills[0]+tips[0],
                    bills[1]+tips[1],
                    bills[2]+tips[2]];
console.log(tips); 
console.log(finalAmount);

*/


/**
 * Objects and properties
 */
/*
 //object literal
 var subham = {
    firstName : 'Subham',
    lastName : 'Ghimire',
    birthYear : 1999,
    family : ['James','Mark','bob','Mary'],
    job : 'developer',
    isMarried : false
 };
 console.log(subham);
 console.log(subham.firstName);
 console.log(subham['lastName']);
 var x = 'birthYear';
 console.log(subham[x]);

 subham.job = 'designer';
 subham['isMarried'] = true;
 console.log(subham);

 //new object syntax
 var shekhar = new Object();
 shekhar.firstName = 'Shekhar';
 shekhar.birthYear = 2001;
 shekhar['lastName'] = 'Ghimire';
 console.log(shekhar);

*/


/**
 * Objects and methods
 */

/*
var subham = {
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

//  var age = console.log(subham.calcAge());
subham.calcAge()
console.log(subham);
*/

/*
var Mark = {
    fullName : 'Mark miller',
    mass : 50,
    height : 1.57,
    calcBmi : function() {
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi 
    }
};

var John = {
    fullName : 'John smith',
    mass : 58,
    height : 1.66,
    calcBmi : function() {
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi 
    }
};

// Mark.calcBmi();
// John.calcBmi();

// console.log(John,Mark);

if (Mark.calcBmi() > John.calcBmi()) {
    console.log(Mark.fullName+' has higher than John bmi = '+Mark.bmi);
} else if(Mark.bmi < John.bmi) {
    console.log(John.fullName+' has higher than Mark bmi = '+John.bmi);
} else { 
    console.log('They have same Bmi');
} 

*/


/**
 * Loops and iterations
 */
/*
//For loop
for (var i = 0; i <= 20; i+=2) {
    console.log(i);
} 

var subhamInfo = ['Subham','Ghimire',1999,'developer',false];


for (var i = 0; i < subhamInfo.length; i++) {
    console.log(subhamInfo[i]);
}


//While loop
var i = 0;
while(i < subhamInfo.length) {
    console.log(subhamInfo[i]); 
    i++;
}

*/
/*
//continue and break statements
var subhamInfo = ['Subham','Ghimire',1999,'developer',false];
for (var i = 0; i < subhamInfo.length; i++) {
    if (typeof subhamInfo[i] !== 'string' )
        continue;
    console.log(subhamInfo[i]);
}


for (var i = 0; i < subhamInfo.length; i++) {
    if (typeof subhamInfo[i] !== 'string' )
        break;
    console.log(subhamInfo[i]);
}


//looping backwards
for (var i = subhamInfo.length - 1; i >=0; i--) {
    console.log(subhamInfo[i]);
}

*/

/*

var John = {
    firstName : 'John',
    bills : [124, 48, 268, 180, 42],
    calcTips : function() {
        this.tips = [];
        this.finalValues = [];
        for ( var i = 0; i < this.bills.length; i++) 
        {
            //Determine % based on tiping rules
            var percentage;
            var bill = this.bills[i]
            if (bill < 50){
                percentage = 0.2;
            } else if (bill>= 50 && bill < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }
           
            //Add results
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}



var Mark = {
    firstName : 'Mark',
    bills : [77, 475, 110, 45],
    calcTips : function() {
        this.tips = [];
        this.finalValues = [];
        for ( var i = 0; i < this.bills.length; i++) 
        {
            //Determine % based on tiping rules
            var percentage;
            var bill = this.bills[i]
            if (bill < 100){
                percentage = 0.2;
            } else if (bill>= 100 && bill < 300) {
                percentage = 0.1;
            } else {
                percentage = 0.25;
            }
           
            //Add results
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAvg(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    return sum / tips.length;
}

//do calculations
John.calcTips();
Mark.calcTips();


John.average = calcAvg(John.tips);
Mark.average = calcAvg(Mark.tips);

console.log(John, Mark);

if(John.average > Mark.average) {
    console.log(John.firstName+' pays higher tips than Mark');
} else if(Mark.average > John.average) {
    console.log(Mark.firstName+' pays higher tips than John');
} else {
    console.log('Both pays same tips')
}
*/

/*
*Calculate Factorial  
function factorial(n){
    return (n != 1) ? n * factorial(n-1) : 1;
}
console.log(factorial(5))

*/


/* Even or Odd in an Array
let  a = [22,21,3,2,1,4,8,10]

function parray(a){
    for (let i = 0;i<=(a.length-1);i++){
        if (a[i]%2==0) {
            console.log("It is even")
        } else {
            console.log("It is odd")
        }
    }
}
parray(a)
 */
/**
 * 
 
 * Hoisting
 */
/*
//Functions
calculateAge(1999)

 function calculateAge(year){
     console.log(2019 - year)
 }
//  calculateAge(1999)



// retirement(1998)

var retirement = function(year){
    console.log(65 - (2019 - year))
}
// retirement(1998)


//Variables
console.log(age);
var age = 23;

function foo(){
    // console.log(age);
    var age = 25;
    console.log(age);
}
foo();
console.log(age)
* 
*/

/*
 * Scoping
 */
/*
var a = 'Hello'
first()

function first(){
    var b = 'Hi'
    second();

    function second(){
        var c = 'Hey'
        third()
    }
}
//third function cannot access first & second function
//it is outside of the scope and only access global variable

function third() {
    var d = ' Subham'
    //console.log(c)
    console.log(a + d)
}
*/

/**
 * This keyword
 */
/*
//console.log(this)
calculateAge(1998)
function calculateAge(year){
    console.log(2019 - year)
    console.log(this)
}
*/
/**
var subham = {
    name : 'subham',
    yearOfBirth: 1999,
    calculateAge: function(){
        console.log(this)
        console.log(2019 - this.yearOfBirth)

//regular function and hence this keyword points to window object
       /* function innerFunction() {
            console.log(this)
        }
        innerFunction();
       
    }
}
/*
subham.calculateAge()


var shekhar =  {
    name: 'shekhar',
    yearOfBirth: 1998,
}
//method borrowing
shekhar.calculateAge = subham.calculateAge;
shekhar.calculateAge();
*/


