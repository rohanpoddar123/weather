var http=require('http');
var url='http://api.openweathermap.org/data/2.5/weather?q=jabalpur&appid=b10f1da92bcd46515bde52ebe3402fd5';

var server=http.createServer(function(request,response){

var request=require('request');
request(url,function(err,res,body){
var data=JSON.parse(body);
response.write("<html><body><div id='container'>");
response.write("<h1>"+'city name' +data['name']+'<br>'+"</h1>");
response.write("<h1>"+'temperture' +data.main['temp']+'<br>'+"</h1>");
response.write ("<h2>"+'SunSet Time - :'+ new Date(data.sys['sunset']* 1000)+"</h2>");
response.write("</div></body></html>");


response.end();
   
});


}).listen(8000);

