// Part 1
const readInput = require('../utils/readInput');
const lines = readInput('input.txt');

// Convert each line into an array of integers (only once!)
const reportArr = lines.map(line => line.split(' ').map(Number));

let safeReports = 0;
  
// Iterate through each report and check if it is safe
function part1(){
    for (let i = 0; i < reportArr.length; i++) {
        let report = reportArr[i];
        let unsafe = false;
    
        let initialDifference = report[0] - report[1];
        let isAscending = initialDifference < 0;
    
        for (let j = 0; j < report.length - 1; j++) {
            let difference = report[j] - report[j + 1];
    
            if (Math.abs(difference) < 1 || Math.abs(difference) > 3) {
                unsafe = true;
                break;
            }
    
            if ((isAscending && difference > 0) || (!isAscending && difference < 0)) {
                unsafe = true; 
                break;
            }
        }
    
        if (!unsafe) {
           safeReports++;
        }
    }
    return safeReports;
}

let result = part1();
console.log(result);

// Part 2

safeReports = 0;


function checkReport(report){
    let unsafe = false;
    let initialDifference = report[0] - report[1];
    let isAscending = initialDifference < 0;

    for (let j = 0; j < report.length - 1; j++) {
        let difference = report[j] - report[j + 1];

        if (Math.abs(difference) < 1 || Math.abs(difference) > 3) {
            unsafe = true;
            break;
        }

        if ((isAscending && difference > 0) || (!isAscending && difference < 0)) {
            unsafe = true; 
            break;
        }
    }

    return !unsafe;
}

function part2() {
    for (let i = 0; i < reportArr.length; i++) {
        let report = reportArr[i];
        let unsafe = false;

        let initialDifference = report[0] - report[1];
        let isAscending = initialDifference < 0;

        for (let j = 0; j < report.length - 1; j++) {
            let difference = report[j] - report[j + 1];

            if (Math.abs(difference) < 1 || Math.abs(difference) > 3 || 
               (isAscending && difference > 0) || (!isAscending && difference < 0)) {
                unsafe = true;
                break;
            }
        }

        if (!unsafe) {
            safeReports++;
            continue;
        }

        let dampenedSafe = false; 
        for (let j = 0; j < report.length; j++) {
            const modifiedReport = [...report];
            modifiedReport.splice(j, 1); 

            if (checkReport(modifiedReport)) {
                dampenedSafe = true;
                break; 
            }
        }

        if (dampenedSafe) {
            safeReports++;
        }
    }

    return safeReports;
}

result = part2();
console.log(result);



