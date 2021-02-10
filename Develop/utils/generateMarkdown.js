// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

GitHub: [${data.userName}] (https://github.com/ffakih5) 
Email: [${data.Email}] (https://github.com/ffakih5) 

## Description

${data.Description}

## Table of Contents

* [Installation](#installaion)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation 

Dependencies must be installed to run the application: ${data.installation}

## Usage

This application is used for: ${data.usage}

## License

This application is under the: ${data.license} license

## Contribution

Contributors: ${data.contributing}

#Tests

To run tests you need to run the following command 

#Questions


`;
}

module.exports = generateMarkdown;
