import * as fs from 'fs';
import * as path from 'path';
import * as report from 'cucumber-html-reporter';

// Define options for the report
const options: report.Options = {
  theme: 'bootstrap', // Ensure this matches one of the valid theme values
  jsonFile: path.join(__dirname, '../reports/cucumber_report.json'),
  output: path.join(__dirname, '../reports/cucumber_report.html'),
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true
};

// Ensure jsonFile is defined before checking its existence
if (options.jsonFile) {
  if (fs.existsSync(options.jsonFile)) {
    // Generate the report if the JSON file is available
    report.generate(options);
    console.log('HTML report generated successfully!');
  } else {
    console.error(`JSON report file not found at ${options.jsonFile}`);
  }
} else {
  console.error('JSON file path is not defined in options');
}



