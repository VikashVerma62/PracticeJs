// for(let count=1; count<=100; count++){
    // console.log(count);
// }
// let sum=0;
// for(let i=0;i<=100; i++){
    // sum=sum+i;
//    
// }
// console.log("sum=" ,sum);


// for-of loop
let str="javascript";
let size=0;
for(let i of str){
    console.log("i=",i);
    size++;
}
console.log("string size=",size);

// for-in loop==========================// for in loop is use for objects and arrays
// for(let key in objVar){

// }
let student={
    name:"rahul kumar",
    age:20,
    Cgpa:8.9,
    isPass:true
};
// console.log(student);
// console.log(student.name);
for( let key in student){// for in loop print the keys in the loop;
    // console.log(i);
    console.log("key=", key , "value=", student[key]);
}


for(let count=1; count<=100; count++){
    if(count%2==0){

    
    console.log("even=",count);
    }
}

// practise q 2

let gameNumber=25;
let userNumber=prompt("Guess the number");
// console.log(number);
while(userNumber!= gameNumber){
 userNumber=  prompt("you entered wrong number . Guess again")

}
console.log("you entered the right number");