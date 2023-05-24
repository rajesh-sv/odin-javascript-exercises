const findTheOldest = function(arr) {
  const currentYear = new Date().getFullYear();
  return arr.reduce((prev, curr) => {
    const prevPersonAge = ((prev.yearOfDeath)? prev.yearOfDeath: currentYear) - prev.yearOfBirth;
    const currPersonAge = ((curr.yearOfDeath)? curr.yearOfDeath: currentYear) - curr.yearOfBirth;
    return (prevPersonAge > currPersonAge)? prev: curr;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
