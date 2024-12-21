const fs = require('fs');

function readInput(filePath) {
    try {
        const input = fs.readFileSync(filePath, 'utf8');
        return input.split('\n').filter(Boolean); // Split by lines and remove empty lines
    } catch (err) {
        console.error(`Error reading file: ${filePath}`, err);
        return [];
    }
}

module.exports = readInput;