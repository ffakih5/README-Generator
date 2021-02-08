// npm init -y. (install the)
// npm i inquirer --save. commands to make all work and 
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = //markdownfilepath


//from Homework activity example
inquirer
.prompt(questions[
    {
    type: "input",
    message: "what is your project?",
    name: "title",
    }
]) 
//response
.then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
  //writing file; need const= writeFile()
  fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
  err ? console.log(err) : console.log('Success!')
);

console.log(questions);
// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        message: "what is your project?",
        name: "title",
    },
    {   type: "input",
        message: "provide a desription for your project ",
        name: "title",
        
    }




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
