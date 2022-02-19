// let fs = require('fs')
// const file = fs.readFileSync('data.json')
// const datas = JSON.parse(file)
// let Promise = require("bluebird");
let randomNumber = require("random-number-csprng");
//     let gen = async () => {
//     for(let i = 0; i <= 200; i++) {
//         let bd = await randomNumber(1900, 1999)
//         obj = {
//             id: i,
//             bd,
//             dd: await randomNumber(bd, 2000),
//         };
//         console.log(obj)
//         // return tabel.push(obj);
//     }
    
//     // return tabel.push(obj);
// }
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let arr =[];
for(let i = 0; i <= 200; i++) {  
        let bd = random(1900, 1999);
        let dd = random(bd, 1999);
        let obj = {
            id: i,
            bd, bd,
            dd: dd,
        };
        arr.push(obj);
        // return tabel.push(obj);
}
console.log(arr)

var json = JSON.stringify(arr);
// console.log(tabel)
var fs = require('fs');
fs.writeFile('data.json', json, function(err) {
    if (err) throw err;
    console.log('complete');
    }
);

// fs.writeFileSync('data.json',parseInt(gen()).toString());