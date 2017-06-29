var FileIO = require("./FileIO");
var commander = require("commander");

commander
  .version("0.1.0")
  .option("-f, --file <path>", "Path file to upload")
  .option("-e, --expires [time]", "Time to file expired")
  .parse(process.argv);

if (typeof commander.file === "undefined") {
  console.error("No file specify. Please run --help for more information");
  process.exit(1);
}

FileIO.upload(commander.file, commander.expires);
