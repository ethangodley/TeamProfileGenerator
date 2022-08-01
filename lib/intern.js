const inquirer = require('inquirer'); // imports inquirer
const generateHTML = require("../src/generateHTML"); // imports generateHTML.js 
const Employee = require('./employee'); // imports class engineer from employee.js
const employee = new Employee(); // creates new employee

 // creates child class intern from parent class employee
class Intern extends Employee {
    // creates constructor for intern requring name, id, email for parent employee and school for intern
    constructor(name, ID, email, school) {
        super(name, ID, email); // sets constructor for current employee
        this.school = school; // sets constructor for current intern
    }
    // creates new intern from user input
    newIntern() {
        inquirer
            // asks user for details of new intern 
            .prompt([
                {
                    type: 'input',
                    message:'Please enter interns name',
                    name: 'internName'
                },
                {
                    type: 'input',
                    message:'Please enter interns ID',
                    name: 'internID'
                },   
                {
                    type: 'input',
                    message:'Please enter interns email',
                    name: 'internEmail'
                },  
                {
                    type: 'input',
                    message:'Please enter interns school',
                    name: 'internSchool'
                }
            ])
            // creates new intern using details provided by user and validates data
            .then((answers) => {
    
                const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
                intern.validate(intern); // calls upon validate method from intern class
        });
    }
    // returns current interns school
    getSchool() {
       return this.school; 
    }
    // returns string intern
    getRole () {
        return "Intern";
    }
    // validates user input to ensure data is entered and in correct format. 
    validate(intern) {
        // creates variables for validation from current interns components
        const valName = intern.getName();
        const valEmail = intern.getEmail();
        const valID = intern.getID();
        const valSchool = intern.getSchool();

        // if no name entered, advise user and get engineer details again
        if(valName.length == 0) {
            console.log("Invalid name");
            intern.newIntern(); // calls upon newIntern method from intern class
        }
        // if no email entered or email does not contain an '@' symbol, advise user and get intern details again
        else if(valEmail.length == 0 || !valEmail.includes("@")) {
            console.log("incorrect email format");
            intern.newIntern(); // calls upon newIntern method from intern class
        }
        // if no id entered, advise user and get intern details again
        else if(valID.length == 0) {
            console.log("invalid ID");
            intern.newIntern(); // calls upon newIntern method from intern class
        }
        // if no school entered, advise user and get intern details again
        else if(valSchool.length == 0) {
            console.log("invalid school");
            intern.newIntern(); // calls upon newIntern method from intern class
        }
        // if all data is valid, print intern details to user, send to export method and return to addMember
        // method from employee class 
        else{ 
            intern.printInfo(); // calls upon printInfo method from intern class
            console.log(`School: ${valSchool}`);
            intern.export(intern); // calls upon export method from intern class 
            employee.addMember(); // calls upon addMember method from employee class
        }
    }
    // exports current intern data to generateHTML.js
    export(intern) {
        // creates variables for exporting intern values to generateHTML.js
        const exName = intern.getName();
        const exRole = intern.getRole();
        const exEmail = intern.getEmail();
        const exID = intern.getID(); 
        const exSchool = "School: " + intern.getSchool(); // 'school: ' added for visual purposes

        // calls upon addCardHTML function from generateHTML.js
        generateHTML.addCardHTML(exRole, exName, exEmail, exID, exSchool);
    }
}
module.exports = Intern; // exports intern class
