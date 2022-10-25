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
    {message: 'Enter manager office number!', name: 'officeNumber'}
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
    let employeeCards = ''
    for (const employee of team) {
        employeeCards += createEmployeeCard(employee);
    }
    let fileText =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/0f88f0a4a7.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Team Project</title>
</head>
<body>
    <h1 class="text-center bg-danger text-white py-5 mb-5">My Team</h1>
    <div class="container">
        <div class="row mx-3 gx-3">
        ${employeeCards}

        </div>
    </div>
</body>
</html>`;
    fs.writeFile(`teamPage.html`, fileText, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Writing team html page was a success!');
        }
    });
}

function createManager (data) {
    // create Manager class object
    return new Manager(data.name, data.id, data.email, data.officeNumber);
    // return object created
}

function createEngineer (data) {
    // create Engineer class object
    return new Engineer(data.name, data.id, data.email, data.github);
    // return object created
}

function createIntern (data) {
    // create Intern class object
    return new Intern(data.name, data.id, data.email, data.school);
    // return object created
}

function createEmployeeCard (employee) {
    let string;
    if(employee.getRole() == 'Manager') {
        string = `<div class="col-md-6 col-lg-4 px-3">
<div class="card mb-3 shadow">
    <div class="card-header bg-primary text-white">
    <h2>${employee.getName()}</h2>
    <h3><i class="fa-solid fa-mug-hot"></i> Manager</h3>
    </div>
    <div class="card-body bg-light py-3">
        <p class="bg-body border p-2 mb-0">ID: ${employee.getId()}</p>
        <p class="bg-body border border-top-0 border-bottom-0 p-2 mb-0">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
        <p class="bg-body border p-2 my-0">Office number: ${employee.officeNumber}</p>
    </div>
</div>
</div>
`
    } else if (employee.getRole() == 'Engineer') {
        string =
`
<div class="col-md-6 col-lg-4 px-3">
    <div class="card mb-3 shadow">
    <div class="card-header bg-primary text-white">
    <h2>${employee.getName()}</h2>
    <h3><i class="fa-solid fa-glasses"></i> Engineer</h3>
    </div>
    <div class="card-body bg-light py-3">
        <p class="bg-body border p-2 mb-0">ID: ${employee.getId()}</p>
        <p class="bg-body border border-top-0 border-bottom-0 p-2 mb-0">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
        <p class="bg-body border p-2 my-0">Github: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></p>
    </div>
</div>
</div>
`

    } else if (employee.getRole() == 'Intern') {
        string =
`
<div class="col-md-6 col-lg-4 px-3">
    <div class="card mb-3 shadow">
    <div class="card-header bg-primary text-white">
    <h2>${employee.getName()}</h2>
    <h3><i class="fa-solid fa-glasses"></i> Engineer</h3>
    </div>
    <div class="card-body bg-light py-3">
        <p class="bg-body border p-2 mb-0">ID: ${employee.getId()}</p>
        <p class="bg-body border border-top-0 border-bottom-0 p-2 mb-0">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
        <p class="bg-body border p-2 my-0">School: ${employee.getSchool()}</p>
    </div>
</div>
</div>
`
    }
    return string;
}

async function init() {
    const team = [];
    team.push(createManager(await inquirer.prompt(managerQuestions)));
    var choice = (await inquirer.prompt(repeatQuestion)).choice;
    while (choice != 'finish') {
        if (choice == 'engineer') {
            team.push(createEngineer(await inquirer.prompt(engineerQuestions)));
        }
        if (choice == 'intern') {
            team.push(createIntern(await inquirer.prompt(internQuestions)));
        } 
        choice = (await inquirer.prompt(repeatQuestion)).choice;
    }

    writeTeamPage(team);
}

init();

