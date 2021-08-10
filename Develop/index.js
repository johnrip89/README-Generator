// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project name! (Required)');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use.'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please provide all contributors to your project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide testing information for your application'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license',
            choices: ['mit', 'gpl-3.0', 'mpl-2.0', 'apache-2.0']
        }
    ])       
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf8', function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Your README has been successfully created!");

    });
};

// TODO: Create a function to initialize app
function init() {
    questions();
    generateMarkdown(data);
    writeToFile('README.md', generateMarkdown(data));        
};

// Function call to initialize app
init();
