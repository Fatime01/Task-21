// function findAvarage(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// const arr = [1, 5, 10, 15, 20];
// console.log(findAvarage(arr));


// function anyFunction(str) {
//     let resulte = '';

//     for (let i = str.length -1; i >= 0; i--) {
//         resulte += str[i]
//     }

//     return resulte
// }
// console.log(anyFunction('Connect'));


// function firstFunction(str) {
//     let num = Number(prompt())
//     let cavab = 1
//     for(let i = 2; i <=num; i++){
//         resulte += str(i)
//     cavab *= i
//     }
//     return resulte
// }
// console.log(firstFunction(`${num}! = ${cavab}`));


// const faktorial = (num) => {
//     let answer = 1

//     for (let i = 2; i < num; i++){
//         answer *= i
//     }

//     console.log(answer);
// }

// faktorial(6)

const second = (arr) => {
 let result = ''
 let abc = arr.length

 for (let i = 0; i < abc; i++) {
    let element = arr[i]
    let length = element.length
    if (length > result.length) {
        result = element
    }
 }

 console.log(result);

}

second(['apple', 'orange', "strawberry"])