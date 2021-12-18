var num=require("readline-sync")
var result=num.question("enter the marks: ")
if(result<=30){
    console.log("fail")
}
else if(result<=40){
    console.log("pass")
}
else if(result<=60){
    console.log("good")
}
else{
    console.log("very good")
}