const fs = require('fs');

// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

function main() {
  let source = fs.readFileSync(__dirname + '/package.json').toString('utf-8');
  source = JSON.parse(source);
  const sourceObj = {};
  sourceObj.name = source.name;
  sourceObj.version = source.version;
  sourceObj.description = source.description;
  sourceObj.keywords = source.keywords;
  sourceObj.author = source.author;
  sourceObj.license = source.license;
  sourceObj.main = 'main.js';

  fs.writeFileSync(
    __dirname + '/dist/package.json',
    Buffer.from(JSON.stringify(sourceObj, null, 2), 'utf-8')
  );
  fs.cp(__dirname + '/README.md', __dirname + '/dist/README.md', (err) => {
    if (err) {
      console.log(err);
    }
  });
}

main();
