// TODO: Include packages needed for this application
const {questions} = require('./questions')
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
function askQuestions() {
    inquirer.prompt(questions).then((data) => {
        console.log(data)

        const {github, email, title, description, license, dependencies, test, information, contribution} = data
        console.log('contribution >>'+contribution)
        console.log('title >>'+title)
        // fs.appendFile()
        //appendFile
    }).catch((err) => console.log(err));
} 
// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
askQuestions();
