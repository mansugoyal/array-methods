// how many time one alphabets is repeating
// let str = 'iamaprogrammer';
let str = 'mansugoyal';
let resAr = [];
for(let i =0;i<str.length; i++){
    if(!resAr[str[i]]){
        resAr[str[i]] = 1
    }else{
        resAr[str[i]] = resAr[str[i]] + 1;
    }
}
console.log(resAr);