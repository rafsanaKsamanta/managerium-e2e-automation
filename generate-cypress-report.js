const fs = require('fs');
const path = require('path');

// Path to your Mochawesome JSON file
const inputPath = path.join(__dirname, 'cypress/reports/mochawesome/.jsons/mochawesome.json');
const outputPath = path.join(__dirname, 'cypress/reports/cypress-report.csv');

const rawData = fs.readFileSync(inputPath);
const json = JSON.parse(rawData);

let rows = [];
rows.push(['Test Suite', 'Test Case', 'Status', 'Duration (ms)', 'Speed', 'Code']);

json.results.forEach(result => {
  result.suites.forEach(suite => {
    const suiteTitle = suite.title;
    suite.tests.forEach(test => {
      const status = test.state === 'passed' ? '✅ Passed' : '❌ Failed';
      const duration = test.duration || 0;
      const speed = test.speed || 'N/A';
      const code = test.code ? test.code.split('\n')[0].trim() : '';
      rows.push([
        suiteTitle,
        test.title,
        status,
        duration,
        speed,
        `"${code}"`
      ]);
    });
  });
});

// Convert to CSV string
const csv = rows.map(r => r.join(',')).join('\n');

// Write to file
fs.writeFileSync(outputPath, csv);
console.log(`✅ Cypress CSV report generated at: ${outputPath}`);


// for generating csv file run this in terminal 
// node generate-cypress-report.js
// before this delete the previous report and again generate report and run this command