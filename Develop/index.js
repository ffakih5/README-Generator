// npm init -y. (install the)
// npm i inquirer --save. commands to make all work and 
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

console.log(questions);
// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        message: "what is your project?",
        name: "title",
    },
    {   type: "input",
        message: "provide a desription for your project",
        name: "description",
        
    },
    {   type: "input",
        message: "",
        name: "table of contents ",

    },
    {   type: "input",
        message: "",
        name: "installation",

    },
    {
        type: "input",
        message: "",
        name: "usage",

    },
    {
        type: "input",
        message: "",
        name: "license",

    },
    {
        type: "input",
        message: "",
        name: "contributing",

    },
    {
        type: "input",
        message: "",
        name: "tests",

    },
    {
        type: "input",
        message: "",
        name: "questions",

    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
    );

}

//from Homework activity example
// TODO: Create a function to initialize app
// here the other functions including questions.response will be input 
function init() {
    inquirer
    .prompt(questions[
    {
    type: "input",
    message: "what is your project?",
    name: "title",
    }
]) 
}

//
async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall(); 

  //async call is function init();
  

// Function call to initialize app
//this goes last; makes everything on the page run
init();
