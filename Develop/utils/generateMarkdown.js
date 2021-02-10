
function generateMarkdown(data) {

  return `# ${data.title}

[![${data.license}](https://img.shields.io/badge/License-${data.license}-MIT.)](https://opensource.org/licenses/${data.license})
   
GitHub: [${data.userName}] (https://github.com/ffakih5) 
Email: [${data.email}] (https://github.com/ffakih5) 

## Description

${data.description}

[Check it out here!] (${data.deployedPage})


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

## Tests

To run tests you need to run the following command 

## Questions

If you have any questions, please reach out to me.

* Email : ${data.email}

*GitHub : (https://github.com/${data.userName})

`;
}

module.exports = generateMarkdown;
