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
    // const idInput = prompt.start("Please input the ID you are looking for (1-10): ");
    const idInput = "2";
    this.path = path;
    file = path + "\\" + `${idInput}.txt`;
    console.log("This is the thing please work");
    console.log(file);

    for (i = 0; i < path.length; i++) {
        fs.readFile(file, "utf-8", function(err, data){
            if (err){
                console.log("Got an error")
                return console.log(err);
            } else if (idInput > 0 && idInput < 11) {
                console.log("DATA:", data)
            }
            console.log(data);
        })
    }

    // var finalFile = fs.readFile(file, function () {
    //     console.log("We got a file!")
    //     console.log(finalFile);
    // });
    
}

PrintEmployee = (path) => {
    const idInput = prompt("Please input the ID you are looking for: ");
    path = "C:\\Users\\cstgeorges\\Documents\\GitHub\\SimplePersistence\\people\\simple";

    fs.readFile = file;
}

PrintPeopleDetails("C:\\Users\\cstgeorges\\Documents\\GitHub\\SimplePersistence\\people\\simple");