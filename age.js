var age =17
let readlineSync=require("readline-sync");
var age=readlineSync.questionInt("enter the number: ")
if(age<10){
    console.log("kid");
}
else if(age<18){
    console.log("teen")
}
else{
    console.log("adult");
}