const escola = 'Cod3r'

console.log(escola.charAt(4))

console.log(escola.charAt(0))

console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola'.concat(escola).concat('!'))
console.log(escola.replace(3, 'eEEe'))

console.log('Ana, Maria,Pedro'.split(','))


const template = `
    Olá
    ${escola}!
`

console.log(template)