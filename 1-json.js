const fs = require('fs')
// const book = {
//         title : 'Epictetus',
//         author : 'Discourses and selected writings'
// }
// let bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON)
// let dataBuffer = fs.readFileSync('1-json.json')
// //console.log(dataBuffer.toString())
// let dataJSON = dataBuffer.toString();
// let data = JSON.parse(dataJSON);
// console.log(data.title);

let content = fs.readFileSync('1-json.json');
// console.log(content);
let dataBuffer = content.toString();
// console.log(dataBuffer);
let pInfo = JSON.parse(dataBuffer);
// console.log(data);
pInfo.name = 'Eashwar';
pInfo.age = 22;
console.log(pInfo);
pInfoJSON = JSON.stringify(pInfo)
fs.writeFileSync('1-json.json',pInfoJSON);