// data types in javascript
// 1)   primitive datatypes
// 2) non primitive datatypes

// 1) number
// 2) string
// 3) unfined
// 4) null
// 5) BigInt
// 6) boolean
// 7) symbol


// object  object stores the key value

const student={
    name:"Rahul kumar", // name=key      rahul kumar=value
    age:20,             //  age=key        20=value
    cgpa:8.5,            // cpga=key        8.5 =value
    isPass:true


};
console.log(student)
console.log(student["name"]);
console.log(student["cgpa"]);
 student["age"]   = student["age"] + 1;
 console.log(student["age"]); 

// we update the const object but not update in const variable


const product={
    name:"Ball Pen",
    rating:4,
    offer:5,
    Price:270


};
console.log(product);
  



