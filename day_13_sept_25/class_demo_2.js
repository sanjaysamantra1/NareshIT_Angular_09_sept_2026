// ES_6  Class
class Student {
    constructor(roll, name, course, time) {  // constructor function
        this.roll = roll;
        this.name = name;
        this.course = course;
        this.time = time;
    }
}
let std1 = new Student(101, 'Bipul', 'Angular', '7.00pm')
let std2 = new Student(102, 'Deepak', 'React', '8.00am')
console.log(std1)
console.log(std2)