const removeFromArray = function(array, ...removeItems) {
  const remove = new Set([...removeItems]);
  return array.filter((item) => !remove.has(item));
};

// Do not edit below this line
module.exports = removeFromArray;
