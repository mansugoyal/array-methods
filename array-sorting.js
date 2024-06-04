//The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values
//array.sort()
let months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort()
console.log("months",months)

let array1 = [1, 30, 4, 21, 100000];
array1.sort()
console.log("array1",array1)

//array.reverse()
let array2 = ['one', 'two', 'three'];
array2.reverse()
array1.reverse()
months.reverse()
console.log("array.reverse()",array1,array2,months);

//array.join()
let elements = ['Fire', 'Air', 'Water'];
console.log("elements",elements.join());
console.log("elements",elements.join(''));
console.log("elements",elements.join(' :-> '));

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    10,11,12,
    [13,14,15]
  ];
console.log("matrix",matrix.join());

const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log("arr.push",arr.join(";"));

//array.flat()
let arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat())

let arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat(2))
console.log(arr2.flat(Infinity));
console.log(matrix.flat(Infinity))