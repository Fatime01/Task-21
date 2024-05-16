//(Task1)
function findAvarage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
const arr = [1, 5, 10, 15, 20];
console.log(findAvarage(arr));

//(Task2)
function anyFunction(str) {
    let resulte = '';

    for (let i = str.length -1; i >= 0; i--) {
        resulte += str[i]
    }

    return resulte
}
console.log(anyFunction('Connect'));


//Task 3 u 2 yolla yazmisam
//1(Task3)
function firstFunction(str) {
    let num = Number(prompt('?'))
    let cavab = 1
    for(let i = 2; i < num; i++){
    cavab *= i
    }
    return cavab
}
console.log(firstFunction());

//2(Task3)
const faktorial = (num) => {
    let answer = 1

    for (let i = 2; i < num; i++){
        answer *= i
    }

    console.log(answer);
}

faktorial(6)

//(Task4)
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

//(Task5)
const sum = (num) =>{
    let str = num.toString()
    let result = 0

    for(let i = 0; i < str.length; i++){
        result += Number(str[i])
    }
    console.log(result);
}

sum(5589)