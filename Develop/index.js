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
        message: "What is your project?",
        name: "title",
    },
    {   type: "input",
        message: "Please provide a desription for your project",
        name: "description",
        
    },
    {   type: "input",
        message: "Please provide a list for table of contents",
        name: "table of contents ",

    },
    {   type: "input",
        message: "Please provide information on installation of this application",
        name: "installation",

    },
    {
        type: "input",
        message: "Please provide information for application usage",
        name: "usage",

    },
    {
        type: "checkbox",
        message: "Please from the list of licenses",
        choices:[
            "MIT",
            "Apache",
            "BSD",
            "ISC",

        ],
        name: "license",

    },
    {
        type: "input",
        message: "Please provide information on any contributors",
        name: "contributing",

    },
    {
        type: "input",
        message: "Please provide the required tests",
        name: "tests",

    },
    {
        type: "input",
        message: "Please feel free to create an issue should you have any questions or contact me via Github",
        name: "questions",

    },
    {   
        type: "input",
        message: "What is your GitHub username?",
        name: "userName",

    },
    {   type: "input",
        message: "What is your email address?",
        name: "Email",

    }

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

