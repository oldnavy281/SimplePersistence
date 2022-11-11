var fs = require('fs');
var prompt = require('prompt');




class Employee { 
    constructor (id, firstName, lastName, hireYear, override)  {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.hireYear = hireYear;
    this.override = override;
    }
}






PrintPeopleDetails = (path) => {
    const idInput = prompt.start("Please input the ID you are looking for (1-10): ");
    this.path = path;
    file = path + `${idInput}.txt`

    for (i = 0; i < path.length; i++) {
        fs.readFile(path, function(err, data){
            if (err){
                return console.log(err);
            } else if (idInput > 0 && idInput < 11) {
                console.log(fs.readFile(file));
            }
            console.log(data);
        })
    }
    var finalFile = fs.readFile(path + `${idInput}.txt`);
    console.log(finalFile);
}

PrintEmployee = (path) => {
    const idInput = prompt("Please input the ID you are looking for: ");
    path = "C:\Users\tjoyner\Database2\people\simple";

    fs.readFile = path + `${idInput}.txt`;
}

PrintPeopleDetails('simple');