// TODO: Include packages needed for this application
const inquirer = require('inquirer');


//from Homework activity example
inquirer
.prompt(questions[
    {
    type: "input",
    message: "what is your project?",
    name: "title",
    }
]) 
console.log(questions);
// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        message: "what is your project?",
        name: "title",
    },


];
//create the array then call on it instead of listing all the questions in .prompt/ test if both work. 
//title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// here the other functions including questions.response will be input 
function init() {}

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
