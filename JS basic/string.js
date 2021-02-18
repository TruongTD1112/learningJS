// declare a string
var name = "tran dinh truong";
var sentence = "it's okey to be okey";
var sentence1 = 'my name is "tran dinh truong';
// chu y : neu dung dau ngoac don thi cac dau ben trong phai la dau ngoac kep, neu dung dau ngoac kep thi dau ben trong phai la dau ngoac don

// string object
var x = "John";
var y = new String("John");
var z = new String("John");
// if(x==y) console.log("true");
// else console.log("false");
// if(x===y) console.log("true");
// else console.log("false");
// console.log(x.length);
// if(y == z) console.log("true");
// else console.log("false");

// tu dong convert object string ve primitive string
// var fullName = y + z;
// console.log(fullName);
let string = new String("tran dinh truong");
var name = "tran dinh truong";
/* chu y : tự động chuyển kiểu về primitive type r ms so sánh value của hai thằng
  vd : khi so sánh var name = "tran dinh truong" và var string = new String("tran dinh truong") thì đầu tiên nó ép kiểu objecct theo phương thức toString() sau đó nó ms so sánh giá tri
  còn vd như khi so sánh var name = "a" và var name1 ="b" thì so sánh ntn thì cũng trả về false vì 2 object nó sẽ ko biết ép kiểu nào để trở về để so sánh
*/
// if(name === string.toString()) console.log("true");
// else console.log("false");
let string1 = 'You\'re right, it can\'t be a quote';
console.log(string1);
// chu y: chung ta co the su dung dau bacsticks cho nhung doan string ma co tinh them gia tri vao do nua
console.log(Number.isNaN(0/0));