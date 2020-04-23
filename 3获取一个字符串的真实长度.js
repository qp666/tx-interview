//获取一个字符串的真实长度，中文当作2个字符长度

let arr = 'hello世界';
var l = arr.length;
var blen = 0;
for (i = 0; i < l; i++) {
    if ((arr.charCodeAt(i) & 0xff00) != 0) {
        blen++;
    }
    blen++;
}

console.log(blen); //字符串的真实长度9