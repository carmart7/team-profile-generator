const Manager = require('./src/Manager');
const Engineer = require('./src/Engineer');
const Intern = require('./src/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const { createDecipheriv } = require('crypto');

// ask user for information on the manager
    // name
    // employee ID
    // email address
    // office number
// ask user if they want to add an engineer, intern, or finish building team.
// If the user selects the engineer option they enter information
    // name
    // employee id
    // email
    // github username
    // ask user if they want to add an engineer, intern, or finish building team.
// If the user selects the Intern option they enter information
    // name
    // employee id
    // email
    // school
    // ask user if they want to add an engineer, intern, or finish building team.
// If the user selects to finish building the team then the html is generated

const managerQuestions = [
    {message: 'Enter manager name!', name: 'name'},
    {message: 'Enter manager employee ID!', name: 'id'},
    {message: 'Enter manager email address!', name: 'email'},
    {message: 'Enter manager office number!', name: 'office'}
];

const engineerQuestions = [
    {message: 'Enter engineer name!', name: 'name'},
    {message: 'Enter engineer employee ID!', name: 'id'},
    {message: 'Enter engineer email address!', name: 'email'},
    {message: 'Enter engineer github username!', name: 'github'}
]

const internQuestions = [
    {message: 'Enter intern name!', name: 'name'},
    {message: 'Enter intern employee ID!', name: 'id'},
    {message: 'Enter intern email address!', name: 'email'},
    {message: 'Enter intern school name!', name: 'school'}
]

const repeatQuestion = [
    {message: 'What would you like to do next?', name: 'choice', type: 'list', choices: [
        {name: 'Add engineer', value: 'engineer'},
        {name: 'Add intern', value: 'intern'},
        {name: 'Finish creating team', value: 'finish'}
    ]}
]

function writeTeamPage(team) {
    let fileText = 'ENTER HTML CARD'; //CREATES HTML DOCUMENT -> use team cards
    fs.writeFile(`teamPage.html`, fileText, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Writing team html page was a success!');
        }
    })
}

function createManagerCard (data) {
    // create card with data

    // return card
}

function createEngineerCard (data) {
    // create card with data

    // return card
}

function createInternCard (data) {
    // create card with data

    // return card
}

async function init() {
    const team = [];
    team.push(createManagerCard(await inquirer.prompt(managerQuestions)));
    var choice = (await inquirer.prompt(repeatQuestion)).choice;
    while (choice != 'finish') {
        if (choice == 'engineer') {
            team.push(createEngineerCard(await inquirer.prompt(engineerQuestions)));
        }
        if (choice == 'intern') {
            team.push(createInternCard(await inquirer.prompt(internQuestions)));
        } 
        choice = (await inquirer.prompt(repeatQuestion)).choice;
    }

    writeTeamPage(team);
}

init();