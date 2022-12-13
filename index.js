// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
//GIVEN a command-line application that accepts user input

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

const num_employees = 0

const manager_profile =[
  {
  type: "input",
  message: "What the team Manager's name?",
  name: "manager_name",
},
{
type: "input",
message: "What is Manager's Employee ID?",
name: "manager_id",
},
{
type: "input",
message: "What is Manager's Employee ID?",
name: "manager_id",
},
{
  type: "input",
  message: "What is Manager's email address?",
  name: "manager_email",
},
{
  type: "input",
  message: "What is Manager's Employee office number?",
  name: "manager_office",
}
]

const engineer_profile = [
  {
    type: "input",
    message: "What is E's Employee office number?",
    name: "engineer_name",
  },
  {
    type: "input",
    message: "What is E's Employee id?",
    name: "engineer_id",
  },
  {
    type: "input",
    message: "What is E's Employee email address?",
    name: "engineer_email",
  },
  {
    type: "input",
    message: "What is Engineer's Github link?",
    name: "engineer_git",
  },
  {
    type: "list",
    message: "What type of license does this project have?",
    name: "license",
    choices: [
    { name: "MIT", value: "[![PyPI license](https://img.shields.io/pypi/l/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/)"},
    { name: "GitHub", value: "[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)"},
    { name: "Creative Commons", value: "[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)"},
    { name: "Open Source", value: "[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)"},
    { name: "Unlicensed", value: "[![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://unlicense.org/)"},
    ]
  },
  {
    type: "checkbox",
    message: "What technologies were used?",
    name: "tech",
    choices: [
    { name: "Javascript", value: "[![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/)"},
    { name: "Python", value: "[![made-with-python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg)](https://www.python.org/)"},
    { name: "Java", value: "![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white)"},
    { name: "CSS3", value: "![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)"},
    { name: "HTML5", value: "![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)"},
    { name: "Node", value: "[![Minimum node.js version](https://badgen.net/npm/node/express)](https://npmjs.com/package/express)"},
    { name: "Ruby", value: "[![Ruby](https://badgen.net/badge/icon/ruby?icon=ruby&label)](https://https://ruby-lang.org/)"},
    { name: "Swift", value: "![Swift](https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white)"},
    { name: "Go", value: "[![Go](https://img.shields.io/badge/--00ADD8?logo=go&logoColor=ffffff)](https://golang.org/)"}
    // Would like to impliment badges to identify type of application and who should use it
    //{ name: "Frontend", value: "Frontend"},
    //{ name: "Backend", value: "Backend"},
    //{ name: "Fullstack", value: "Fullstack"},
    ]
  },
  {
    type: "input",
    message: "How can people contribute?",
    name: "contribution",
  },
  {
    type: "input",
    message: "Testing intructions",
    name: "test",
  },
  {
    type: "input",
    message: "GitHub username?",
    name: "githubName",
  },
  {
    type: "input",
    message: "Contact emal?",
    name: "email",
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(response => {
    const md = generateMarkdown(response);
    console.log(md);
    writeToFile("README.md", md);
  });
}

// Function call to initialize app
init();
