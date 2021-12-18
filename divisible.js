var readlineSync=require("readline-sync")
var varx=readlineSync.questionInt("enter the number: ")
var vary=readlineSync.questionInt("enter the number: ")
if (varx%vary==0){
    console.log("divisible")
}
else{
    console.log("not divisible")
}