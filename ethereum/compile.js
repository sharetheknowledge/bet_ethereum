const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

// __dirname is our "current working directory"
const buildPath = path.resolve(__dirname, "build");

//This is supposed to remove everything within the build directory
fs.removeSync(buildPath);

// ??Next we define the path to the Bet.sol file

const betPath = path.resolve(__dirname, "contracts", "Bet.sol");

// Next we read in the source code

const source = fs.readFileSync(betPath, "utf8");

//And we compile the file, from which we only pull the contracts property

const output = solc.compile(source, 1).contracts;

// This checks if the directory exists. And if it doesnt exist, this function
// will create it for us

fs.ensureDirSync(buildPath);

// The we re looping over this output object

console.log(output);

//Two properties for the outputJsonSync function:
// the name of the file, and the actual content of the file

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
