class Employee {
    constructor(id, firstName, lastName, email, gender, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.salary = salary;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    yearlySalary() {
        return this.salary * 12;
    }
}
let emp1 = new Employee(101, 'Virat', 'Kohli', 'virat@gmail.com', 'male', 5000);
console.log(emp1);
console.log(emp1.fullName())
console.log(emp1.yearlySalary())