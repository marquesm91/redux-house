var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var packageJson = require('../../package.json');

function bump(version) {
  var [major, minor, patch] = packageJson.version
    .split('.')
    .map(string => parseInt(string, 10));

  if (version === 'major') {
    return `${major + 1}.0.0`;
  }

  if (version === 'minor') {
    return `${major}.${minor + 1}.0`;
  }

  return `${major}.${minor}.${patch + 1}`;
}

const version = bump(process.argv[2] || 'patch');

var newPackageJson = Object.assign(packageJson, { version });

fs.writeFile(
  path.resolve(__dirname, '..', '..', 'package.json'),
  JSON.stringify(newPackageJson, null, 2),
  'utf8',
  function(err) {
    if (err) throw err;
    console.log(`Success bump module to ${chalk.hex('#FF4A00').bold(version)}`);
  }
);
