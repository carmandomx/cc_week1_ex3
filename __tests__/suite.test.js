const { youShallNotPass } = require('../exercise');

test('Testing the youShallNotPass exercise', () => { 
    expect(youShallNotPass([])).toBeDefined();
    expect(youShallNotPass([false, null, "", 0])).toEqual([]);
    expect(youShallNotPass(['hello world!', NaN, undefined, 1, 2])).toEqual(['hello world!', 1, 2])
    expect(youShallNotPass([10, false, "", "pass"])).toEqual([10, 'pass'])
 })