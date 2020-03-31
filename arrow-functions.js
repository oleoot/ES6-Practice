// OLD JAVASCRIPT

function sayName(){
   console.log("My name is ED");
}


var sayAge = function(){
console.log("My age is 25");

}


sayName();
sayName();



// ES6

const sayLocation = () =>{
console.log("my location is unknown");
}
sayLocation();

// WITH PARAMETER

const sayLocation = (location) =>{
    console.log(`my location is ${location}`);
    }
    sayLocation("paris");



// You can do this only for one parameter
    const sayLocation = location =>{
        console.log(`my location is ${location}`);
        }
        sayLocation("paris");


// You can do this only if you return one thing
const sayLocation = location => console.log(`my location is ${location}`);

sayLocation("paris");


// ======================ASSIGN THIS======================================================

// OLD JAVASCRIPT

var user = {
 name: "ED",
 age: 25,
 sayName: function(){
  console.log("My name is " + this.name);
  var that = this;
  var fullName = function(){
  console.log("My name is " + that.name + "and my age is " + that.age);
  };
  fullName();
 }
}
user.sayName();



// ES6


const user = {
  name: "Ed",
  age: 25,
  sayName: function(){
   console.log(`My name is ${this.name}`);
   const fullName = () =>{
    console.log(`My name is ${this.name} nad my age is ${this.age}`);
   }
   fullName();
  }
}
