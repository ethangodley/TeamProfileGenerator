const generateHTML = require("../src/generateHTML"); // imports generateHTML.js
const Employee = require('./employee'); // Imports class Employee from employee.js
const inquirer = require('inquirer'); // imports inquirer
const employee = new Employee(); // creates new employee 

// Creates engineer child class extending on employee parent class 
class Engineer extends Employee {
    // creates constructor for engineer requring name, id, email for parent employee and github for engineer
    constructor(name, ID, email, github) {
        super(name, ID, email); // sets constructor for current employee
        this.github = github; // sets github for current engineer
    }
    // allows a user to create a new engineer from input
    newEngineer() {
        inquirer
            // asks user to provide details of new engineer
            .prompt([
                {
                    type: 'input',
                    message:'Please enter engineers name',
                    name: 'engineerName'
                },
                {
                    type: 'input',
                    message:'Please enter engineers ID',
                    name: 'engineerID'
                },   
                {
                    type: 'input',
                    message:'Please enter engineers email',
                    name: 'engineerEmail'
                },  
                {
                    type: 'input',
                    message:'Please enter engineers github',
                    name: 'engineerGithub'
                }
            ])
            // creates new engineer using details provided by user. 
            .then((answers) => {
                const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
                engineer.validate(engineer); // calls upon validate method in engineer class
        });
    }
    // returns current engineers github
    getGithub() {
        return this.github;
    }
    // returns string 'engineer' 
    getRole() {
        return "Engineer";
    }
    // validates user input to ensure data is entered and in correct format. 
    validate(engineer) {
        // creates variables with values of current engineers details
        const valName = engineer.getName();
        const valEmail = engineer.getEmail();
        const valID = engineer.getID();
        const valGithub = engineer.getGithub();

        // if no name entered, advise user and get engineer details again
        if(valName.length == 0) {
            console.log("Invalid name");
            engineer.newEngineer(); // calls upon method newEngineer from engineer class
        }
        // if no email entered or email does not contain an '@' symbol, advise user and get engineer details again
        else if(valEmail.length == 0 || !valEmail.includes("@")) {
            console.log("incorrect email format");
            engineer.newEngineer(); // calls upon method newEngineer from engineer class
        }
        // if no id entered, advise user and get engineer details again
        else if(valID.length == 0) {
            console.log("invalid ID");
            engineer.newEngineer(); // calls upon method newEngineer from engineer class
        }
        // if no github entered, advise user and get engineer details again
        else if(valGithub.length == 0) {
            console.log("invalid github username");
            engineer.newEngineer(); // calls upon method newEngineer from engineer class
        }
        // if all data is valid, print engineer details to user, send to export method and return to addMember
        // method from employee class 
        else{ 
            engineer.printInfo();
            console.log(`Github: ${valGithub}`);
            engineer.export(engineer); // calls upon export method from engineer class
            employee.addMember() // calls upon addMember method from employee class 
        }
    }
    // exports current engineer data to generateHTML.js
    export(engineer) {
        // creates variables for export from current engineer 
        const exName = engineer.getName();
        const exRole = engineer.getRole();
        const exEmail = engineer.getEmail();
        const exID = engineer.getID();
        const exGithub = "https://github.com/" + engineer.getGithub(); // creates github link

        // exports current engineer details to addCaardHTML function from generateHTML
        generateHTML.addCardHTML(exRole, exName, exEmail, exID, exGithub);
    }
}

// exports engineer class 
module.exports = Engineer;
