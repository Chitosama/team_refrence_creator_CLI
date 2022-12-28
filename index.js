// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const fs = require("fs");

const manager= []
var ep = [];
var ip = [];

var going;

const complete = [
  employee = [
    e_name = "",
    e_id = "",
    e_email = "",
    e_extra = ""
  ]
]

const manager_profile = [
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
    message: "What is Manager's email address?",
    name: "manager_email",
  },
  {
    type: "input",
    message: "What is Manager's Employee office number?",
    name: "manager_office",
  }
]

const create_profile = [
  {
    type: "list",
    message: "Add More?",
    name: "continue",
    choices: [
      { name: "Engineer", value: "engineer" },
      { name: "Intern", value: "intern" },
      { name: "Done", value: "done" }
    ]
  }
]

const engineer_profile = [
  {
    type: "input",
    message: "What is the Engineer's name?",
    name: "engineer_name",
  },
  {
    type: "input",
    message: "What is Engineer's id?",
    name: "engineer_id",
  },
  {
    type: "input",
    message: "What is Engineer's email address?",
    name: "engineer_email",
  },
  {
    type: "input",
    message: "What is Engineer's Github link?",
    name: "engineer_git",
  }
];

const intern_profile = [
  {
    type: "input",
    message: "What Intern's name?",
    name: "intern_name",
  },
  {
    type: "input",
    message: "What is Intern's id?",
    name: "intern_id",
  },
  {
    type: "input",
    message: "What is Intern's email address?",
    name: "intern_email",
  },
  {
    type: "input",
    message: "What is Intern's school?",
    name: "intern_school",
  }
];
// Playing around function
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// function to choose eployee, intern or done
function choices(){
      
  inquirer.prompt(create_profile).then(res => {
    hereNow = res.continue;
    // console.log(hereNow,"this is done right")
    optionSelect(hereNow);
  })}

function optionSelect(hereNow){

    if (hereNow == 'engineer'){
      inquirer.prompt(engineer_profile).then(res => {
        ep.push(res)
        //console.log(ep)
        choices()
    })
  }

    if (hereNow == 'intern'){
      inquirer.prompt(intern_profile).then(res => {
        ip.push(res);
        //console.log(ip)
        choices()
    })
  }

    if (hereNow == 'done'){
      console.log(manager, ep, ip)
      const md = generateMarkdown(manager, ep, ip);
      writeToFile("index.html", md);
    }
  };


// Create a function to initialize app
function init() {
  inquirer.prompt(manager_profile).then(res => {
    manager.push(res);
    console.log(manager)
    choices();

  });
}

// Function call to initialize app
init();
