let str = "iamaprogrammer";

let resAr = [];

for (let i = 0; i < str.length; i++) {
    let val = str[i];
    resAr[val] = (resAr[val] | 0) + 1;
}

console.log(resAr);