//用js实现代码，找出2个数组里相同的元素。

let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5, 6];

let arr3 = arr1.filter((i) => {
    return arr2.includes(i)
})
console.log(arr3); //2.3.4 