// The line below ensures that no JavaScript will run
// until the document (the web page) is completely
// loaded and the DOM is ready to access. We put all
// our JavaScript code and functions inside the curly
// braces of the ready function.
$(document).ready(function () {
    // event handlers
    $("button").click(calculateTrip);

    function calculateTrip() {
        /*
         GATHER INPUT FROM WEB PAGE
         */
        // Get the value from the input box with id="miles"
        var milesDriven = $("#miles").val();

        // Convert to a number data type (including decimals)
        milesDriven = parseFloat(milesDriven);

        // Get the value from the input box with id="mpg"
        var milesPerGallon = $("#mpg").val();

        // Convert to a number data type (including decimals)
        milesPerGallon = parseFloat(milesPerGallon);

        // Get the value from the input box with id="mph"
        var milesPerHour = $("#mph").val();

        // Convert to a number data type (truncating decimals)
        milesPerHour = parseInt(milesPerHour);

        // Get the value from the input box with id="dpg"
        var dollarsPerGallon = $("#dpg").val();

        // Convert to a number data type (including decimals)
        dollarsPerGallon = parseFloat(dollarsPerGallon);

        /*
        PERFORM CALCULATIONS AND DISPLAY OUTPUT
         */

        // Calculate the total hours for the trip
        var hours = milesDriven / milesPerHour;

        // Round the hours to one decimal place for display
        var hoursDisplay = hours.toFixed(1);

        // Update the text in the span with id="tripHours"
        $("#tripHours").text(hoursDisplay);

        // Calculate the total gas used
        var totalGallonsUsed = milesDriven / milesPerGallon;

        // Calculate the cost for that many gallons
        var costOfGas = totalGallonsUsed * dollarsPerGallon;

        // Round the cost to dollars/cents for display
        var costOfGasDisplay = costOfGas.toFixed(2);

        // Update the text in the span with id="tripCost"
        $("#tripCost").text(costOfGasDisplay);

        // Unhide the results div
        $(".output").show();
    }

});