let marks=[97, 82, 76, 56,36];
console.log(marks);
marks[2]=55;
console.log(marks);
// array is mutable in javascript which means we can change in array in js
// looping over an array 

// console.log(marks.length);

 let heros=["ironman", "hulk", "thor", "saktiman", "spiderman", "antman"];
//  console.log(heros);
//  console.log(heros.length);


//  for loop 
// for(let index=0; index<heros.length; index++){
    // console.log(heros[index]);
    


    for(hero of heros){
        console.log(hero);
    }


let cities=["delhi", "pure", "gurgav", "bhopal", "indore","sehore"]

for(city of cities){
    console.log(city)
    console.log(city.toUpperCase());
}


