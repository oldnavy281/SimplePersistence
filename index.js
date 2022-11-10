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
    path = "C:\Users\cstgeorges\Desktop\Databases II\people\simple";

    fs.readFile = path + $`{idInput}.txt`;
}

PrintEmployee = (path) => {
    const idInput = prompt("Please input the ID you are looking for: ");
    path = "C:\Users\cstgeorges\Desktop\Databases II\people\simple";

    fs.readFile = path + $`{idInput}.txt`;
}