//How would you remove duplicates from an array in JavaScript?
    let ar = [2,3,4,3,2,5,6,7,8,9,5,8];

    //using predeifned functions
    let resAr = ar.reduce((accu,current)=>{
        if(!accu.includes(current)){
            accu.push(current);
        }
        return accu;
    },[])
    console.log("using predeifned",resAr);

    //using loop
    let newAr = [];
    for(let i =0;i < ar.length; i++){
        if(!newAr.includes(ar[i])){
            newAr.push(ar[i]);
        }
    }
    console.log("using loop",newAr);

//intersection of two arrays
    let arrayA = [1, 2, 3, 4, 5];
    let arrayB = [3, 4, 5, 6, 7];

    let newArr = arrayA.filter((element => arrayB.includes(element)));
    console.log("array intersection",newArr);

    //using loop
    let newArray = [];
    arrayA.forEach(element => {
        if(arrayB.includes(element)){
            newArray.push(element)
        }
    });
    console.log("intersection using loop",newArray);

//Write a function to rotate an array by k positions.
    let arrNew = [1, 2, 3, 4, 5];
    let k = 3;