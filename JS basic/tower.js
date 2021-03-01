function move(a,b,c,n){
    if(n==1) console.log(`chuyen tu ${a} sang ${b}`);
    else{
        move(a,c,b,n-1);
        move(a,b,c,1);
        move(c,b,a,n-1);
    }
}
move("cot a", "cot b", "cot c",3);

