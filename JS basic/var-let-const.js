var txt = "hi";
if(true){
    var txt = "hello";
    var string = "xin chao";
}
//console.log(txt);
//console.log(string);
// chu y : bien let se co pham vi toan cuc, nhin trong vd tren thi ta thay txt du co trong ham nhung cung bi thay doi gia trri
// khai bao var la khai bao toan cuc
// bien var khi chua duoc khoi tao se tra ve undefined


let txt1 = "hi";
if(true){
    let txt2 = "hello";
}
//console.log(txt2);
// bien let khi khong duoc khoi tao gia tri se in ra loi reference error, bien let co the hoat dong trong nhung pham vi cuc bo ma ko so bi trung ten

// bien const
// bien const khi khai bao kieu gia tri nguyen thuy thi ko the thay doi duoc gia tri
// con khi khai bao kieu gia tri reference thi co the thay doi dc gia tri tuy nhien ko dc khai bao giong lai nhu v nua

const test = "truong";
test = "hi";
console.log(test);