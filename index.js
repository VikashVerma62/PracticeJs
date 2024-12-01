// js is dynamically typed

console.log(" welcome to first code of js ");
console.log("i love js");

// console.log(age);
x=null;
console.log(x);
isFollow=true;
console.log(isFollow);
// varibles in js =====
// variables are container for data to store it

// varible rules  ============
// varible names are case sensitive; "a" & "A" is different
// only letters ,digits underscore and $ is allowed (not even space)
// only a letter underscore or $ should be 1st character
// reserved words cannot be a varible name  for example apple and Apple are different

fullname="shradha khapra";     //valid variable name 
fullName="aman dhattarwal";     //valid variable name 
 $fullName="aman dhattarwal";   //valid variable name
_fullname="shradha khapra";     //valid variable name   
console.log(fullname); 
console.log(fullName);



// let var const
// var =varible can be re-declared $ updated . A global scope variable.
//  let: variable cannot be re-declared but can be updated. A block scope variable.
//  const: variable cannot be re-declaared or updated. A block scope variable.

// var is not used in js after 2015 becouse we have two new keyword which are let and const
// Es6 is the best version of javascript comes in 2015 



//  let keyword
let name="tony stack";
console.log(name);
 let age=23;
 console.log(age);
let totalprice=200;
console.log(totalprice);

var number=45; // var takes 3 blocks to by if we change the value
var number=56;
var number=67;
  console.log(number);   //javascript is print the lowest value of updated value of any valiable if we change the value of that variable


  let name1="vikash verma";   // here we declare it only once a time and change the value many times which means it takes only one memoriey block and
//   change on that particular one block 
  name1="another name";
  name1="third name";
  console.log(name1)


  // const
  const age1=23;
  console.log(age1)

  let a;
  console.log(a); // if we declare any variable and not give its value then it is undefine in javasript


  //  but in const variable we need to give the starting value of the constant
  
