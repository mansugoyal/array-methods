//insert element in specific index in unsorted array
let ar = [2,3,5,6,7,8];
let pos = 2;
let val = 4;
let i = ar.length-1;

for(i; i >= pos;i--){
    ar[i + 1] = ar[i];
}

console.log(ar);
ar[pos]=val;
console.log(ar);