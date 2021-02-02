// function
// object
var car = {type : "Fiat", model : "500", color: "white"};
var car = {
    type : "Fiat",
    model : "500",
    color : "blue",
}
console.log(car.type);
console.log(car.color);
console.log(car["model"]);


var person ={
    firstName : "Tran Dinh",
    lastName  : "Truong",
    id : 20173429,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
};
//var name = person.fullName();
// truy cap function trong object
console.log(person.fullName());
// truy cap function trong object ma khong co () thi se tra ve dinh nghia cua ham

