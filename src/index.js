module.exports = function check(str, bracketsConfig) {
  let result = false;
  let curLength = str.length;
  while (true) {
    for (let i = 0; i < bC.length; i++) {
      str = str.replace(bC[i].join(''), '');
    }
    if (str.length === 0) {
      result = true;
      break;
    }
    if (str.length === curLength) break; 
    curLength = str.length;
  }
  return result;
}
