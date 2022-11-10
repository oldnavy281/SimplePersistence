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
    const input = prompt("Please input the file path you wish to use: ");
    path = input;
}

PrintEmployee = (path) => {
    const input = prompt("Please input the file path you wish to use: ");
    path = input;
}