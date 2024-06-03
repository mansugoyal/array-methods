//delete element in unsorted array
let ar = [2,3,5,6,7,8];
let val = 5;
let newAr = [];
for(let i=0; i < ar.length;i++){
    if(ar[i] !== val){
       newAr.push(ar[i]);
    }
}
console.log(newAr);