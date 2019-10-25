const fs = require('fs')

function getp(fp) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fp, 'utf-8', (err, dataStr) => {
      if (err) return reject(err)
      resolve(dataStr)
    })
  })
}

// 复杂的
// getp('./1.txt').then(function (data) {
//   console.log(data)
//   getp('./2.txt').then(function (data) {
//     console.log(data)
//     getp('./3.txt').then(function (data) {
//       console.log(data)
//     }, function (err) {
//       console.log(err.message)
//     })
//   }, function (err) {
//     console.log(err.message)
//   })
// }, function (err) {
//   console.log(err.message)
// })

// 错误可以不写
// getp('./1.txt').then(function (data) {
//   console.log(data)
//   getp('./2.txt').then(function (data) {
//     console.log(data)
//     getp('./3.txt').then(function (data) {
//       console.log(data)
//     })
//   })
// })

// 通过返回实例，一直.then下去
getp('./1.txt')
  .then(function (data) {
    console.log(data)
    return getp('./2.txt')
  })
  .then(function (data) {
    console.log(data)
    return getp('./3.txt')
  })
  .then(function (data) {
    console.log(data)
  })