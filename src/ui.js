
import { convertCurrency } from "./utils.js";

export function displayExpenses(
    expenses,
    exchangeRates,
    homeCurrency,
    selectedCategory,
    onDelete
) {
    const expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";

    const filteredExpenses = expenses.filter(function (expense) {
        return selectedCategory === "all" ||
            expense.category === selectedCategory;
    });

    if (filteredExpenses.length === 0) {
        expenseList.textContent = "No expenses added yet.";
        return;
    }

    filteredExpenses.forEach(function (expense) {
        const expenseItem = document.createElement("div");
        const expenseText = document.createElement("p");

        let convertedAmount = expense.amount;

        if (exchangeRates) {
            convertedAmount = convertCurrency(
                expense.amount,
                expense.currency,
                homeCurrency,
                exchangeRates
            );
        }

        expenseText.textContent =
            expense.description + " - " +
            expense.currency + " " +
            expense.amount.toLocaleString() +
            " (" + homeCurrency + " " +
            convertedAmount.toLocaleString("en-KE", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }) + ") - " +
            expense.category;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            onDelete(expense.id);
        });

        expenseItem.appendChild(expenseText);
        expenseItem.appendChild(deleteButton);
        expenseList.appendChild(expenseItem);
    });
}

export function updatedSummary(expenses, total, homeCurrency) {
    const totalAmount = document.getElementById("totalAmount");
    const transactionCount = document.getElementById("transactionCount");

    totalAmount.textContent =
        homeCurrency + " " +
        total.toLocaleString("en-KE", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

    transactionCount.textContent = expenses.length;
}
