let readlineSync=require("readline-sync")
var day=readlineSync.question("enter the day: ")
if(day=="sunday"){
    var permission=readlineSync.question("enter the permission: ")
    if(permission=="yes"){
        console.log("we can go outside");
        var precourtion=readlineSync.question("enter the precourtion: ")
        if (precourtion=="mask and senitizer"){
            console.log("put mask,senitizer,distance mentain");
            var place=readlineSync.question("enter the place: ")
            if (place=="market"){
                console.log("buying things that what ever you want");
            }
            else{
                console.log("7 days quarentine")
            }
        }else{
            console.log("you not go in market");
        }
    }else{
        console.log("you will not go outside")
    }
}else{
    console.log("no permission ")
}