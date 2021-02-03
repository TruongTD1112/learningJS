// so sanh nhung cai quan trong
var a = "12";
var b = 1;
if(b<a) console.log("true");
else console.log("false");
// thu tu uu tien : chuyen ve string -> chuyen ve so numeric, luu y khi so sanh thi no se chuyen ve kieu nguyen thuy,
// sau do mang gia tri nguyen thuy do di so sanh
// NaN : not a number khi so sanh luon tra ve gia tri false cho bat ky tinh huong nao
Case	    Value	
2 < 12	    true	
2 < "12"	true	
2 < "John"	false	
2 > "John"	false	
2 == "John"	false	
"2" < "12"	false	
"2" > "12"	true	
"2" == "12"	false


x = 5
Operator	Description	Comparing	Returns	Try it
==	         equal to	x == 8	     false	
                        x == 5	     true	
                        x == "5"	 true	
===	        equal value and equal
               type	    x === 5	     true	
                        x === "5"	 false	
!=	        not equal	x != 8	     true	
!==	        not equal value or not equal type	x !== 5	false	
                        x !== "5"	 true	
                        x !== 8	     true	
>	        greater than x > 8	     false	
<	        less than	x < 8	     true	
>=	        greater than or equal to	
                        x >= 8	     false	
<=	        less than or equal to	
                        x <= 8	     true	
