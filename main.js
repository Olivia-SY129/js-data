import _ from 'lodash'

//  Shallow copy, Deep copy

const user = {
  name: 'Oliver',
  age: 22,
  emails: ['someEmail@gmail.com']
}

// shallow copy in 2 ways
const copyUser = Object.assign({}, user)
const copyUser2 = {...user}

console.log('compare with original:', copyUser === user)
console.log('compare with original-2:', copyUser2 === user)

// deep copy
const copyUser3 = _.cloneDeep(user)
console.log(copyUser3 === user)

user.age = 23
console.log('user: ', user)
console.log('copyUser: ', copyUser)
console.log('copyUser2: ', copyUser2)
console.log('copyUser3: ', copyUser3)

console.log('-------------')
console.log('-------------')

// 주의 object 내부의 array는 또 다른 참조형 데이터이다
user.emails.push('otherEmail@gmail.com')
console.log('shallow copy, array in obj:', user.emails === copyUser.emails) // true
// deep copy 에서는 array도 함께 복사가 된다.
console.log('deep copy, array in obj:', copyUser3.emails === user.emails) // false
