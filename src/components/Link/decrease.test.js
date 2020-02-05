const decrease = require('./decrease');

test('decrease 2 - 1 to equal 1', () => {
    expect(decrease(2, 1)).toBe(1);
})