//给一个时间戳，计算出这个时间戳对应当月的第一天0点0分0秒的时间戳。

// 获取时间戳 (本月第一天00.00.00  本月最后一天23.59.59)
var data = new Date(); //本月
data.setDate(1);
data.setHours(0);
data.setSeconds(0);
data.setMinutes(0);

// console.log('本月第一天0点' + data.getTime())

var timeStart = parseInt(data.getTime() / 1000);
console.log(timeStart); //当月的第一天0点0分0秒的时间戳