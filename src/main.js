

const addButton = document.querySelector(".btn")

// variables accessing my webapp 
let exchangeRates = null;
let isLoadingRates = true;
let ratesError = null;
const decriptionInput = document.getElementById("desc")
const amountInput = document.getElementById("amount")
const currencyInput = document.getElementById("currency")
const categoryInput = document.getElementById("category")
const totalAmount = document.getElementById("totalAmount")
const transactionCount = document.getElementById("transactionCount")
const filterCategory = document.getElementById("filterCategory")
const homeCurrency = document.getElementById("homeCurrency")
