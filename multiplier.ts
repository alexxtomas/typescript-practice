// I love TypeScript, it's amazing bruh

const multiplicator = (a: number,b: number, printext: string) => {
    console.log(printext, a * b)
}

const parseArguments = (args: Array<string>) => {
    if (args.length !== 4) throw new Error('Wrong argument in numbers')
    
    if(isNaN(Number(args[2])) ||isNaN(Number(args[3]))) throw new Error('Arguments should be a number')

    const cutArguments: Array<number> = [Number(args[2]), Number(args[3])]

    
    return cutArguments

}

const cleanArguemnts: Array<number> = parseArguments(process.argv)

const a: number = cleanArguemnts[0]
const b: number = cleanArguemnts[1]

multiplicator(a, b, `Multiplied ${a} and ${b} and the result is: `)