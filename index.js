const args = process.argv.slice(2);
const { showHelp } = require("./messaging");
const { prepareString } = require("./formatting");
const { getTimeData } = require("./lib/client");

if (args.includes("--help")) {
  showHelp();
}

if (args.includes("--option")) {
  getTimeData()
    .then(data => {
      return data.reduce((acc, curr) => {
        const [area, city] = curr.split("/");
        acc.push({ area, city });
        return acc;
      }, []);
    })
    .then(data => {
      data.forEach(entry => {
        console.log(entry);
      });
      process.exit();
    });
}

getTimeData(args[0], args[1]).then(data => {
  switch (args[2]) {
    case "--unix":
      return console.log(
        `Current unix timestamp for ${prepareString(args[1])}/${prepareString(
          args[0]
        )} is ${data["unixtime"]}`
      );
    case "--currentWeek":
      return console.log(
        `It is week ${data["week_number"]} in ${prepareString(
          args[1]
        )}/${prepareString(args[0])}.`
      );
    case "--dayOfTheYear":
      return console.log(
        `It is day ${data["day_of_year"]} of the year in ${prepareString(
          args[1]
        )}/${prepareString(args[0])}.`
      );
    default:
      return console.log(
        `It is ${data["utc_datetime"]} in ${prepareString(
          args[1]
        )}/${prepareString(args[0])}.`
      );
  }
  process.exit();
});
