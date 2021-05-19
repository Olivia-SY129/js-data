import _ from 'lodash'

const usersA = [
  { 
    userId: '1', 
    name: 'Oliver'
  },
  { 
    userId: '2', 
    name: 'Amy'
  },
]

const usersB = [
  { 
    userId: '1',
    name: 'Oliver'
    },
  { 
    userId: '3',
    name: 'John'
  },
]

const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)

console.log('----------------------')
console.log('----------------------')

const users = [
  { userId: '1', name: 'Oilver' }, 
  { userId: '2', name: 'Amy' }, 
  { userId: '3', name: 'John' }, 
  { userId: '4', name: 'Mac' }, 
  { userId: '5', name: 'Oasis' } 
]

const foundUser = _.find(users, { name: 'John' })
const foundUserIndex = _.findIndex(users, { name: 'John' })
console.log('find', foundUser)
console.log('findIndex', foundUserIndex)

_.remove(users, { name: 'John'})
console.log(users)