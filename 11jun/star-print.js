let n=0;
for(let i=1;i<=5;i++){
    let res = '';
    console.log("value of i="+i);
    for(let j=1;j<=i;j++){
        res += j+n + " ";
    }
    n += i;
    console.log("value of n="+n);
    console.log(res)
}