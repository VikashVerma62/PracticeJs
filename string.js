str1="apna collage";
console.log(str1);
str2="this is a javascripct code";
console.log(str2);
console.log(str2[1]);


// Template leterals or string interpolation;
let obj={
    item:"pen",
    price:10,
};
console.log("the cost of ",obj.item, "is", obj.price ,"rupees");
 
console.log(` the cost of ${obj.item} is ${obj.price} rupees ${1+2+4}`)


// string methods
// there are built in functions to manupulate a string.


let str="apna collage";
str=str.toUpperCase()
console.log(str);
// str.toUpperCase() to change the string from lower case to upper case
let str3="OTHER COLLAGE";
str3=str3.toLowerCase()
console.log(str3);
// strings are immutable in javascript which there is no change in real string you need to creat a new string with a new change


//str. trim() => to remove unnessary  spaces in starting and last in the javascript
let str6="      apna collage js               ";

console.log(str6.trim());





// slice method in  js
let str8="0123456789";
console.log(str.slice(1 , 4))// where last value is not included 

// concatination of strings
let str11="apna ";
let str12="collage";
let res=str12.concat(str11);
// second method of concat 
let res1="hello" +"world" +"apna collaage";
console.log(res);
console.log(res1);



// str replace
let str13="hello";
console.log(str.replace("lo","p"));    
