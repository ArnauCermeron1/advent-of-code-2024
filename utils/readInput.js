const fs = require('fs');

function readInput(filePath) {
    const input = fs.readFileSync(filePath, 'utf8');
    return input.split('\n').filter(Boolean); // Split into lines and remove empty ones
}

module.exports = readInput;