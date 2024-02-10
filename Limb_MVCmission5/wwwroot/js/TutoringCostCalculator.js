document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('tutoringCostCalculator').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting in the traditional way

        // Retrieve user input
        const hours = parseInt(document.getElementById('hours').value);
        const level = document.getElementById('level').value;

        // Define hourly rates based on skill level
        const rates = {
            beginner: 30,
            intermediate: 45,
            advanced: 60
        };

        // Calculate cost
        const cost = hours * rates[level];

        // Display the result
        alert(`Estimated tutoring cost: $${cost}`);
    });
});
