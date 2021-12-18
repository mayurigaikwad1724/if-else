let read=require("readline-sync")
var exercise=read.questionInt("enter the exercise time: ");
if (exercise=="6"){
    console.log("wake up");
    var weather=read.questionInt("enter the wether: ")
    if (weather=="cold"){
        console.log("put on sokes,jarking,handglose")
    }
    else if(weather=="summer"){
        console.log("don't put on sokes, jarking,handglose")
    }
    else{
        console.log("i will not go down for exercise")
    }
}else{
    console.log("i will go to exercise")
}