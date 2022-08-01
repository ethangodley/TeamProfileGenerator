const Manager = require("./lib/manager"); // imports class manager
const generateHTML = require("./src/generateHTML.js"); // imports generateHTML.js
const manager = new Manager(); // creates new manager

// function starts the applications operations
function start() {
    generateHTML.beginningHTML(); // calls upon function beginningHTML from generateHTML.js
    manager.newManager(); // calls upon method newManager from manager class
}
start(); // calls upon start function