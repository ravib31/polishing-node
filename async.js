const fs = require('fs');
const https = require('https');

console.log('start');

fs.readFileSync('File2.txt','utf-8');

https.get('https://fakestoreapi.com/products/1',(res)=>{
    console.log(res.statusCode);
});


setTimeout(()=>{
    console.log('setTimeout after 5 sec');
},5000);

fs.readFile('File.txt','utf-8',(err,data)=>{
    console.log('File Data :',data);
});
