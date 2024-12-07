let marks=[85, 97, 44, 37, 76, 60];
let sum=0;
for(let val of marks){
    sum=sum+val;
}
let avg=sum/marks.length;
console.log(sum);
console.log(`avarage marks of the class= ${avg}` );

let items=[250, 645, 300,900,50];
let idx=0;
for(let val of items){
    console.log(`val at index ${idx} =${val}`);
    idx++;
}
// array methods
// push()=> use to add something from the last or or end of the array
let foodItems=["potato","apple", "lichi","tomato"];
console.log(foodItems);
foodItems.push("chips");
console.log(foodItems);
foodItems.push("panner", "chir","daalBati")
console.log(foodItems);

// pop()=> delete items from end
foodItems.pop();
console.log(foodItems);