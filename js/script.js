function marks(num)
{
    if(num>=85){
        console.log("dist");
    }
    else if((num<=85 && num>=60)){
        console.log("fc");
    }
    else if((num<=60 && num>=30)){
        console.log("sc");
    }
    else{
        console.log("fail");
    }
}
var num= prompt("Enter the number");
marks(num);