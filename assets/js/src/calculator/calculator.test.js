const calculator  = require("./calculator");

test("Calculator test",() => {
    expect(calculator(5,5,'+')).toBe(10);
});