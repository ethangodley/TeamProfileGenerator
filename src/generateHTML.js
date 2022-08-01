const fs = require('fs'); // imports fs

// creates the start of html page
function beginningHTML () {
    // creates variable containing starter html code
    const starterHTML = 
` 
<!DOCTYPE html>
<html lang="en">
    
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roster</title>
    <link rel="stylesheet" href="../dist/style.css">
    <link rel="stylesheet" href="../dist/global.css">
</head>
    
<body>
    <header class = "heading">
        <h1 class = "title">My Team</h1>
    </header>
    <main class = 'container'>`

    // creates index.html and writes starter html to index.html
    fs.writeFile('index.html', starterHTML, (err) => err ? console.error(err) : console.log()); 
}
// creates an employee card for each member added importing details of employees
function addCardHTML(role, name, email, id, identifier) {
    // creates variable storing html code integrating imported detials of employee
    let valIdentifier ="";
    console.log(identifier);
    if(identifier.includes("https", 0)) {
        valIdentifier = `<a href="${identifier}" target="_blank">Visit Github</a>`
    }
    else{
        valIdentifier = identifier;
    }
    const addCard = 
`
        <section class = 'card'>
            <h2>${name}</h2>
            <h2>${role}</h2>
            <hr>
            <ul>
                <li>ID: ${id}</li>
                <hr>
                <li>Email: <a href = mailto:${email}>${email}</a></li>
                <hr>
                <li>${valIdentifier}</li>
            </ul>
        </section>
`;

    // writes each card to index.html
    fs.appendFile('index.html', addCard, (err) => err ? console.error(err) : console.log('Member added!\n')); 
}

// creates finishing html code
function endingHTML() {
    // creates variable containing final html
    const finalHTML =
`
    </main>
</body>
</html>
`;

    //writes final html to index.html
    fs.appendFile('index.html', finalHTML, (err) => err ? console.error(err) : console.log('Page generated!\n')); 
}

// exports each function of generateHTML
module.exports = {
    beginningHTML,
    addCardHTML,
    endingHTML
}