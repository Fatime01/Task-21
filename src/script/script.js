function findAvarage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
const arr = [1, 5, 10, 15, 20];
console.log(findAvarage(arr));