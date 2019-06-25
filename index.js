const args = process.argv.slice(2);
const { showHelp } = require("./messaging");

if (args.includes("--help")) {
  showHelp();
}
