#! usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.green("Welcome to Currency Convertor!"));
const currency = {
    USD: 1,
    PKR: 277.54,
    INR: 74.57,
    EURO: 0.92,
    RUB: 52.58,
    AUD: 1.52,
    EGP: 47.33,
    GBP: 0.76,
};
let answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.yellow("Enter from currency:"),
        choices: ["USD", "PKR", "INR", "EURO", "RUB", "AUD", "EGP", "GBP"],
    },
    {
        name: "to",
        type: "list",
        message: chalk.yellow("Enter to currency:"),
        choices: ["USD", "PKR", "INR", "EURO", "RUB", "AUD", "EGP", "GBP"],
    },
    {
        name: "amount",
        type: "number",
        message: chalk.yellow("How much amount you want to convert?"),
    }
]);
let fromList = currency[answer.from];
let toList = currency[answer.to];
let amount = answer.amount;
let basicAmount = amount / fromList;
let convertedAmount = basicAmount * toList;
console.log(chalk.red(convertedAmount.toFixed(2)));
console.log(chalk.white("\n********"));
