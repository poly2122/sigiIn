const fs=require('fs')

// JSON.parse()把数组变成字符串
// 1.读数据库
const usersString= fs.readFileSync('./db/users.json').toString()
const usersArray=JSON.parse(usersString)
console.log(usersArray);

// 2.写数据库
const user3={id:3,name:'monika',password:'yyy'}
usersArray.push(user3)
const string=JSON.stringify(usersArray)
fs.writeFileSync('./db/users.json',string)