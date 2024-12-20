//Array.includes()
let ar = [3,3,1,1,5,6,4,3,1,2,8,9]
console.log(ar.includes(20));


//Array.from()
console.log(Array.from('foo'));
console.log(Array.from([1, 2, 3], (x) => x * x));

//array.isArray()
console.log(Array.isArray([1, 3, 5]));
console.log(Array.isArray('[]'));
console.log(Array.isArray(new Array(5)));
console.log(Array.isArray(new Int16Array([15, 33])));