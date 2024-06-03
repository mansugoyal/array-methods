//array.foreach()

let ar = [1, 23, 34, 6, 7, 8, 9, 0]
ar.forEach(element => {
    // console.log(element);
});

//array.map();
let ar1 = [2, 3, 4, 5, 6, 7, 9, 10]
let newAr = ar1.map((val) => val % 2)
// or let newAr = ar1.map((val)=> val*2)
// console.log(newAr);

//array.filter();
let words = ['spratr', 'elite', 'exuberant', 'destruction', 'present'];
let result = words.filter((word) => word.length > 6);
// console.log(result);

//array.reduce()
let array1 = [1, 2, 3, 4];
let initialValue = 2;
let sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator * currentValue, initialValue,
);
// console.log("sumWithInitial", sumWithInitial);

//remove duplicates
let ar2 = [2, 3, 4, 5, 6, 7, 9, 10, 5, 5, 7]
let res = ar2.reduce((acc, current) => {
    if (!acc.includes(current)) {
        acc.push(current)
    }
    return acc
}, [])
// console.log("remove duplicates", res);

//count repeating values
let ar7 = [1,2,2,3,3,3,4,4,5,6,6,7,7,8,9,9]
let newar = ar7.reduce((acc,current) => {
      acc[current] = (acc[current] || 0) + 1;
  return acc;
},{})

console.log(newar);

//Flattening an Array of Arrays
let arrays = [[1, 2], [3, 4], [5, 6],7,8,[9,10],11,12];
let flattened = arrays.reduce((acc, current) => acc.concat(current));
// console.log("flattened",flattened);

//array.reduceRight()
let arrays1 = [[1, 2], [3, 4], [5, 6],[9,10]];
let resvalue = arrays1.reduceRight((accu,value)=>accu.concat(value))
// console.log("resvalue",resvalue);

//array.reverse()
let array2 = ['one', 'two', 'three'];
console.log("aray reverse",array2.reverse());
console.log("aray reverse",arrays1.reverse());
console.log("aray reverse",ar2.reverse());


//array.every()
let checkVal = (currentValue) => currentValue < 40
let array3 = [1, 30, 39, 29, 10, 13]
console.log(array3.every(checkVal));