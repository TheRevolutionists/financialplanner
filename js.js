document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('budgetChart').getContext('2d');
    const budgetChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Food', 'Rent', 'Entertainment', 'Utilities'],
            datasets: [{
                data: [100, 200, 50, 88],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
            }]
        }
    });
});
