function exponent(base, power) {
  if (power === 0) return 1;
  return base * exponent(base, power - 1);
}
console.log(exponent(2, 3));
