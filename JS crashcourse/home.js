console.log("hello");
console.log("hello");
//alert("yoo");
var b = "somoothie";
console.log(b);
console.log(45);
document.getElementById("sometext").innerHTML = "hello world";
//var age = prompt("what is your age?");
//document.getElementById("sometext").innerHTML = age;
var num1 = 5.7;
num1 += 1;
console.log(5 * num1);
sum(10, 100);

/*function smae as method*/
function fun() {
  console.log("this is a function");
}
/* creating a function that takes a name and says hello followed by y
our name*/
//var name = prompt("what is your name");
function greeting(name) {
  var result = "hello " + name;
  console.log(result);
}
function sum(a, b) {
  console.log(a + b);
}
//greeting(name);
//for loop, while loops are same in as java
//data types
let yourAge = 18; //number
let youtname = "bob"; //string
//let name={first:'jane',last:'Doe'}//object(similar to hashmap)
//let b=true;//boolean
//let groceries={'apples''oranges''bananas'};//array
//let random; //undefined;
//let nothing=null;//empty
//Strings in JS
let fruit = "banana";
let morefruit = "banana\napple";
console.log(morefruit);
console.log(fruit.length);

console.log(fruit.indexOf("nan"));
console.log(fruit.slice(2, 6));
console.log(fruit.replace("ban", "123"));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit[2]);
//string methods similar to java

//arrays in js
let fruits = ["banana", "apple", "pineapples"];
let fruits1 = new Array("banana", "apple", "pineapples");
//alert(fruits[1]);
fruits[0] = "pear";
//looping through array similar to java

//array common methods
fruits.toString();
console.log("to String", fruits.toString());
console.log(fruits.join("-"));
console.log(fruits, fruits.pop(), fruits); //pops the last element
console.log(fruits, fruits.push("mangoes"), fruits);
fruits[4] = "new fruit"; // same as push
console.log(fruits);
fruits.shift(); // removes first element
console.log(fruits);
fruits.unshift("kiwi");
console.log(fruits);
let vegetables = ["tomato", "brocoli", "shaak"];
let allgroceries = fruits.concat(vegetables); //turns into 1d long array
//by adding the elements of anotehhr array
console.log(allgroceries);
console.log(allgroceries.slice(1, 4));
console.log(allgroceries.reverse());
console.log(allgroceries.sort());
let numbers = [1, 4, 5, 2, 3, 5, 5];
console.log(
  numbers.sort(function (a, b) {
    return a - b;
  })
); // a-b for ascending and b-a for descending
let emptyArray = new Array();
for (let i = 0; i < emptyArray.lebgth; i++) {
  emptyArray.push(i);
}

//objects in javascript

let student = {
  first: "ananya",
  last: "ritu",
  age: "22",
  height: 170,
  studentInfo: function () {
    return this.first + "\n" + this.last;
  },
};
//console.log(student.first);
//student.first = "noo";
//console.log(student.first);

console.log(student.studentInfo());
//conditional........
age = 13;
if (age > 18 && age < 35) {
  status = "target";
}
//swith statements
//differentiate between weekdays and weekends
//day 0=sunday
//day 6-saturday
//print out weekdays, day4-thursday
var day = 4;
switch (day) {
  case 0:
    text = "weekend";
    break;
  case 5:
    text = "weekend";
    break;
  case 6:
    text = "weekend";
    break;
  default:
    text = "weekday";
}
console.log(text);
