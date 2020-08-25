var inquirer=require("inquirer");
var fs=require("fs");
const path=require("path")

const generateMarkdown=require("./utils/generateMarkdown")

var questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your Project Title?",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "Provide detail description",
        name: "description"
    },
    {
        type: "input",
        message: "What are your table of contents?",
        name: "tableOfContents"
    },
    {
        type: "input",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        name: "installationProcess"
    },
    {
        type: "input",
        message: "Provide instructions for use.",
        name: "instruction"
    },
    {
        type: "input",
        message: "Provide instructions examples for use.",
        name: "instructionExample"
    },
    {
        type: "list",
        message: "provide License name ",
        name: "licenseName",
        choices:["MIT","Apache","GPL"]
    },
    {
        type: "input",
        message: "provide License url ",
        name: "licenseUrl"
    },
    {
        type: "input",
        message: "please enter git hub user names of the contributor if any (If there are mulitple contributor, seperate names with comma and no space! )",
        name: "contributorsGitUserName"
    },
    {
        type: "input",
        message: "Provide examples on how to run tests.",
        name: "tests"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(answers) {
        writeToFile("README.md", generateMarkdown({...answers}))
    })
}

// function call to initialize program
init();
