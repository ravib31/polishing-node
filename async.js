const fs = require('fs');
const https = require('https');

console.log('start');

https.get('https://fakestoreapi.com/products/1',(res)=>{
    console.log(res.statusCode);
});


setTimeout(()=>{
    console.log('setTimeout 0');
},5000);

fs.readFile('text.txt','utf-8',(err,data)=>{
    console.log('File Data :',data);
});
