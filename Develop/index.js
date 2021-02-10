// npm init -y. (install the)
// npm i inquirer --save. commands to make all work and 
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');
const generateMarkdown = require('./utils/generateMarkdown.js');
//const const util = require('util');
//create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {   
        type: "input",
        message: "Key in GitHub username",
        name: "userName",

    },
    {   type: "input",
        message: "Key in Email address",
        name: "Email",

    },

    {
        type: "input",
        message: "Key in project title",
        name: "title",
    },
    {   type: "input",
        message: "Key in a desription of your project",
        name: "description",
        
    },
    {   type: "input",
        message: "Link to deployed page",
        name: "deployedPage",

    }
    {   type: "input",
        message: "Key in a list for table of contents",
        name: "table of contents ",

    },
    {   type: "input",
        message: "Key in information on installation of this application",
        name: "installation",

    },
    {
        type: "input",
        message: "Key in information for application usage",
        name: "usage",

    },
    {
        type: "checkbox",
        message: "Key in a selection from the list of licenses",
        choices:[
            "MIT",
            "Apache",
            "BSD",
            "ISC",
            "NONE",

        ],
        name: "license",

    },
    {
        type: "input",
        message: "Key in any contributors",
        name: "contributing",

    },
    {
        type: "input",
        message: "command to run tests",
        name: "tests",
        default: "npm test"

    },
  
   

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, (data), (err) =>
        err ? console.log(err) : console.log("README is Here!")

    )

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) =>{
        writeToFile("README-GENERATOR", generateMarkdown(data));
    });


  }
  
    //asyncCall(); 
    //async call is function init();
    //nOT USING THIS RIGHT NOW
    // async function asyncCall() {
    //console.log('calling');
    //const result = await resolveAfter2Seconds();
    //console.log(result);
    // expected output: "resolved"

// Function call to initialise the program  
init();

