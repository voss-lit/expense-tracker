

const addButton = document.querySelector(".btn")

// variables accessing my webapp 

const decriptionInput = document.getElementById("desc")
const amountInput = document.getElementById("amount")
const currencyInput = document.getElementById("currency")
const categoryInput = document.getElementById("category")
const totalAmount = document.getElementById("totalAmount")
const transactionCount = document.getElementById("transactionCount")
const filterCategory = document.getElementById("filterCategory")
const homeCurrency = document.getElementById("homeCurrency")

let exchangeRates = null
let isLoadingRates = true
let ratesError = null


// Calculate the total expenses

function calculateTotal() {
    return expenses.reduce(function (total, expense) {
        const convertedAmount = convertCurrency(
            expense.amount,
            expense.currency,
            homeCurrency.value,
            exchangeRates
        );

        return total + convertedAmount;
    }, 0);
}

// display the expenses and handle deletion

function refreshExpenses() {
    const expenseList = document.getElementById("expenseList");

    if (isLoadingRates) {
        expenseList.textContent = "Loading exchange rates...";
        return;
    }

    if (ratesError) {
        expenseList.textContent =
            "Could not load exchange rates. Please check your connection and try again.";
        return;
    }

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

function handleAddExpense() {
    const description = descriptionInput.value.trim();
    const amount = Number(amountInput.value);

    if (!description || amountInput.value.trim() === "" ||
        !Number.isFinite(amount) || amount <= 0) {
        alert("Please enter a description and a valid amount.");
        return;
    }

    if (!exchangeRates || ratesError) {
        alert("Exchange rates are unavailable. Please try again later.");
        return;
    }

    const newExpense = {
        id: crypto.randomUUID(),
        description: description,
        amount: amount,
        currency: currencyInput.value,
        category: categoryInput.value
    };

    addExpense(newExpense);

    descriptionInput.value = "";
    amountInput.value = "";

    refreshExpenses();
    refreshSummary();
}

addButton.addEventListener("click", handleAddExpense);

homeCurrency.addEventListener("change", function () {
    refreshExpenses();
    refreshSummary();
});

filterCategory.addEventListener("change", function () {
    refreshExpenses();
});

loadExchangeRates();
