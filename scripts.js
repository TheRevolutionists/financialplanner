// General Helper Functions
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function loadData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

// User Authentication Logic
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const storedUser = localStorage.getItem(username);
            if (storedUser && storedUser === password) {
                alert('Login successful!');
                window.location.href = 'index.html';
            } else {
                alert('Invalid username or password.');
            }
        });
    }

    document.getElementById('signup')?.addEventListener('click', function () {
        const username = prompt('Enter a new username:');
        const password = prompt('Enter a new password:');
        if (username && password) {
            localStorage.setItem(username, password);
            alert('Account created! You can now log in.');
        }
    });
});

// Budgets Page Functionality
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.budgets')) {
        let budgets = loadData('budgets');
        displayBudgets(budgets);

        function displayBudgets(budgets) {
            const budgetList = document.getElementById('budgetList');
            budgetList.innerHTML = '';
            budgets.forEach(budget => {
                const item = document.createElement('p');
                item.textContent = `${budget.name}: $${budget.amount}`;
                budgetList.appendChild(item);
            });
        }

        document.getElementById('addBudget')?.addEventListener('click', function () {
            const name = prompt('Enter budget name:');
            const amount = prompt('Enter budget amount:');
            if (name && amount) {
                budgets.push({ name, amount: parseFloat(amount), currentAmount: 0 });
                saveData('budgets', budgets);
                displayBudgets(budgets);
            }
        });
    }
});

// Pots Page Functionality
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.pots')) {
        let pots = loadData('pots');
        displayPots(pots);

        function displayPots(pots) {
            const potsList = document.getElementById('potsList');
            potsList.innerHTML = '';
            pots.forEach(pot => {
                const item = document.createElement('p');
                item.textContent = `${pot.name}: $${pot.amount}`;
                potsList.appendChild(item);
            });
        }

        window.addPot = function () {
            const name = prompt('Enter the name of the new pot:');
            const amount = prompt('Enter the amount saved for this pot:');
            if (name && amount) {
                pots.push({ name, amount: parseFloat(amount) });
                saveData('pots', pots);
                displayPots(pots);
            }
        };
    }
});

// Recurring Bills Page Functionality
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.recurring-bills')) {
        let bills = loadData('recurringBills');
        displayBills(bills);

        function displayBills(bills) {
            const billsList = document.getElementById('billsList');
            billsList.innerHTML = '';
            bills.forEach(bill => {
                const item = document.createElement('li');
                item.textContent = `${bill.name}: $${bill.amount} (Due: ${bill.dueDate})`;
                billsList.appendChild(item);
            });
        }

        window.addRecurringBill = function () {
            const name = prompt('Enter the name of the recurring bill:');
            const amount = prompt('Enter the amount for this bill:');
            const dueDate = prompt('Enter the due date (YYYY-MM-DD):');
            if (name && amount && dueDate) {
                bills.push({ name, amount: parseFloat(amount), dueDate });
                saveData('recurringBills', bills);
                displayBills(bills);
            }
        };
    }
});

// Transactions Page Functionality
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.transactions')) {
        let transactions = loadData('transactions');
        displayTransactions(transactions);

        function displayTransactions(transactions) {
            const transactionsList = document.getElementById('transactionsList');
            transactionsList.innerHTML = '';
            transactions.forEach(tx => {
                const item = document.createElement('p');
                item.textContent = `${tx.date} - ${tx.name}: $${tx.amount}`;
                transactionsList.appendChild(item);
            });
        }

        window.addTransaction = function () {
            const name = prompt('Enter the transaction name:');
            const amount = prompt('Enter the transaction amount:');
            const date = prompt('Enter the transaction date (YYYY-MM-DD):');
            if (name && amount && date) {
                transactions.push({ name, amount: parseFloat(amount), date });
                saveData('transactions', transactions);
                displayTransactions(transactions);
            }
        };
    }
});
