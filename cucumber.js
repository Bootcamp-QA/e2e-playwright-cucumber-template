module.exports = {
  default: {
    require: [
      "ts-node/register", // To compile TypeScript files
      "src/steps/**/*.ts",
      "src/support/**/*.ts"
    ],
    format: [
      "progress",
      "json:src/reports/cucumber_report.json"
    ],
    paths: ["src/features/**/*.feature"], // Specify where the feature files are located
    parallel: 2, // Run two parallel instances of Cucumber
    timeout: 10000, // Increase timeout to 60 seconds if needed
    defaultTimeout: 10000
  }
};
