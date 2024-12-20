//search element in unsorted array

function findValue(ar, n, key){
    for(let i= 0; i < n; i++)
        if(ar[i] == key)
            return i;
}
let arr = [2,5,7,3,4,6];
let position = findValue(arr, arr.length, 6);
console.log(position);