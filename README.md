# Expense Tracker with Live Currency Conversion

A simple, beginner-friendly web application that helps users record, manage, and track their expenses. The application supports multiple currencies and converts expenses into a selected home currency using exchange rates retrieved from a free currency exchange API.

## Features

- **Add Expenses:** Record expenses using a description, amount, currency, and category.
- **Multiple Currencies:** Enter expenses in KES, USD, EUR, GBP, and other supported currencies configured in the application.
- **Live Currency Conversion:** Convert expenses into the selected home currency using exchange rates from an external API.
- **Expense Summary:** View the total expenses and transaction count.
- **Delete Expenses:** Remove expenses that are no longer needed.
- **Category Filtering:** Filter expenses by category.
- **Home Currency Selection:** Choose the currency used to display the converted expense totals.
- **Responsive Design:** Use the application on different screen sizes.
- **Unit Testing:** Test currency conversion utility functions using Jest.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- JavaScript modules (ES modules)
- Fetch API
- Exchange Rate API
- Node.js and npm
- Jest for unit testing
- ESLint for code quality

## Project Structure

expense-tracker/
--index.html
-- style.css
-- src/
    - api.js
    - main.js
    - state.js
    - ui.js
    - utils.js
--tests/
   -utils.test.js
   -package.json
   -package-lock.json
--eslint.config.js
-- README.md

**Note:** The `node_modules/` directory is generated when dependencies are installed and should not normally be committed to GitHub. The structure above reflects the intended project organization; adjust filenames if your actual project differs.

## Getting Started

### Prerequisites

Before running the project, make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js
- [Visual Studio Code](https://code.visualstudio.com/)

### Installation

1. Clone the repository:

git clone https://github.com/voss-lit/expense-tracker.git

2. Navigate into the project directory:

cd expense-tracker

3. Install the project dependencies:

npm install

4. Open the project in Visual Studio Code:

   code .

### Running the Application

Because the application uses JavaScript modules, run it through a local development server rather than opening the HTML file directly.

1. Open the project in Visual Studio Code.
2. Start Live Server from `index.html`.
3. Open the local URL provided by Live Server in your browser.
4. Add expenses, select currencies, and test the available features.

An internet connection is required to retrieve current exchange rates from the external API.

## Running the Tests

The project uses Jest to test the currency conversion utility functions.

Run the following command in the project root:

```bash
npm test
```

The test suite checks currency conversion calculations, including conversions between supported currencies and converting a currency into itself.

## Code Quality

ESLint is used to help identify potential JavaScript errors and maintain consistent coding practices.

Run the lint command with:

```bash
npm run lint
```

This command requires a working `lint` script in `package.json` and a compatible ESLint configuration.

## How It Works

1. The application retrieves exchange rates from an external currency exchange API.
2. The user enters an expense and selects its currency and category.
3. The application stores the expense details.
4. The currency conversion utility converts the expense into the selected home currency.
5. The interface updates the expense list and summary.
6. The user can filter expenses by category or delete individual expenses.

## Learning Objectives

This project demonstrates practical use of:

- Variables, arrays, and objects.
- Functions and event listeners.
- Array methods such as `map()`, `filter()`, and `reduce()`.
- The spread operator.
- DOM manipulation.
- ES modules and code organization.
- Asynchronous JavaScript using `async/await`.
- Fetching data from a REST API.
- Unit testing with Jest.
- Code quality checks with ESLint.
- Git and GitHub version control.

## Future Improvements

Possible improvements include:

- Saving expenses in local storage so they persist after refreshing the page.
- Adding expense editing functionality.
- Improving accessibility and mobile responsiveness.
- Displaying the last successful exchange-rate update.
- Deploying the application to GitHub Pages.

## Author

**Voss Lit**

GitHub: [@voss-lit](https://github.com/voss-lit)

## License

This project is licensed under the ISC License, as specified in the project configuration.
