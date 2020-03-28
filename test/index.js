require('../cjs');

console.assert('abc'.item(-1) === 'c');
console.assert('abc'.item(0) === 'a');
console.assert('abc'.item(-4) === void 0);
console.assert('abc'.item(4) === void 0);
