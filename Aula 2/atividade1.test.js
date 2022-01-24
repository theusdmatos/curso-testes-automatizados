const StringManipulations = require('./atividade1');

let stringManip, shortStringManip, strStringManip, shortStrStringManip;

describe("String Manipulations class mock", () => {


    beforeEach(() => {

        jest.spyOn(StringManipulations.prototype, 'findFirstMatch').mockImplementation(() => 't');
        jest.spyOn(StringManipulations.prototype, 'findLastMatch').mockImplementation(() => 'g');

    });

    afterEach(() => {

        jest.clearAllMocks();

    });

    it('should call the String Manipulations constructor', () => {

        strStringManip = 'testing';
        stringManip = new StringManipulations(strStringManip);
        
    });

    it('should call the String Manipulations constructor', () => {

        strStringManip = 't';
        stringManip = new StringManipulations(shortStringManip);
        
    });

})


describe("String Manipulations class", () => {

    test("if returns a first match substring", () => {

        const output = 't';
        const actual = stringManip.findFirstMatch("testing");
        expect(actual).toEqual(output);

    });

    test("if returns a last match substring", () => {

        const output = 'g';
        const actual = stringManip.findFirstMatch("testing");
        expect(actual).toEqual(output);

    });


    test("if returns the substring betwwen two strings", () => {

        const output = 'sti';
        const actual = stringManip.substringBetweenMatches("te", "ng")
        expect(actual).toEqual(output);

    });


    test("if returns first and last two strings", () => {

        const output = 'teng';
        const actual = stringManip.both_ends();
        expect(actual).toEqual(output);

    });

    test("if returns a first and last two strings empty", () => {

        const output = '';
        const actual = stringManip.both_ends()
        expect(actual).toEqual(output);

    });

    test("if returns string changed to *", () => {

        const output = '*abble';
        const actual = stringManip.fix_start("babble");
        expect(actual).toEqual(output);

    });




})