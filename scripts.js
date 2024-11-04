// Budgets Page Functionality
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('#budgetChart')) {
        const ctx = document.getElementById('budgetChart').getContext('2d');
        const budgetData = {
            labels: ['Rent', 'Groceries', 'Utilities', 'Entertainment'],
            datasets: [{
                data: [1200, 300, 150, 100],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
            }]
        };

        new Chart(ctx, {
            type: 'doughnut',
            data: budgetData
        });

        const budgetList = document.getElementById('budgetList');
        budgetData.labels.forEach((label, index) => {
            const amount = budgetData.datasets[0].data[index];
            const item = document.createElement('p');
            item.textContent = `${label}: $${amount}`;
            budgetList.appendChild(item);
        });
    }
});

// Pots Page Functionality
function addPot() {
    const potsList = document.getElementById('potsList');
    const potName = prompt('Enter the name of the new pot:');
    const potAmount = prompt('Enter the amount saved for this pot:');
    if (potName && potAmount) {
        const item = document.createElement('p');
        item.textContent = `${potName}: $${potAmount}`;
        potsList.appendChild(item);
    }
}

// Recurring Bills Page Functionality
function addRecurringBill() {
    const billsList = document.getElementById('billsList');
    const billName = prompt('Enter the name of the recurring bill:');
    const billAmount = prompt('Enter the amount for this bill:');
    if (billName && billAmount) {
        const item = document.createElement('li');
        item.textContent = `${billName}: $${billAmount}`;
        billsList.appendChild(item);
    }
}
