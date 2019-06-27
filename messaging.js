const { name, version } = require("./package.json");
exports.showHelp = () => {
  // handle input
  // no input to see here
  const helpText = `Thank you for using ${name}`;
  // print output
  console.log(helpText);
};
