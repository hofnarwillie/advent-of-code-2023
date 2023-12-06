import fs from 'fs'
import path from 'path'
import os from 'os'

const inputString = fs.readFileSync(path.join(__dirname, '..', 'input.txt')).toString('utf-8')
const inputStrings = inputString.split(os.EOL)

let result = 0;
let i = 1;

inputStrings.forEach(line => {
    console.log(i++, line, result);
})

console.log('Result:', result);
