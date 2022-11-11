var fs = require('fs');




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
    const idInput = prompt("Please input the ID you are looking for: ");
    path = "C:\Users\tjoyner\Database2\people\simple";
    file = path + ``

    for (i = 0; i < path.length; i++) {
        
        fs.readFile(path, function(err, data){
            if (err){
                return console.log(err);
            }
            console.log(data);
        })
    }
    fs.readFile = path + `${idInput}.txt`;
}

PrintEmployee = (path) => {
    const idInput = prompt("Please input the ID you are looking for: ");
    path = "C:\Users\tjoyner\Database2\people\simple";

    fs.readFile = path + `${idInput}.txt`;
}

console.log(PrintPeopleDetails);