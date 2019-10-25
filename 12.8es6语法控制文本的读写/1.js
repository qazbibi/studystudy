const fs = require('fs')

// var promise = new Promise(function(){
//   fs.readFile('./1.txt','utf-8',(err,dataStr)=>{
//     if(err) throw err
//     console.log(dataStr)
//   })
// })


// 写法一
// function getp(fp){
//   var promise = new Promise(function (resolve, reject) {
//     fs.readFile(fp, 'utf-8', (err, dataStr) => {
//       if (err) return reject(err)
//      resolve(dataStr)
//     })
//   })
//   return promise
// }
// var p = getp('./1.txt')
// p.then(function(data){
//   console.log(data)
// },function(err){
//   console.log(err.message)
// })

// 简写
function getp(fp) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fp, 'utf-8', (err, dataStr) => {
      if (err) return reject(err)
      resolve(dataStr)
    })
  })
}
getp('./1.txt').then(function (data) {
  console.log(data)
}, function (err) {
  console.log(err.message)
})