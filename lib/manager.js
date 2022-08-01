const generateHTML = require("../src/generateHTML"); // imports generateHTML.js
const inquirer = require('inquirer'); // imports inquirer
const fs = require('fs'); // imports fs
const Employee = require('./employee'); // imports class employee
const employee = new Employee(); // creates new employee

// creates child class manager extending parent class employee
class Manager extends Employee {
    // creates constructor for manager requring name, id, email for parent employee and office number for manager
    constructor(name, ID, email, office) {
        super(name, ID, email);
        this.office = office;
    }
    // creates new manager from user input 
    newManager() {
        // asks user for details of new manager
        inquirer.prompt([
            {
                type: 'input',
                message:'Please enter managers name',
                name: 'managerName'
            },
            {
                type: 'input',
                message:'Please enter managers ID',
                name: 'managerID'
            },   
            {
                type: 'input',
                message:'Please enter managers email',
                name: 'managerEmail'
            },  
            {
                type: 'input',
                message:'Please enter managers office number',
                name: 'managerOffice'
            }
        ])
        // creates new manager using details provided by user and validates data
        .then((answers) => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice);
            manager.validate(manager); 
        });
    }
    // returns current managers office number
    getOffice() {
        return this.office;
    }
    // returns string manager
    getRole () {
        return "Manager";
    }
     // validates user input to ensure data is entered and in correct format. 
    validate(manager) {
        // creates variables for validation from current managers components
        const valName = manager.getName();
        const valEmail = manager.getEmail();
        const valID = manager.getID();
        const valOffice = manager.getOffice();

        // if no name entered, advise user and get manager details again
        if(valName.length == 0) {
            console.log("Invalid name");
            manager.newManager(); // calls upon newManager method from intern class
        }
        // if no email entered or email does not contain an '@' symbol, advise user and get manager details again
        else if(valEmail.length == 0 || !valEmail.includes("@")) {
            console.log("incorrect email format");
            manager.newManager(); // calls upon newManager method from intern class
        }
        // if no id entered, advise user and get manager details again
        else if(valID.length == 0) {
            console.log("invalid ID");
            manager.newManager(); // calls upon newManager method from intern class
        }
        // if no office entered, advise user and get manager details again
        else if(valOffice.length == 0) {
            console.log("invalid office number");
            manager.newManager(); // calls upon newManager method from intern class
        }
        else{ 
            manager.printInfo(); // calls upon printInfo method from employee class
            console.log(`Office number: ${valOffice}`);
            manager.export(manager); // calls upon export method from manager class
            employee.addMember(); // calls upon addMember method from employee class
        }
    }
     // exports current manager data to generateHTML.js
    export(manager) {
        // creates variables for exporting manager values to generateHTML.js
        const exName = manager.getName();
        const exRole = manager.getRole();
        const exEmail = manager.getEmail();
        const exID = manager.getID();
        const exOffice = "Office number: " + manager.getOffice();

        // calls upon addCardHTML function from generateHTML.js
        generateHTML.addCardHTML(exRole, exName, exEmail, exID, exOffice);
    }
}
module.exports = Manager; // exports manager class