const args = process.argv.slice(2);
const { showHelp } = require("./messaging");
const { prepareString } = require("./formatting");

if (args.includes("--help")) {
  showHelp();
}

//result = prepareString(args[0]);

prepareString("  THis    iS    A   teST  ");
