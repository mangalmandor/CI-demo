import sum from './sum.js'


describe(
    "test for sum function", () => {
        test("adds 2 + 2 to equal 4", () => {
            expect(sum(2, 2)).toBe(4);
        });

        test("adds -10 + 2 to equal -8", () => {
            expect(sum(-10, 2)).toBe(-8);
        });

    }
)