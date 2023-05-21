const sumAll = function(start, end) {
  if(!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
    return "ERROR";
  }
  if(end < start) {
    const temp = start;
    start = end;
    end = temp;
  }
  return ((end*(end+1))>>1) - ((start*(start-1))>>1);
};

// Do not edit below this line
module.exports = sumAll;
