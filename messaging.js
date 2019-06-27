const { name, version } = require("./package.json");
exports.showHelp = () => {
  // handle input
  // no input to see here
  const helpText = `
  Thank you for using ${name} 
  Version: ${version}\n
  You need to provide at least two arguments.\n
  area: Continent/Region (always has to be the first argument)
  city: City you request current time for (always has to be the second argument)\n
  NOTE: in case the area or the city contains more then one word you will have to wrap the argument in 
  quotation marks to define them as a single string. 
  For example: [Asia Kuala Lumpur] has to be [Asia "Kuala Lumpur".]\n
  Possible arguments:
  --help: Display help text (the one you are reading now)
  --option: display a list of valid area and city names
  <area> <city>: display current utc timestamp of selected location
  <area> <city> --unix: display current unix timestamp of selected location
  <area> <city> --currentWeek: display current week of selected location
  <area> <city> --dayOfTheYear: display current day of the year of selected location`;
  // print output
  console.log(helpText);
};
