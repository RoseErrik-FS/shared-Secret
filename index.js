// sharedSecret
const fs = require('fs');

const secretsFile = './secrets.json';
const secrets = JSON.parse(fs.readFileSync(secretsFile, 'utf8'));

function getSecretValue(key) {
  return secrets[key];
}

console.log("The secret value from", secretsFile, "is:", getSecretValue('mySecret'));