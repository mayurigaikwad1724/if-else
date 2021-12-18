let readlineSync = require("readline-sync")
let number1=readlineSync.questionInt("enter the number1: ")
let number2=readlineSync.questionInt("enter the number1: ")
let number3=readlineSync.questionInt("enter the number1: ")
if (number1>number2){
    if(number1>number3){
        console.log(number1,"is greater number")
    }else{
        console.log(number1,"is greater number")
    }
}
