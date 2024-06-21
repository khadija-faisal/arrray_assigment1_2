// ASSIGNMENT  OF ARRAYS (1)

//Q no 1
//create an array named fruits that contains the following fruits
let fruits: string[] = ["apple", "banana", "mango", "orange"];

// Q no 2
// Declare an array named numbers that can contain only number
// elements and initialize it with the values 10, 20, 30, and 40
let numbers: number[] = [10, 20, 30, 40];

//Q no 3
//Access the third element of the fruits array and assign it to a variable named thirdFruit.
let thirdFruit = fruits[2];

//Q no 4
//Change the second element of the numbers array to 25
numbers[1] = 25;

// Q no 5
// Add the element "grape" to the end of the fruits array using the method.
fruits.push("grape");

//Q no 6
//Remove the last element from the fruits array using the
//method and assign it to a variable named lastFruit.
let lastFruit = fruits.pop();

// Q no 7
// Remove the first element from the fruits array using the
//method and assign it to a variable named firstFruit.
let firstFruit = fruits.shift();

// Q no 8
// Add the element "kiwi" to the beginning of the fruits array using the method.
fruits.unshift("kiwi");

//Q no 9
//Remove 2 elements from the fruits array starting from index 1 using the method.
fruits.splice(1, 2);
//console.log(fruits);

//Q no 10
//Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.
fruits.splice(2, 0, "pineapple", "pear");
//console.log(fruits);

//Q no 11
//Create a new array named citrusFruits that contains the first
//two elements of the fruits array using the method.
let citrusFruits = fruits.slice(0, 2);
// console.log(citrusFruits);

//Q no 12
//Create a new array named lastTwoFruits that contains the last
//two elements of the fruits array using the  method.
let lastTwoFruits = fruits.slice(2, 4);
console.log(lastTwoFruits);

// ARRAY  ASSIGNMENT 2

// Question no 1
//. Define a type alias named Product to represent a product with the following properties:
//• name (string): The name of the product.
//• price (number): The price of the product.
//• inventory (object): An object containing inventory details including:
//• stock (number): The number of products available.
//• colorOptions (string[ ]): An array listing available colors
type Product = {
  name: string;
  price: number;
  inventory: {
    stock: number;
    colorOptions: string[];
  };
};

//. Create an array named products containing at least three product objects. Each
//product object should include a name, price, and inventory details.
const products: Product[] = [
  {
    name: "outfitters",
    price: 7000,
    inventory: {
      stock: 300,
      colorOptions: ["pink", "black", "white"],
    },
  },
  {
    name: "levi's Pants",
    price: 9000,
    inventory: {
      stock: 50,
      colorOptions: ["grey", "jetblack", "navyjeans"],
    },
  },
  {
    name: "scarf",
    price: 3000,
    inventory: {
      stock: 100,
      colorOptions: ["mudbrown", "dullgreen", "nudePink"],
    },
  },
];

//. Implement a function named changeColor that takes a product object and a new color as input. This function should update the color property of the product and adjust the price based on the new color (implement your own logic, e.g., increase by 10% for red, decrease by 5% for blue)
function colorChange(products: Product, newColor: string) {
  if (!products.inventory.colorOptions.includes(newColor.toLocaleLowerCase())) {
    products.inventory.colorOptions.push(newColor);
  }
  if (newColor.toLocaleLowerCase() === "berryred") {
    products.price *= 1.1; //10% increace price
  } else if (newColor.toLocaleLowerCase() === "yellow") {
    products.price *= 0.9; // 10% decrease price
  } else if (newColor.toLocaleLowerCase() === "purple") {
    products.price *= 1.05; //5% increace price
  }
}

//4. Display each product's name, price, stock, and available colors. Iterate through the products array and print each product's details.
for (let i = 0; i < products.length; i++) {
  console.log(`Here are products Names :${products[i].name}`);
  console.log(`here are price list: ${products[i].price.toFixed(2)}`);
  console.log(`Here are products stock :${products[i].inventory.stock}`);
  console.log(
    `Here are products colors option :${products[i].inventory.colorOptions.join(
      ", "
    )}`
  );
  console.log("_________________________________________");
}
colorChange(products[1], "Yellow");

for (let i = 0; i < products.length; i++) {
  console.log(`Here are products Names :${products[i].name}`);
  console.log(`here are price list: ${products[i].price.toFixed(2)}`);
  console.log(`Here are products stock :${products[i].inventory.stock}`);
  console.log(
    `Here are products colors option :${products[i].inventory.colorOptions.join(
      ", "
    )}`
  );
  console.log("_________________________________________");
}

// Question no 2
//: Multi-Dimensional Arrays and Tuples - Student Grades

type Student = {
  name: string;
  grades: number[];
};

// 2. Create student list
const studentsList: Student[] = [
  { name: "Khadija", grades: [85, 91, 78] },
  { name: "Ayesha", grades: [69, 75, 98] },
  { name: "Aqsa", grades: [70, 85, 68] },
];

// 3. Calculate average grade of students
function calculateAverage(grades: number[]) {
  let sumOfNum = 0;
  for (let i = 0; i < grades.length; i++) {
    sumOfNum += grades[i];
  }
  let result = sumOfNum / grades.length;
  return result;
}

// 4. console student names and average grades

for (const student of studentsList) {
  const averageGrade = calculateAverage(student.grades);
  console.log(`${student.name} average grade: ${averageGrade.toFixed(2)}`);
}

//Questionn no 3
//: Array with Types and Indexing - Employee Salaries
//. Define a type alias named Employee with the following properties:
type Employee = {
  name: string;
  hoursWorked: number;
  hourlyRate: number;
  salary: number;
};
//Define an array named employees containing employee objects. Each employee
//object should include a name, hoursWorked, hourlyRate, and salary.

let employees: Employee[] = [
  { name: "fozia", hoursWorked: 9, hourlyRate: 200, salary: 0 },
  { name: "sobia", hoursWorked: 12, hourlyRate: 300, salary: 0 },
  { name: "maria", hoursWorked: 10, hourlyRate: 400, salary: 0 },
];
//. Implement a function named calculateSalary that calculates the salary for each employee based on the hours worked and hourly rate.
function calculateSalary(Employees: Employee): number {
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
  console.log(
    `${finalSalary.name} monthly salary is : ${finalSalary.salary.toFixed(0)}`
  );
}
