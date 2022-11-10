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