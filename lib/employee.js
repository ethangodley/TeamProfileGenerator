const inquirer = require('inquirer'); // imports inquirer 
const generateHTML = require("../src/generateHTML"); // imports generateHTML.js 

// creates Parent class Employee
class Employee {
    // constructor for class Employee requiring a name, ID, and email
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email;
    }
    // method to print details of current Employee
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.ID}`);
        console.log(`Email: ${this.email}`);
    }
    // method to allow user to add an employee calling upon children classes
    addMember() {

        // asks user if they would like to add another member
        inquirer.prompt([
        {
            type: 'list',
            message:'Would you like to add another member?',
            name: 'addMember',
            choices: [
                'Add intern',
                'Add engineer',
                'Finish creating team'
            ]
        },  
        ])
        // uses answer to either create a new employee or finalize team
        .then((answers) => {
            console.log(answers);
            // if user wants to add an intern
            if(answers.addMember == 'Add intern') {
                const Intern = require('./intern'); // import intern class
                const intern = new Intern(); // create new intern
                intern.newIntern(); // call upon newIntern method in intern class
            }
            // if user wants to add an engineer
            else if(answers.addMember == 'Add engineer') {
                const Engineer = require('./engineer'); // import engineer class
                const engineer = new Engineer(); // create new engineer
                engineer.newEngineer() // call upon newEngineer method in engineer class
            }
            // if user wants to finalize current team
            else if(answers.addMember == 'Finish creating team') {
                generateHTML.endingHTML(); // call upon endingHTML function in generateHTML.js
            }
        });
    }
    // returns current employee name
    getName() {
        return this.name;
    }
    // returns current employee ID
    getID() {
        return this.ID;
    }
    //returns current employee email
    getEmail() {
        return this.email
    }
    // returns string 'employee'
    getRole() {
        return "Employee";
    }
}

module.exports = Employee; // exports employee class