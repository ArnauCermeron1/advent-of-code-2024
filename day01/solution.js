// Part 1
const readInput = require('../utils/readInput');
const lines = readInput('input.txt');

// Split the input into two arrays
const first = lines.map(lines=>parseInt(lines.split(/\s+/)[0], 10));
const second = lines.map(lines=>parseInt(lines.split(/\s+/)[1], 10));
let sum = 0;

// Order the list
first.sort((a,b)=>a-b);
second.sort((a,b)=>a-b);

// Iterate through the list and calculate the final distance
for(let i = 0; i < first.length; i++){
    let num1 = first[i];
    let num2 = second[i];
    let difference = Math.abs(num1-num2);
    sum += difference;
}

console.log(sum);

// Part 2

let similarity = 0;
let count = 0;

// Iterate through the list and calculate the similarity
for (let j = 0; j < first.length; j++){
    let key = first[j];
    for (let k = 0; k < second.length; k++){
        if (key === second[k]){
            count++;
        }
    }
    similarity = similarity + (count * key);
    count = 0;
}

console.log(similarity);




