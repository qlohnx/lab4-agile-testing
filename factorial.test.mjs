import test from 'node:test';
import assert from 'node:assert/strict';
import { factorial } from './factorial.mjs';

for (const [input, expected] of [[0, 1], [1, 1], [5, 120], [18, 6402373705728000]]) {
  test('factorial(' + input + ')', () => {
    assert.equal(factorial(input), expected);
  });
}

for (const input of [-1, 2.5, 19, '5']) {
  test('reject ' + JSON.stringify(input), () => {
    assert.throws(() => factorial(input), RangeError);
  });
}
