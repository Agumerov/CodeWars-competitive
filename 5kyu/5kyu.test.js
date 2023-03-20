const dateParser = require("./dateParser");
const passValidation = require("./passValidation");

describe('5kyu', () => {
    test('date parser', () => {
        expect(dateParser(0)).toBe('00:00:00');
        expect(dateParser(59)).toBe('00:00:59');
        expect(dateParser(60)).toBe('00:01:00');
        expect(dateParser(90)).toBe('00:01:30');
        expect(dateParser(3599)).toBe('00:59:59');
        expect(dateParser(3600)).toBe('01:00:00');
        expect(dateParser(45296)).toBe('12:34:56');
        expect(dateParser(86399)).toBe('23:59:59');
        expect(dateParser(86400)).toBe('24:00:00');
        expect(dateParser(359999)).toBe('99:59:59');
    });
    test('Pass Valid', () => {
        expect(passValidation('fjd3IR9')).toBe(true);
		expect(passValidation('ghdfj32')).toBe(false);
		expect(passValidation('DSJKHD23')).toBe(false);
		expect(passValidation('dsF43')).toBe(false);
		expect(passValidation('4fdg5Fj3')).toBe(true);
		expect(passValidation('DHSJdhjsU')).toBe(false);
		expect(passValidation('fjd3IR9).;')).toBe(false);
		expect(passValidation('fjd3  IR9')).toBe(false);
		expect(passValidation('djI38D55')).toBe(true);
		expect(passValidation('djI3_8D55')).toBe(false);
		expect(passValidation('djI38D55@@')).toBe(false);
    })
})