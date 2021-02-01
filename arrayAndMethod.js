
// declare an array
var person = ["John", "Doe", 46];
var name = person[0];
var people = {firstName:"John", lastName:"Doe", age:46};
//console.log(name);
//console.log(people.firstName);


// loop array
item = [1,2,3];
var sum = 0;
for(var i = 0; i< item.length; i++){
    sum += item[i];
}
console.log(sum);
var tong = 0;

// loop array using forEach
item.forEach(element => {
    tong += element;
});
name  = ["Truong", "Ngoc", "Tam"];
name.forEach(element => {
    console.log(element);
})
university = ["bach khoa", "xay dung", "kinh te"];
university.forEach(element =>{
    console.log(element);
})
// basic method in an array
// 1. array.push()
 /* Description: This method is used add elements at the end of an array. */

// Adding elements at the end of an array 
// Declaring and initializing arrays 
var number_arr = [ 10, 20, 30, 40, 50 ]; 
var string_arr = [ "piyush", "gourav", "smruti", "ritu" ]; 

// push() 
// number_arr contains [10, 20, 30, 40, 50, 60] 
number_arr.push(60); 

// We can pass multiple parameters to the push() 
// number_arr contains 
// [10, 20, 30, 40, 50, 60, 70, 80, 90] 
number_arr.push(70, 80, 90); 

// string_arr contains 
// ["piyush", "gourav", "smruti", "ritu", "sumit", "amit"]; 
string_arr.push("sumit", "amit"); 

// Printing both the array after performing push operation 
console.log("After push op " + number_arr); 
console.log("After push op " + string_arr); 

/* 2.Array.unshift() : Adding elements at the front of an Array*/

// Adding element at the beginning of an array 
// Declaring and initializing arrays 
var number_arr = [ 20, 30, 40 ]; 
var string_arr = [ "amit", "sumit" ]; 
  
// unshift() 
// number_arr contains 
// [10, 20, 20, 30, 40] 
number_arr.unshift(10, 20); 
  
// string_arr contains 
// ["sunil", "anil", "amit", "sumit"] 
string_arr.unshift("sunil", "anil"); 
  
// Printing both the array after performing unshift operation 
console.log("After unshift op " + number_arr); 
console.log("After unshift op " + string_arr); 

/* 3.Array.pop() : Removing elements from the end of an array*/
  // Removing elements from the end of an array 
// Declaring and initializing arrays 
var number_arr = [ 20, 30, 40, 50 ]; 
var string_arr = [ "amit", "sumit", "anil" ]; 
  
// pop() 
// number_arr contains 
// [ 20, 30, 40 ] 
number_arr.pop(); 
  
// string_arr contains 
// ["amit", "sumit"] 
string_arr.pop(); 
  
// Printing both the array after performing pop operation 
console.log("After pop op " + number_arr); 
console.log("After popo op " + string_arr); 


/* 4.Array.shift() : Removing elements at the beginning of an array */
  // Removing element from the beginning of an array 
// Declaring and initializing arrays 
var number_arr = [ 20, 30, 40, 50, 60 ]; 
var string_arr = [ "amit", "sumit", "anil", "prateek" ]; 
  
// shift() 
// number_arr contains 
//  [30, 40, 50, 60]; 
number_arr.shift(); 
  
// string_arr contains 
// ["sumit", "anil", "prateek"] 
string_arr.shift(); 
  
// Printing both the array after performing shifts operation 
console.log("After shift op " + number_arr); 
console.log("After shift op " + string_arr); 


/* 5. Array.splice() : Insertion and Removal in between an Array */
// Removing an adding element at a particular location 
// in an array 
// Declaring and initializing arrays 
var number_arr = [ 20, 30, 40, 50, 60 ]; 
var string_arr = [ "amit", "sumit", "anil", "prateek" ]; 
  
// splice() 
// deletes 3 elements starting from 1 
// number array contains [20, 60] 
number_arr.splice(1, 3); 
  
// doesn't delete but inserts 3, 4, 5 
// at starting location 1 
number_arr.splice(1, 0, 3, 4, 5); 
  
// deletes two elements starting from index 1 
// and add three elements. 
// It contains  ["amit", "xyz", "geek 1", "geek 2", "prateek"]; 
string_arr.splice(1, 2, "xyz", "geek 1", "geek 2"); 
  
// Printing both the array after performing splice operation 
console.log("After splice op " + number_arr); 
console.log("After splice op " + string_arr); 






