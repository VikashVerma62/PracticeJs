function run(){
    // var num=45;
    // console.log(num);

    alert("hello i am a alert message");
    prompt("enter your name");
    confirm("hell0 confirm");
    let num1=4;
    let num2 =4;
    alert( "the sum is " +(num1+num2));
    prompt("the sum is" +(num1+num2));
    confirm("the sum is " +(num1+num2));

   let num3=parseInt(prompt("enter 1 number"));
   let num4=parseInt(prompt("enter the second number"));
   alert("the sum is" +(num3+num4));
   prompt("the sum is " +(num3+num4));
   confirm("the sum is " +(num3+num4));

   let num5=parseInt(prompt("enter the number"));
   if(num5>=18){
    // alert("you are eligible for vote");
    prompt("you are eligible for vote");
   } else{
    // alert("you are not eligible for vote");
    prompt("you are not eligible for vote");
                          
   }


}

run();