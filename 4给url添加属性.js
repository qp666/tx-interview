//实现一个js方法appendParams，可以给url加上多个新的参数，多考虑兼容性。用法例如appendParams('http://url', {a:1,b:2})返回http://url?a=1&b=2

let url = 'https://wj.qq.com';

function appendParams(URL, Obj) {
    let temp = '?'
    for (var key in Obj) {
        temp += key + '=' + Obj[key] + '&'
    }
    let temps = URL + temp
    temps = temps.substr(0, temps.length - 1);
    return temps
}

let urls = appendParams(url, {
    a: 2,
    b: 3,
    c: 4
})

console.log(urls);