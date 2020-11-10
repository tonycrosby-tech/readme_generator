const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of your Project?",
  },
  {
    type: "input",
    name: "Description",
    message: "Introduction for your project",
  },
  {
    type: "input",
    name: "Installations",
    message: "What installations are needed for your project",
  },
  {
    type: "input",
    name: "Usage",
    message: "What is your project going to be used for?",
  },
  {
    type: "checkbox",
    name: "License",
    message: "What License is needed:",
    choices: ["MIT", "APACHE 2.0", "MPL 2.0", "LGPL 3.0", "None"],
  },
  {
    type: "input",
    name: "Test",
    message: "What command should be run for tests:",
  },
  {
    type: "input",
    name: "Credits",
    message: "Who were the collaborators:",
  },
  {
    type: "input",
    name: "Contributing",
    message: "How can others contribute:",
  },
];

inquirer.prompt(questions).then(function (data) {
  writeToFile("README.md", data);
});

function writeToFile(filename, data) {
  try {
    const response = JSON.stringify(data);
    const markdown = generateMarkdown(response);
    fs.writeFileSync(filename, markdown, function () {
      console.log("success!");
    });
  } catch (err) {
    console.error(err);
  }
}

function init() {}

init();
