//判断数字是否为对称数，比如121，1331，111。

let num = 121;
let num1 = 1331;
let num2 = 111;

function isSymmetry(arr) {
    let arr1 = arr + ''
    if (arr1.split('').join('') == arr1.split('').reverse().join('')) {
        return console.log('对称数')
    } else {
        return console.log('非对称数')
    }
}

isSymmetry(num); //对称数