const sumReduce = (numberList) => {
    return numberList.reduce((sum,number)=>{
        const newSum = sum + number;
        return newSum;
    },0)
}
console.log(sumReduce([1,2,3]));
// ham reduce hoat dong trong mang thi co hai tham so
// tham so dau tien la 1 cai ham, nhan gia tri trc do va gia tri hien tai, ngoai ra co tham so thu ba va thu 4 nhung ko quan trong va it khi duoc su dung
// tham so thu hai la gia tri khoi tao