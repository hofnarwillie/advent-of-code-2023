import fs from 'fs'
import path from 'path'
import os from 'os'

const inputString = fs.readFileSync(path.join(__dirname, '..', 'input.txt')).toString('utf-8')
const inputStrings = inputString.split(os.EOL)

let result = 0;
let i = 1;

const DIGITS: { [key: string]: string} = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
};

const reverse = (input: string) => input.split('').reverse().join('');

const digitNames = Object.keys(DIGITS);
const digitsRegexStr = digitNames.join('|');
const reverseDigitsRegexStr = digitNames.map(reverse).join('|');
const regexFirst = new RegExp(`(\\d|${digitsRegexStr})`);
const regexLast = new RegExp(`(\\d|${reverseDigitsRegexStr})`);

inputStrings.forEach(line => {
    const firstMatch = line.toLowerCase().match(regexFirst);
    const lastMatch = reverse(line).toLowerCase().match(regexLast);

    const firstDigitStr = firstMatch?.[0] || '';
    const lastDigitStr = reverse(lastMatch?.[0] || '');

    const firstDigit = DIGITS[firstDigitStr] || firstDigitStr;
    const lastDigit = DIGITS[lastDigitStr] || lastDigitStr;

    const number = parseInt(firstDigit + lastDigit, 10)
    if (isNaN(number)) throw new Error('NaN')
    if (number > 99) throw new Error('Larger than 99')
    result += number
    console.log(i++, line, firstDigit, lastDigit, number, result);
})

console.log('Result:', result);
