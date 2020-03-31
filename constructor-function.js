// OLD JAVASCRIPT


function Person(name,age,hairColor){
this.name = name;
this.age = age;
this.hairColor = hairColor;
}

Person.prototype.sayName = function(){
 console.log("my name is " + this.name);
}

var Ed = new Person("Ed", 25, "not nice")
console.log(Ed);

Ed.sayName();

// ===============================================================


function Ed(ocupation, hobbys,name,age,hairColor){
    Person.call(this, name, age, hairColor);
this.ocupation = ocupation;
this.hobbys = hobbys;
}

Ed.prototype = Object.create(Person.prototype);

const person = new Ed ("Dev", "Dancing", "Oleg", 20, "notNice");

person.sayName();

// ES6


class ShoppingList{
constructor(items, nr){
this.items = items;
this.nr = nr;
}
sayList(){
    console.log(this.items);
}

}

const myList = new ShoppingList(["Mlik", "Choco", "redbull"],3);



class Product extends ShoppingList{
   constructor(items, nr, amount, cost){
    super(items, number);
    this.amount = amount;
    this.cost = cost;
   }
}

const product = new Product(["redbull", "Choco", "Candy"], 3, 2, 20);

console.log(product);
