const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile } = require('./utils/generateMarkdown');
//, copyFile
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const user = userData => {
    if (!userData) {
        userData = [];
    }

    return inquirer.prompt([
        // users name
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        // github account name
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username');
                    return false;
                }
            }
        },
        // email address (for questions)
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                    return false;
                }
            }
        }
    ])};
    const promptProject = portfolioData => {  
        if (!portfolioData.projects) {
            portfolioData.projects = [];
        }
        return inquirer.prompt([   
        // project title
        { 
            type: 'input',
            name: 'title',
            message: 'What is the Title of your Project?  (Required)',
            validate:  titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title');
                    return false;
                }
            }
        },
        // project Description
        {
            type: 'input',
            name: 'description',
            message: 'what is the project about?',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a project description');
                    return false;
                }
            }
        },
             
        //installation
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install the program?',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please provide installation instructions');
                    return false;
                }
            }
        },
        // usage
        {
            type: 'input',
            name: 'usage',
            message: 'What is this program used for?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide usage information');
                    return false;
                }
            }
        },
        // license
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license(s) did you use? (Select all that apply)',
            choices: ['Apache', 'Cloud Native Computing Foundation', 'GNU', 'npm packages', 'OpenBSD', 'Rust', 'WordPress']
        },
        // contributing
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide any contribution instructions',
            validate: contirbutionInput => {
                if (contirbutionInput) {
                    return true;
                } else {
                    console.log('Please provide contribution instructions');
                    return false;
                }
            }
        },
        // tests
        {
            type: 'input',
            name: 'testinstructions',
            message: 'Please enter any test instructions',
            validate: testinstructionsInput => {
                if (testinstructionsInput) {
                    return true;
                } else {
                    console.log('Please provide test instructions');
                    return false;
                }
            }
        },
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
} ;


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app

user()
    .then(promptProject)
    .then(portfolioData => {
       // console.log(portfolioData);
        return generatePage(portfolioData);
    })
    .then(pageReadme => {
        return writeFile(pageReadme);
    })
 