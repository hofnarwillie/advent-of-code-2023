import fs from 'fs'
import path from 'path'
import os from 'os'

const inputString = fs.readFileSync(path.join(__dirname, 'input.txt')).toString('utf-8')
const inputStrings = inputString.split(os.EOL)

let result = 0;
let i = 1;

inputStrings.forEach(line => {
    const regex = /\d/g
    const matches = line.match(regex)

    const firstDigit = matches?.[0] ?? "0";
    const lastDigit = matches?.[matches?.length - 1] ?? "0";

    const number = parseInt(firstDigit + lastDigit)
    result += number
    console.log(i++, line, firstDigit, lastDigit, number, result);
})

console.log('Result:', result);
