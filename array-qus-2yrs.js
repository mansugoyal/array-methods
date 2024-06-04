//How would you remove duplicates from an array in JavaScript?
let ar = [2,3,4,3,2,5,6,7,8,9,5,8];

//using predeifned functions
let resAr = ar.reduce((accu,current)=>{
    if(!accu.includes(current)){
        accu.push(current);
    }
    return accu;
},[])
console.log("using predeifned",resAr);

//using loop
let newAr = [];
for(let i =0;i < ar.length; i++){
    if(!newAr.includes(ar[i])){
        newAr.push(ar[i]);
    }
}
console.log("using loop",newAr);