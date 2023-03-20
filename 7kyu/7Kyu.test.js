const MengerCube = require('./MengerSponge');
const convertToMorseCode = require('./MorseCode');
const EmailParser = require('./EmailParser');
const Palindrom = require('./Palindrom');
const findShort = require('./findShord');

describe('7kyu', () => {
    test('MengerSponge', () => {
        expect(MengerCube(0)).toBe(1);
        expect(MengerCube(1)).toBe(20);
        expect(MengerCube(2)).toBe(400);
        expect(MengerCube(3)).toBe(8000);
        expect(MengerCube(4)).toBe(160000);
        expect(MengerCube(5)).toBe(3200000);
        expect(MengerCube(6)).toBe(64000000);
    });
    test('MorseCode', () => {
        expect(convertToMorseCode('SOS')).toBe('...---...');
        expect(convertToMorseCode('HELLO WORLD!')).toBe('......-...-..--- .-----.-..-..-..');
        expect(convertToMorseCode('ELBRUS BOOTCAMP')).toBe('..-..-....-...-... -...--------.-..---.--.');
        expect(convertToMorseCode('OWLS ONLINE')).toBe('---.--.-..... ----..-....-..');
        expect(convertToMorseCode('QWEQWEQWEQWEQWE')).toBe('--.-.--.--.-.--.--.-.--.--.-.--.--.-.--.');
    });
    test('EmailParser', () => {
        expect(EmailParser('Vasiliy Ivanov <ivanov@gmail.com>')).toBe('ivanov@gmail.com');
        expect(EmailParser('Genadiy Gorin <gorin@genka.com>')).toBe('gorin@genka.com');
        expect(EmailParser('Valeriy Valerich <valera@rambler.com>')).toBe('valera@rambler.com');
        expect(EmailParser('Andrew Nagikh <andrewnagikh@gmail.com>')).toBe('andrewnagikh@gmail.com');
    });
    test('Palindrom', () => {
        expect(Palindrom('акика')).toBe(true);
        expect(Palindrom('алала')).toBe(true);
        expect(Palindrom('ребер')).toBe(true);
        expect(Palindrom('маннам')).toBe(true);
        expect(Palindrom('банан')).toBe(false);
        expect(Palindrom('яблоко')).toBe(false);
        expect(Palindrom('дверь')).toBe(false);
        expect(Palindrom('саказм')).toBe(false);
    });
    test('Find Short', () => {
        expect(findShort('bitcoin take over the world maybe who knows perhaps')).toBe(3);
        expect(findShort('turns out random test cases are easier than writing out basic ones')).toBe(3);
        expect(findShort('Lets travel abroad shall we')).toBe(2);
    })
    
})