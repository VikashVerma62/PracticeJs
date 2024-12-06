function run(){
    let num=parseInt(prompt("enter the number"));
    if(num>0){
        // alert("number is positive");
        // prompt("number is positive");
        confirm("number is positive")


    }
    else{
        // alert("number is negative");
        // prompt("number is negative");
        confirm("number is negative")
        
    }
}
run();

let run1=()=>{
    let age=prompt("enter your age")
     let result=age>18? prompt("you are eligible for vote"): prompt("you are not eligible for vote");
    alert(result);
    


}

let run2=()=>{
    let course1=confirm("course completed"); 
    let course2=confirm("certificat completed");
    if(course1 && course2){
alert("you are certified");
    }
    else{
        alert("you are not certified")
    }
}
let run=()=>{
    
}