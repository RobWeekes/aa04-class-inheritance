const Person = require('./person');

class Teacher extends Person {
    constructor(firstName, lastName, subject, yearsOfExperience) {
        super(firstName, lastName);
        this.subject = subject;
        this.yearsOfExperience = yearsOfExperience;
    }

    static combinedYearsOfExperience(teachers) {
        let years = 0;
        teachers.forEach(teacher => {
            years += teacher.yearsOfExperience;
        });
        // let years = teachers.reduce((acc, teachers.yearsOfExperience) => acc + teachers.yearsOfExperience, 0,);
        // console.log(years);
        return years;
    }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
