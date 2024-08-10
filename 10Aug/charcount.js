let str = "demouserrrrews";
let ar = [];
for(let i=0; i < str.length; i++){
    if(ar[str[i]]){
        ar[str[i]] += 1;
    }else{
        ar[str[i]] = 1;
    }
}
console.log(ar);