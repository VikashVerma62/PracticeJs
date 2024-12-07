// let marks=[85, 97, 44, 37, 76, 60];
// let sum=0;
// for(let val of marks){
//     sum=sum+val;
// }
// let avg=sum/marks.length;
// console.log(sum);
// console.log(`avarage marks of the class= ${avg}` );

// let items=[250, 645, 300,900,50];
// let idx=0;
// for(let val of items){
//     console.log(`val at index ${idx} =${val}`);
//     idx++;
// }
// // array methods
// // push()=> use to add something from the last or or end of the array
// let foodItems=["potato","apple", "lichi","tomato"];
// console.log(foodItems);
// foodItems.push("chips");
// console.log(foodItems);
// foodItems.push("panner", "chir","daalBati")
// console.log(foodItems);

// // pop()=> delete items from end
// foodItems.pop();
// console.log(foodItems);
// console.log(foodItems.toString());



let marvelHeroes=["thar", "spiderman", "ironman"];
let dcHeoroes=["superman", "batman"];
let heroes=marvelHeroes.concat(dcHeoroes);
console.log(heroes);


// unshift() => to add element in the start of the array
// shift()=> to remove the element from the start of an array

marvelHeroes.unshift("antman");
console.log(marvelHeroes);
let value=marvelHeroes.shift();
console.log("deleted value",value);





console.log(marvelHeroes);
console.log(marvelHeroes.slice(2,5))
console.log(marvelHeroes.slice(1));


let arr=[1,2,3,4,5,6,7];
arr.splice(2,2,101,102);
console.log(arr);

// add elements using splice
arr.splice(2,0,101)

// delete element
arr.splice(3,1,101);

let companies=["bloomberg", "Microsoft", "Uber", "Google", "IBM","Netflex"];
companies.shift();
console.log(companies);
companies.splice(2,1,"ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);