const fs = require('fs');
const fastcsv = require('fast-csv');

const outputFilePath = 'output.csv';
const ws = fs.createWriteStream(outputFilePath);

const data = [
    ['Name','Age', 'Occupation'],
    ['Eshan', 28, 'Engineer'],

    ['Tanish', 32, 'Doctor'],
    ['Anand', 45, 'Teacher']
];
    


fastcsv
    .write(data, { headers: true, quoteColumns: true }) // fixed extra } and quoteColumns
    .pipe(ws)
    .on('finish', () => {
        console.log(`Data written to ${outputFilePath} as a CSV.`);
    });
