const convertToCelsius = function(fahrenheit) {
  // return Number(((fahrenheit-32)*5/9).toFixed(1));
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  // return Number((celsius*9/5+32).toFixed(1));
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
