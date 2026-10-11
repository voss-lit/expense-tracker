
import { fetchExchangeRates } from "./api.js";
import { convertCurrency } from "./utils.js";

import {
    expenses,
    addExpense,
    deleteExpense
} from "./state.js";

import {
    displayExpenses,
    updatedSummary
} from "./ui.js";

// Access HTML elements
const addButton = document.querySelector(".btn");

const descriptionInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const currencyInput = document.getElementById("currency");
const categoryInput = document.getElementById("category");

const filterCategory = document.getElementById("filterCategory");
const homeCurrency = document.getElementById("homeCurrency");

// Store the exchange rates returned by the API
let exchangeRates = null;


// Refresh the expense list
function refreshExpenses() {
    displayExpenses(
        expenses,
        exchangeRates,
        homeCurrency.value,
        filterCategory.value,
        function (id) {
            deleteExpense(id);
            refreshExpenses();
            refreshSummary();
        }
    );
}


// Calculate the total expenses
function calculateTotal() {
    return expenses.reduce(function (sum, expense) {
        let convertedAmount = expense.amount;

        if (exchangeRates) {
            convertedAmount = convertCurrency(
                expense.amount,
                expense.currency,
                homeCurrency.value,
                exchangeRates
            );
        }

        return sum + convertedAmount;
    }, 0);
}


// Refresh the displayed on the webpage
function refreshSummary() {
    updatedSummary(
        expenses,
        calculateTotal(),
        homeCurrency.value
    );
}


// adding a new expense
addButton.addEventListener("click", function () {
    const description = descriptionInput.value.trim();
    const amount = Number(amountInput.value);

    // Validate the user's input
    if (
        description === "" ||
        amountInput.value.trim() === "" ||
        !Number.isFinite(amount) ||
        amount <= 0
    ) {
        alert("Please enter a description and a valid amount.");
        return;
    }

    // Creating an object
    const newExpense = {
        id: crypto.randomUUID(),
        description: description,
        amount: amount,
        currency: currencyInput.value,
        category: categoryInput.value
    };

    addExpense(newExpense);

    refreshExpenses();
    refreshSummary();

    descriptionInput.value = "";
    amountInput.value = "";
});


// Refresh expenses when the category filter changes
filterCategory.addEventListener("change", function () {
    refreshExpenses();
});


// Recalculate and redisplay expenses when the home currency changes
homeCurrency.addEventListener("change", function () {
    refreshExpenses();
    refreshSummary();
});


// Fetch exchange rates when the application starts
async function loadExchangeRates() {
    try {
        exchangeRates = await fetchExchangeRates("USD");

        console.log("Exchange rates loaded:", exchangeRates);
    } catch (error) {
        console.error(
            "Could not load exchange rates:",
            error.message
        );
    } finally {
        refreshExpenses();
        refreshSummary();
    }
}


refreshExpenses();
refreshSummary();

loadExchangeRates();
