//  JSON (JavaScript Object Notation)

import myData from './myData.json'

console.log('myData', myData)

const user = {
  name: 'Oliver',
  age: 22,
  emails: [
    'someEmail@gmail.com',
    'otherEmail@gmail.com'
  ]
}

console.log('user', user)

const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj', obj)

localStorage.setItem('user1', user) // [object Object]
localStorage.setItem('user2', str)

console.log(JSON.parse(localStorage.getItem('user2')))