let readlineSync=require("readline-sync")
var alphabet=readlineSync.question("enter the alphabet: ")
if(alphabet>="A" && alphabet<"Z"){
    console.log("uppercase")
}
else{
    console.log("lowercase")
}