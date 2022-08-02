 type Operation = 'multiply' |'add' | 'divide'
 type Result = number 

const operations = ['multiply', 'add', 'divide']

const calculator = (a: number, b: number, op: Operation) : Result => {

    if(op === 'multiply') return a * b
    if (op === 'add') return a + b
    if(op === 'divide') {
        if(b === 0) throw new Error('Cannot divide by 0!')
        return a / b
    }
    throw new Error('Operation is not valid')
}

console.log(process.argv) 