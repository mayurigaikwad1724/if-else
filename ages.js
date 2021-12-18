let readlineSync=require("readline-sync");
var age=readlineSync.questionInt("enter the age: ")
if (age>=5){
    console.log("you can go to school")
}
if(age>=18){
    console.log("you can drive the car");
}
if(age>=21){
    console.log("you can drive the car");
}
if(age>=24){
    console.log("you can marry")
}
if(age>=25){
    console.log("you can legally drink")
}