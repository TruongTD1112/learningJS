
var x = " ";
try{
    if(x == " ")  throw "empty";
}
catch(error){
    console.log(error.name);
}
finally{
    console.log("complete");
}