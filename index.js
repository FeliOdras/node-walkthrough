const args = process.argv.slice(2);
const { showHelp } = require("./messaging");
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
      return console.log(data["unixtime"]);
    case "--currentWeek":
      return console.log(data["week_number"]);
    case "--dayOfTheYear":
      return console.log(data["day_of_year"]);
    default:
      return console.log(data["utc_datetime"]);
  }
  process.exit();
});
