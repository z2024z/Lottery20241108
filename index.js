// import jquery..


const $ = require('jquery')


var fs = require('fs')
fs.readFile('lotteryData\\ssq20241108.json',function(err,data){
    if(err){
        return console.error(err)
    }
    // console.log('asyn read:'+data.toString());
    var jd = JSON.parse(data.toString());
    console.log(jd.state+','+jd.pageSize+','+jd.result[0].blue);

})
var http = require('http')
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'})
    response.end('helloWorld\n')
}).listen(8888)
console.log('node js. 127.0.0.1:8888 http.');

/*
Device name	TX5asus20241104
Processor	AMD Ryzen 9 8945H w/ Radeon 780M Graphics         4.00 GHz
Installed RAM	64,0 GB (63,3 GB usable)
Device ID	CD23A9A3-5502-44CA-BAEE-72147028E422
Product ID	00378-40000-00001-AA438
System type	64-bit operating system, x64-based processor
Pen and touch	No pen or touch input is available for this display
*/
/*
Edition	Windows 11 Pro Education
Version	24H2
Installed on	‎04/‎11/‎2024
OS build	26100.2161
Experience	Windows Feature Experience Pack 1000.26100.32.0
*/