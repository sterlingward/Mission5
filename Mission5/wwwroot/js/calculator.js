$(document).ready(function() {
    $("#calculateBtn").click(function() {
        // Get the number of hours entered
        var hours = parseFloat($("#hoursInput").val());
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid positive number for hours.");
            return;
        }

        // Get the rate from the non-editable field
        var rate = parseFloat($("#rate").val());
        var total = hours * rate;

        // Display the total cost formatted as currency
        $("#totalOutput").text("$" + total.toFixed(2));
    });
});
