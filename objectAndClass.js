function Vehicle(name,maker,engine){ 
    this.name = name, 
    this.maker = maker, 
    this.engine = engine 
}; 
  
Vehicle.prototype.getDetails = function(){ 
    console.log('The name of the bike is '+ this.name); 
} 
let bike1 = new Vehicle('Hayabusa','Suzuki','1340cc'); 
let bike2 = new Vehicle('Ninja','Kawasaki','998cc'); 
let bike3 = new Vehicle('Truong', 'khmt', 'computer sience')
console.log(bike1.name); 
console.log(bike2.maker); console.log(
);
console.log("nhanh va nguy hien hehehe");
console.log("gia tri cua bien la");
console.log();
console.log(bike1.getDetails());
console.log();
console.log(bike3.getDetails());