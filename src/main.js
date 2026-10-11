

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
