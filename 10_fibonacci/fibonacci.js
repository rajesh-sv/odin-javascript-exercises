const fibonacci = function(n) {
  if (n < 0) return "OOPS";
  let a = 0, b = 1, temp;
  for (let i=0; i<n; ++i) {
    temp = a;
    a = b;
    b += temp;
  }
  return a;
};

// Do not edit below this line
module.exports = fibonacci;
