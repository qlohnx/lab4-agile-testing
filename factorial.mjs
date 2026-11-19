export function factorial(n) {
  if (!Number.isInteger(n) || n < 0 || n > 18) {
    throw new RangeError('Expected an integer from 0 to 18');
  }
  let product = 1;
  for (let i = 2; i <= n; i++) {
    product *= i;
  }
  return product;
}
