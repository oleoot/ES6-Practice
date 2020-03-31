// OLD JAVASCRIPT


// ES6
const shoppingList = ["Milk", "Cow", "Eggs", "Bananas"];


// forEach

shoppingList.forEach((product, index)=>{
console.log(`The index is ${index} and the product is ${product}`);
})


// Map

const newList = shoppingList.map(item=>{
return item + "new";
});

console.log(newList);


// Filter

const filterList = shoppingList.filter(item=>{
 return item === "Eggs";
})
console.log(filterList);
