// ES_5  Class
function Student(roll, name, course, time) {  // constructor function
    this.roll = roll;
    this.name = name;
    this.course = course;
    this.time = time;
}
let std1 = new Student(101, 'Bipul', 'Angular', '7.00pm')
let std2 = new Student(102, 'Deepak', 'React', '9.00am')

console.log(std1)
console.log(std2)