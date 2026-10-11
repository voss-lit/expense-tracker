
export const expenses = [];

export function addExpense(expense) {
    expenses.push(expense);
}


export const expenses = [];

export function addExpense(expense) {
    expenses.push(expense);
}

export function deleteExpense(id) {
    const updatedExpenses = expenses.filter(function (expense) {
        return expense.id !== id;
    });

    expenses.length = 0;
    expenses.push(...updatedExpenses);
}
