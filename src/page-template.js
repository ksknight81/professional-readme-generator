// project title
    // uses titleInput
const generateTitle = portfolioData => {
    let { title } = portfolioData.projects;
    // if (!titleInput) {
    //     return '';
    // }
    return `
        Application Title:
        ${title}
    `
};

// Description
    // uses descriptionInput
const generateDescription = descriptionInput => {
    if (!descriptionInput) {
        return '';
    }
    return `
        <section id="description">
        Application Description:
        ${descriptionInput}
    `;
};

// table of contents

// Installation
    // uses installationInput
    const generateInstallation = installationInput => {
        if (!installationInput) {
            return '';
        }
        return `
            <section id="installation">
            How to install the application:
            ${installationInput}
        `;
    };
    
// Usage
    // uses usageInput
    const generateUsage = usageInput => {
        if (!usageInput) {
            return '';
        }
        return `
            <section id="usage">
            How to use the application:
            ${usageInput}
        `;
    };
    
// license
    // uses licenseInput
    const generateLicense = licenseInput => {
        if (!licenseInput) {
            return '';
        }
        return `
            <section id="license">
            License:
            ${licenseInput}
        `;
    };
    
// Contributing
    // uses contributionInput
    const generateContribution = contributionInput => {
        if (!contributionInput) {
            return '';
        }
        return `
            <section id="contribution">
            Contribution Input:
            ${contributionInput}
        `;
    };
    
// tests
    // uses testInput
    const generateTest = testinstructionsInput => {
        if (!testinstructionsInput) {
            return '';
        }
        return `
            <section id="testinstructions">
            Test Instructions:
            ${testinstructionsInput}
        `;
    };
    
// questions
    // uses nameInput, emailInput, githubInput username
const generateQuestions = userData => {
    let {name, github, email} = userData;
    return `
        Questions?
        If you have any additional questions regarding this project, please feel free to reach out to ${name} at ${email} 
        or alternatively, check out my github account at https://github.com/${github}
`}

 module.exports = generateQuestions
//module.exports =  generateTitle
