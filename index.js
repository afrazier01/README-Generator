// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    'What is the name of your project?',
    'What is should your description read?',
    'Are there installation instructions?',
    'What should be included in the usage section?',
    'What are the contribution guidelines?'
];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What iis your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please write a short description of your project',
            name: 'description',
        },
        {
            type: 'checkbox',
            message: 'What kind of license should your project have?',
            name: 'license',
            choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None']
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies? ',
            name: 'dependencies',
            default: 'npm i'
        },
        {
            type: 'input',
            message: 'What command should be run to run tests?',
            name: 'test',
            default: 'npm test'
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'information',
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contribution',
        }
    ])
    .then( (data) => {
        console.log(data)
        const fileName = `${data.title}`

        function writeToFile(fileName, data) {}
    }
    )
    .catch((err) => {console.log(err)});
// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
