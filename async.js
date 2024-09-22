const fs = require('fs');
const crypto = require('crypto');/* crypto is a built in mudule of node js console is also a module in node js*/
const https = require('https');

console.log('start');

crypto.pbkdf2Sync('password', 'salt', 100000, 64, 'sha512');
console.log('First key is generate');

fs.readFileSync('File2.txt','utf-8');
crypto.pbkdf2('password', 'salt', 10000000, 64, 'sha512',(err,key)=>{
    console.log(key.toString('hex'));
});

// 100000 is no of  ittration
// sha512 is algorithm
// 64 key length in bytes

https.get('https://fakestoreapi.com/products/1',(res)=>{
    console.log(res.statusCode);
});


setTimeout(()=>{
    console.log('setTimeout after 5 sec');
},5000);

fs.readFile('File.txt','utf-8',(err,data)=>{
    console.log('File Data :',data);
});
