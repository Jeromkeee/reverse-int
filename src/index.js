module.exports = function reverse (n) {
  let i = 0;
  let result = '';
  let str_n = String(Math.abs(n));
  while (i < str_n.length) {
    result = `${str_n.charAt(i)}${result}`;
    i = i + 1;
  }
  return result
}
