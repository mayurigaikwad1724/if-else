const num=require("readline-sync")
var a=num.questionInt("enter the number1: ")
var b=num.questionInt("enter the number2: ")
if(a==b)(a===b);
        var c=num.question("enter the opreator: ");
        if(c=="+"){
            console.log(a+b)
        }if(c=="-"){
            console.log(a-b)
        }if(c=="*"){
            console.log(a/b)
        }
    if(a>b){
        var c=num.question("enter the opreator: ")
        if(c==">="){
            console.log(a>=b);
        }if(c=="<"){
            console.log(a<b)
        }if(c=="<="){
            console.log(a<=b)
        }
    if(a || b){
        var c=num.question("enter the opreator: ")
        if(c=="&&"){
            console.log(a && b)
        }if(c=="+="){
            console.log(a+=b)
        }if(c=="-="){
            console.log(a-=b)
        }if(c=="*="){
            console.log(a*=b)
        }
    if(c=="+"){
        console.log(a+b)
    }if(c==","){
        console.log(a,b)
    }if(c=="?"){
        console.log(a>b?("in"):("out"));
    }
else{
    console.log("NaN")
}
}
    }