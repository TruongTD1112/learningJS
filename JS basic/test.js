function a(x) {
    x++;
    return function(y){
        console.log(y);
    }
}

a(1)(2);
