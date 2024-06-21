// //    ASSIGNMENT  OF ARRAYS (1)
//Define an array named employees containing employee objects. Each employee
//object should include a name, hoursWorked, hourlyRate, and salary.
let employees = [
    { name: "fozia",
        hoursWorked: 9,
        hourlyRate: 200,
        salary: 0
    },
    { name: "sobia",
        hoursWorked: 12,
        hourlyRate: 300,
        salary: 0
    },
    { name: "maria",
        hoursWorked: 10,
        hourlyRate: 400,
        salary: 0
    }
];
//. Implement a function named calculateSalary that calculates the salary for each employee based on the hours worked and hourly rate.
function calculateSalary(Employees) {
    let Salary = Employees.hoursWorked * Employees.hourlyRate * 30; // additional calulation for a month slary
    Employees.salary = Salary;
    if (Employees.hoursWorked >= 12) {
        Salary *= 1.1; // 10% bonus on salary  
    }
    return Salary;
}
for (let i = 0; i < employees.length; i++) {
    employees[i].salary = calculateSalary(employees[i]);
}
for (let i = 0; i < employees.length; i++) {
    let finalSalary = employees[i];
    console.log(`${finalSalary.name} monthly salary is : ${finalSalary.salary.toFixed(0)}`);
}
export {};
