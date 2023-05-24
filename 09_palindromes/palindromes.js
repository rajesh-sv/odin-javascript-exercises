const palindromes = function (str) {
  str = str.toLowerCase();
  let i = 0, j = str.length - 1;
  while (i < j) {
    if (isLetter(str[i]) && isLetter(str[j])) {
      if (str[i] !== str[j])
        return false;
      ++i;
      --j;
    }
    if(!isLetter(str[i])) ++i;
    if(!isLetter(str[j])) --j;
  }
  return true;
};

function isLetter(c) {
  return c >= 'a' && c <= 'z';
}

// Do not edit below this line
module.exports = palindromes;
