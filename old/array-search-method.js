//array.indexof('value')

let beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log("indexof",beasts.indexOf('camel'));

//array.lastIndexOf('value')
console.log("lastindexof",beasts.lastIndexOf('camel'))


//array.find()
//it matches the first element of the array that satisfies the condition
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 20);
console.log("find",found);

//array.findIndex()
const found2 = array1.findIndex((element) => element > 20);
console.log("findIndex",found2)