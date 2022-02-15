const names = require('./1-names')
const sayHi = require('./2-utils')
const alternative = require('./3-alternative-syntax')

require('./4-logical')

console.log(names.peter)
console.log(names.john)
console.log(names.number1 + names.number2,names.number1
    ,names.number2)

const hi = sayHi.sayHi("Lol")
const peter = sayHi.peter
const john = sayHi.john

console.log(peter,john)

for (let i = 0; i < alternative.items.length; i++) {
    console.log(alternative.items[i])
}

console.log(alternative.singlePerson)
