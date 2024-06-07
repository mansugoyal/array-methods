let str1='teSt';
let str2='tets';

let newStr1 = str1.toLowerCase();
let newStr2 = str2.toLowerCase();

if (newStr1.length !== newStr2.length) {
    console.log("Not anagrams");
    return false
}else{
    let arrB = newStr2.split("");
    let isAnagram = true;

    for(let char of newStr1){
        if(!arrB.includes(char)){
            console.log("Not anagrams");
            isAnagram = false;
            break;
        }else{
            arrB.splice(arrB.indexOf(char), 1)
        }
    }

    if (isAnagram) {
        console.log("Given String Is Anagrams");
    }
}