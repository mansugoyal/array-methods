let promise1 = new Promise((resolve) =>
    setTimeout(() => resolve('Result 1')
        , 1000));
let promise2 = new Promise((resolve) =>
    setTimeout(() => resolve('Result 2')
        , 2000));

promise1
    .then((result1) => {
        console.log(result1); // Output: Result 1
        return promise2;      // Returning the second promise
    })
    .then((result2) => {
        console.log(result2); // Output: Result 2
    })
    .catch((error) => {
        console.error('Error:', error);
    });
