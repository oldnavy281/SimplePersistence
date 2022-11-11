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
    file = path + ``

    for (i = 0; i < path.length; i++) {
        fs.readFile(path, function(err, data){
            if (err){
                return console.log(err);
            }
            console.log(data);
        })
        switch (idInput) {
            case "1":
                console.log(fs.readFile(file));
            case "2":
                console.log(fs.readFile(file));
            case "3":
                console.log(fs.readFile(file));
            case "4":
                console.log(fs.readFile(file));
            case "5":
                console.log(fs.readFile(file));
            case "6":
                console.log(fs.readFile(file));
            case "7":
                console.log(fs.readFile(file));
            case "8":
                console.log(fs.readFile(file));
            case "9":
                console.log(fs.readFile(file));
            case "10":
                console.log(fs.readFile(file));
            default:
                return prompt.start("Please reenter a valid ID number (1-10)");
        }
    }
    var finalFile = fs.readFile(path + `${idInput}.txt`);
    console.log(finalFile);
}

PrintEmployee = (path) => {
    const idInput = prompt("Please input the ID you are looking for: ");
    path = "C:\Users\tjoyner\Database2\people\simple";

    fs.readFile = path + `${idInput}.txt`;
}

PrintPeopleDetails('C:\Users\cstgeorges\Desktop\Databases II\people\simple');