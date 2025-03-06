let numbers=[2,5,7,4,1,8,6];
let nbr=+prompt("Mời bạn nhập số cần tìm");
let flag=false;
if(Number.isInteger(nbr)){
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]==nbr){
            flag=true;
            break;
        }else{
            flag=false;
        }
    }
    if(flag){
        console.log("Bingo");
    }else{
        console.log("Chúc bạn may mắn lần sau");
    }
}else{
    console.log("Số bạn nhập không phải số nguyên")
}