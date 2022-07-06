// project title
    // uses titleInput
const generateTitle = titleInput => {
    if (!titleInput) {
        return '';
    }
    return `
        <section id="title">
        <h2>${titleInput}</h2>
    `;
};
// Description
    // uses descriptionInput

// table of contents

// Installation
    // uses installationInput

// Usage
    // uses usageInput

// license
    // uses licenseInput

// Contributing
    // uses contributionInput

// tests
    // uses testInput

// questions
    // uses nameInput, emailInput, githubInput username
const generateQuestions = userData => {
    return `
    <section id="questions">
    ${userData
        .map(({name, github, email}) =>  {
            return `
            <h2>Questions?</h2>
            <h4>If you have any additional questions regarding this project, please feel free to reach out to ${name} at ${email} or alternatively, check out my github account at <a href="https://github.com/${github}"</h4>
            
            `;
        })
            
}
`}