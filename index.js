// TODO: Include packages needed for this application
const {questions} = require('./questions')
const inquirer = require('inquirer')
const fs = require('fs')
const {generateMarkdown, renderLicenseSection} = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
function askQuestions() {
    inquirer.prompt(questions).then((data) => {
        const {github, email, title, description, license, dependencies, test, information, contribution} = data
        
        //generate license
        const {licenseIMG, licenseLink} = renderLicenseSection(license)

        //generate README
        const README = generateMarkdown(
            github, 
            email, 
            title, 
            description, 
            license, 
            dependencies, 
            test, 
            information, 
            contribution,
            licenseIMG,
            licenseLink
        );
        
        fs.writeFile('README.md', README, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('\n'+`Your README.md was created successfully.`+'\n'+'Take a look!')})
    }).catch((err) => console.log(err));
} 

askQuestions();
