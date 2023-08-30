import inquirer from "inquirer";
let {num1,num2,operation} = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter first number:"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter second number:"
    },
    {
        name: "operation",
        type: "list",
        choices: ["addtion","subtraction","multiplication","division"],
        messsage:"Enter your operation"
    }
]);
if (operation === "addition"){
    console.log(`The sum of two number = ${num1 + num2}`);
}else if (operation === "subtraction"){
    console.log(`The difference of two number = ${num1 - num2}`);
}else if (operation === "multiplication"){
    console.log(`The multiplication of two number = ${num1 * num2}`);
}else if (operation === "division"){
    console.log(`The division of two number = ${num1 / num2}`);
}
